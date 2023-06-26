import React from 'react'

export default function Home() {
    return (
        <div>
            <section className="header relative pt-16 items-center flex h-screen max-h-860-px bg-green-100 ">
                <div className="container mx-auto items-center flex flex-wrap">
                    <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                        <div className="pt-32 sm:pt-0">
                            <h2 className="font-semibold text-4xl text-blueGray-600">Notus NextJS - A beautiful extension for Tailwind CSS.</h2>
                            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">Notus NextJS is Free and Open Source. It does not change any of the CSS from <a href="https://tailwindcss.com/?ref=creativetim" className="text-blueGray-600" target="_blank" rel="noopener noreferrer">Tailwind CSS</a>. It features multiple HTML elements and it comes with dynamic components for ReactJS, Vue and Angular.</p>
                            <div className="mt-12">
                                <a href="#" target="_blank" className="get-started text-white font-bold px-6 py-4 rounded-full outline-none focus:outline-none mr-1 mb-1 bg-green-500 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg hover:bg-white hover:text-green-500 ease-linear transition-all duration-150">Get started</a>
                                <a href="#" className="github-star ml-1 text-white font-bold px-6 py-4 rounded-full outline-none focus:outline-none mr-1 mb-1 bg-green-500 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg hover:bg-white hover:text-green-500 ease-linear transition-all duration-150" target="_blank">Github Star</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
