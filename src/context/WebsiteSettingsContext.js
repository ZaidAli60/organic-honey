import { createContext, useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";

// Context Create
const WebsiteSettingsContext = createContext(); // ✅

const initialState = {
    faqs: [],
    testimonials: [],
    teams: [],
    announcements: [],
    isLoading: true,
};

// Provider Component
export const WebsiteSettingsProvider = ({ children }) => {
    const [documents, setDocuments] = useState(initialState);

    const readDocuments = useCallback(async () => {
        axios.get(`${window.api}/public/website-content?status=active`)
            .then((res) => {
                const { status, data } = res;
                if (status === 200) {
                    setDocuments((s) => ({
                        ...s,
                        faqs: data.faqs,
                        teams: data.teams,
                        testimonials: data.testimonials,
                        announcements: data.announcements,
                    }));
                }
            })
            .catch((err) => {
                console.log('error =>', err);
            })
            .finally(() => {
                setDocuments((s) => ({ ...s, isLoading: false }));
            });
    }, []);

    useEffect(() => {
        readDocuments();
    }, [readDocuments]);

    return (
        <WebsiteSettingsContext.Provider value={{ ...documents }}>  {/* ✅ Fixed here */}
            {children}
        </WebsiteSettingsContext.Provider>
    );
};

// Custom Hook
export const useWebsiteSettings = () => useContext(WebsiteSettingsContext);
