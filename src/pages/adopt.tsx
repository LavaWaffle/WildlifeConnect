export default function education() {
    return (
        <>
            <section className="w-full">
                <div className="">
                    <div className="blurbBox">
                        <div className="quickBlurb">Welcome to the <strong className="boldOrange">"Adopt” an Animal</strong> program by Wildlife Connect. By <strong>symbolically adopting</strong> an animal, you become a vital part of our efforts to care for and rehabilitate injured, sick, or orphaned wildlife. Your support directly contributes to the well-being of these remarkable creatures.</div>
                        <img className="blurbImg" src="adopt1.png" alt="duck" />

                    </div>
                </div>
                <div className="flex justify-center flex-col items-center my-24 flex-wrap ">
                    <div className="font-oswald font-extralight tracking-[.25em] xl:text-[100px] lg:text-[80px] md:text-[72px] text-[54px] text-[#354F52] border-y-8 border-[#354F52] xl:px-40 lg:px-32 md:px-20 px-10"> 
                        How it Works
                    </div>
                    <div className="flex lg:flex-row flex-col items-center justify-stretch w-full">
                        <div className="flex flex-col  items-center flex-wrap mt-20 w-[33%]">
                            <img w-full h-full src="adopt2.png" />
                            <div className="adoptHeader  ">
                                Adopt
                            </div>
                            <div className="adoptText">
                                an animal you want to <br/>symbolically “adopt”.
                            </div>
                        </div>
                        <div className="flex lg:flex-col flex-col-reverse items-center flex-wrap mt-20 w-[33%]">
                            <div>
                                <div className="adoptHeader text-center">
                                    Select
                                </div>
                                <div className="adoptText">
                                    your preferred package<br/>and stay connected with<br/>heartwarming updates of<br/>your animal.
                                </div>
                            </div>
                            <img w-full h-full className="mt-[20px]" src="adopt3.png"/>
                        </div>
                        <div className="flex flex-col items-center flex-wrap mt-20 w-[33%]">
                            <img w-full h-full src="adopt4.png" />
                            <div className="adoptHeader">
                                Contribute
                            </div>
                            <div className="adoptText">
                                to the animal's care,<br/>treatment, rehab, and<br/>triumphant return back<br/>into the wild.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col items-stretch grow justify-stretch">
                    <div className="lg:w-[33%] h-full mb-4">
                        <div className="bg-[#2F3E46]  rounded-[50px] mx-10 px-8 py-8 ">
                            <div className="flex flex-col items-center ">
                                <div className="flex justify-center bg-[#2F3E46] w-auto h-auto rounded-[50px] ">
                                    <img className=" border-white border-4" src="adopt5.png"/>
                                </div>
                                <div className="flex flex-col items-center justify-center text-center relative">
                                    <span className="adoptOrange">Nutty<br/></span>
                                    <span className="adoptSubheading absolute xl:top-[4rem] top-[3rem] ">Gray Squirrel<br/></span>
                                    <span className="adoptDescription py-[2rem]">Born in a concrete jungle, Nutty faced scarce resources and shifting landscapes, but with boundless determination, she adapted, a testament to nature's resilience.</span>
                                </div>
                                <button className="coolBtn"> <span className="">LEARN MORE</span></button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[33%] mb-4">
                        <div className="bg-[#2F3E46]  rounded-[50px] mx-10 px-8 py-8">
                            <div className="flex flex-col items-center ">
                                <div className="flex justify-center bg-[#2F3E46] w-auto h-auto rounded-[50px] ">
                                    <img className=" border-white border-4" src="adopt6.png"/>
                                </div>
                                <div className="flex flex-col items-center justify-center text-center relative">
                                    <span className="adoptOrange">Rusty<br/></span>
                                    <span className="adoptSubheading absolute xl:top-[4rem] top-[3rem] ">Racoons<br/></span>
                                    <span className="adoptDescription py-[2rem]">Born in urban challenges, Rusty and his raccoon family navigated scarce resources and changing habitats. With unwavering resolve, they thrived, showcasing nature's resilience.</span>
                                </div>
                                <button className="coolBtn"> <span className="">LEARN MORE</span></button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[33%] mb-4">
                        <div className="bg-[#2F3E46]  rounded-[50px] mx-10 px-8 py-8">
                            <div className="flex flex-col items-center ">
                                <div className="flex justify-center bg-[#2F3E46] w-auto h-auto rounded-[50px] ">
                                    <img className=" border-white border-4" src="adopt7.png"/>
                                </div>
                                <div className="flex flex-col items-center justify-center text-center relative">
                                    <span className="adoptOrange">Milo<br/></span>
                                    <span className="adoptSubheading absolute xl:top-[4rem] top-[3rem] ">Monkey<br/></span>
                                    <span className="adoptDescription py-[2rem]">Born amidst urban hurdles, Milo the monkey embraced adaptation amid scarce resources and shifting surroundings, embodying nature's resilience.</span>
                                </div>
                                <button className="coolBtn"> <span className="">LEARN MORE</span></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col center text-center my-10">
                    <div className="font-inter text-[60px] font-bold text-[#354F52] mb-10">
                        ADOPTION PACKAGES
                    </div>
                    <div className="flex lg:flex-row items-center justify-center text-center flex-col">
                        <div className="lg:w-[50%] w-[90%]">
                            <div className="bg-[#84A98C] rounded-[50px] lg:ml-20 py-10 ">
                                <div className="adoptPkgHeader">Bronze Package: $25</div>
                                <div className="adoptPkgSub pb-5">Digital Adoption Certificate<br/>Regular Updates on Your Adopted Animal</div>
                                <div className="adoptPkgHeader">Silver Package: $50</div>
                                <div className="adoptPkgSub pb-5">Digital Adoption Certificate<br/>Regular Updates on Your Adopted Animal<br/>Personalized Thank-You Letter</div>
                                <div className="adoptPkgHeader">Gold Package: $100</div>
                                <div className="adoptPkgSub">Digital Adoption Certificate<br/>Regular Updates on Your Adopted Animal<br/>Personalized Thank-You Letter<br/>High-Quality Photo of Your Adopted Animal</div>
                                <div></div>
                            </div>
                        </div>
                        <div className="w-[50%] flex justify-center my-16"><img className="mx-10" src="adopt8.png" alt="cat"/></div>
                    </div>
                </div>
                <div className="bg-[#52796F] rounded-[50px] px-4 py-8 w-auto mx-16 mb-12 ">
                    <div className="font-inter xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[13px] text-12px text-[#F1F1F1] text-center flex justify-center flex-col">
                        <div className="boldOrange">How Your Support Helps:</div>
                        Your symbolic adoption contributes directly to the care, treatment, and rehabilitation of your chosen animal. Whether it's providing specialized diets, medical attention, or creating a safe environment, your support ensures that these animals have a second chance at a healthy life.
                    </div>
                    <div className="font-inter xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[13px] text-12px text-[#F1F1F1] text-center flex justify-center flex-col">
                        <div className="boldOrange"><br/>Stay Connected:</div>
                        Upon adopting an animal, you'll receive updates on your adopted animal's progress and stories of successful rehabilitation. You're not just adopting an animal; you're becoming a part of their journey to recovery.
                    </div>
                </div>
            </section>
        </>
    )
}
