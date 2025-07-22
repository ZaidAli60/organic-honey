import { message, Spin } from 'antd'
import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Blog() {

    const [documents, setDocuments] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    const readDocuments = useCallback(async () => {
        setIsLoading(true)
        axios.get(`${window.api}/public/blogs`)
            .then((res) => {
                const { data, status } = res
                if (status === 200) {
                    const array = data.blogs.map(blog => ({ ...blog, key: blog.uid }))
                    setDocuments(array)
                }
            })
            .catch(error => {
                console.error(error)
                message.error(error.response?.data?.message || "Something went wrong while getting the blogs")
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])
    useEffect(() => { readDocuments() }, [readDocuments])

    return (
        <>
            <div className="container our-blog-section -pt-140 -pb-140">
                <div className='text-center'>
                    <span className="badge bg-info text-white text-uppercase px-3 py-2 fs-5 ">Latest Blog & Articles</span>
                </div>

                <h1 className='-mb-60 text-center'>Explore blogs and articles on tech, blockchain,<br className='d-none d-xl-block' /> and the latest trends.</h1>

                <div className="row ">
                    {isLoading ? (
                        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
                            <Spin size="large" />
                        </div>
                    ) : (
                        <div className="row">
                            {documents.map((blog, index) => (
                                <div key={index} className="col-12 col-md-6 col-lg-4">
                                    <Link to={`blog/${blog.slug}`} className='text-decoration-none'>
                                        <div className="bg-light card-items" data-aos="fade-up" data-aos-delay="200">
                                            <div className="blogs-item">
                                                <div className="blogs-image">
                                                    <img src={blog.imageURL} alt={blog.title} />
                                                </div>
                                                <div className="blogs-content">
                                                    <p className='opacity-75 fs-5 text-primary'>
                                                        {window.dateFormat(blog.createdAt, "dddd DD-MMM-YYYY")}
                                                    </p>
                                                    <h2 className='mb-0 text-primary'>{blog.title}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div >
        </>
    )
}
