export default function education() {
    return (
        <>
            <section className="w-full">
                <div className="">
                    <div className="blurbBox">
                        <div className="quickBlurb">Here, we provide a variety of <span className="boldOrange">educational materials</span> to help you understand the <span className="boldOrange">importance of wildlife conservation and environmental sustainability.</span>   Whether you{"'"}re a student, educator, or simply curious about the natural world, you{"'"}ll find resources to inspire and inform.</div>
                        <img className="blurbImg" src="kai_edu_logo0.png" alt="education teaching" />

                    </div>
                    <div className="contentBlurb blueBlurb flex align-middle flex-col justify-content ">
                        <div id="top" className="whiteHeader text-center">
                                Articles and Blogs
                        </div>
                        <div className="flex justify-content lg:flex-row flex-col flex-wrap columns-1 mt-3">
                            <div id="left" className = "mt-10 lg:w-[60%] w-full">
                                <div className="flex flex-row  items-center  flex-wrap justify-center text-center space-y-5 leading-[3rem] ">
                                    <div className="smallWhiteHeader  w-full">
                                        What is Wildlife rehabilitation?
                                    </div>
                                    <div className="insideText inline-block columns-1 w-full ">
                                    A brief history and summary of Wildlife rehab over the past century <br/> provided by the National Wildlife Rehabilitators Association.
                                    </div>
                                    <a target="_blank" href="https://cdn.ymaws.com/www.nwrawildlife.org/resource/resmgr/website_2021/brn_res_rehab_resources/brn_res_aspiring_rehabilitators/what_is_wr.pdf" className="coolBtn "> <span className="px-10 py-10">READ</span></a>
                                </div>
                            </div>
                            <div id="right" className = "mt-10 pl-[2rem] lg:w-[40%] w-full flex justify-center ">
                                <div className="flex items-center  h-full">
                                    <img className=" max-w-[100%] max-h-[120px] w-auto h-auto" src="kai_edu_logo1.png" alt="education teaching" />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="contentBlurb greenBlurb flex align-middle flex-col justify-content ">
                        <div id="top" className="whiteHeader text-center">
                            Videos
                        </div>
                        <div className="flex justify-content lg:flex-row flex-col flex-wrap columns-1">
                            <div id="left" className = "mt-10 lg:w-[60%] w-full">
                                <div className="flex flex-row  items-center  flex-wrap justify-center text-center space-y-5 leading-[3rem] ">
                                    <div className="smallWhiteHeader  w-full">
                                        PBS UNTAMED: Wildlife Rehabilitation
                                    </div>
                                    <div className="insideText inline-block columns-1 w-full">
                                        Join Center staff & several at-home permitted Virginia wildlife rehabilitators to learn more about what wildlife rehabilitators do, the invaluable service they provide to their communities, & the role that they play in conservation.
                                    </div>
                                    <button className="coolBtn"> <span className="px-10 py-10">WATCH</span></button>
                                </div>
                            </div>
                            <div id="right" className = " pl-[2rem] lg:w-[40%] w-full flex justify-center ">
                                <div className="flex items-center  h-full">
                                <iframe width="370" height="250" src="https://www.youtube.com/embed/Lix-Lfb3d10" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                    <div className="contentBlurb blueBlurb flex align-middle flex-col justify-content ">
                        <div id="top" className="whiteHeader text-center">
                                Educators Corner
                        </div>
                        <div className="flex justify-content lg:flex-row flex-col flex-wrap columns-1 mt-3">
                            <div id="left" className = "mt-10 lg:w-[60%] w-full">
                                <div className="flex flex-row  items-center  flex-wrap justify-center text-center space-y-5 leading-[3rem] ">
                                    <div className="insideText inline-block columns-1 w-full ">
                                        Are you an <span className="boldOrange">educator</span> looking to incorporate wildlife conservation into your curriculum? Our {'"'}Educator{"'"}s Corner{'"'} <span className="boldOrange">offers lesson plans, activities, and resources designed to engage students</span> and foster a deeper understanding of the natural world.                                    </div>
                                    <button className="coolBtn "> <span className="px-10 py-10">LEARN MORE</span></button>
                                </div>
                            </div>
                            <div id="right" className = "mt-10 pl-[2rem] lg:w-[40%] w-full flex justify-center ">
                                <div className="flex items-center  h-full">
                                    <img className=" max-w-[100%] w-auto h-auto" src="kai_edu_logo3.png" alt="education teaching" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
