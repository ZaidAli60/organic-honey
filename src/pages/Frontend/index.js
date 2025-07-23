import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Button, Image, Modal, Typography } from 'antd'
// import { useWebsiteSettings } from 'context/WebsiteSettingsContext'
import Header from "../../components/header"
// import Footer from 'components/footer/Footer'
import Home from "./Home"
import Footer from 'components/footer/Footer'
// import Slider from "react-slick";

const { Text } = Typography;


export default function Index() {

    // const { isLoading, announcements } = useWebsiteSettings()
    const [isModal, setIsModal] = useState(false)

    const navigate = useNavigate()

    // let settings = { dots: false, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1, };

    // useEffect(() => {
    //     let announcementCheck = JSON.parse(sessionStorage.getItem("isMainAd"))
    //     if (!announcementCheck && announcements.length > 0 && !isLoading) { setIsModal(true); sessionStorage.setItem('isMainAd', JSON.stringify(true)) }
    // }, [announcements, isLoading])

    // const handleClick = (url) => {

    //     if (url) { navigate(url) }
    //     setIsModal(false)
    //     sessionStorage.setItem('isMainAd', JSON.stringify(true))

    // const handleClick = (url) => {
    //     if (url?.startsWith('http')) {
    //         window.open(url, '_blank', 'noopener,noreferrer')
    //     } else {
    //         navigate(url)
    //     }

    //     setIsModal(false)
    //     sessionStorage.setItem('isMainAd', JSON.stringify(true))
    // }

    // }
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </main>
            <Footer />

            {/* <Modal centered open={isModal} closable={false} onCancel={() => setIsModal(false)} footer={null} className='announcement-modal' >
                {announcements?.length === 1
                    ? <>
                        <Image src={announcements[0].photoURL} preview={false} />

                        <div className="p-3">
                            <Text className='text-justify d-block mb-3 mx-3 text-muted' style={{ textAlignLast: "center" }}>{announcements[0].text}</Text>
                            <Button type='primary' size='large' block onClick={() => { handleClick(announcements[0].btnUrl) }}>{announcements[0].btnText}</Button>
                        </div>
                    </>
                    : <Slider {...settings}>
                        {announcements?.map((ann, i) => <div key={i}>
                            <Text className='text-center d-block' style={{ fontSize: 18, fontWeight: 'bold' }}>{ann.text}</Text>
                            <Image src={ann.photoURL} preview={false} />
                            <Button type='primary' block onClick={() => window.open(ann.btnUrl, "_blank")}>{ann.btnText}</Button>
                        </div>)}
                    </Slider>
                }
            </Modal> */}
        </>
    )
}
