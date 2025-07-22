import { useEffect } from 'react';
import './App.scss';
import Routes from "./pages/Routes"
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ConfigProvider, App as AntdApp } from 'antd'; // ✅ Import App from antd

const colors = {
  primary: "#0a1420",
  success: "#05CD99",
  danger: "#D8463D",
  info: "#80BDF4",
  blue: "#2B3674",
  btnBoxShadow: "#2B367440",
  purple: "#4d238f",
  pink: "#D066CE",
  gray: "#DFE1EA",
  yellow: "#FEF479",
}


function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  useEffect(() => {
    AOS.init({ once: true });
  }, [])
  return (
    <>
      <ConfigProvider
        theme={{
          token: { colorPrimary: colors.primary, colorError: colors.danger, colorInfo: colors.info, colorSuccess: colors.success, colorWarning: colors.yellow, },
          components: { Button: { boxShadow: "none", controlOutlineWidth: 0 } }
        }}
      >
        <AntdApp> {/* ✅ This makes message and notification work */}
          <Routes />
        </AntdApp>
      </ConfigProvider>
    </>
  );
}

export default App;
