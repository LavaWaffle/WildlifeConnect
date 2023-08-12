export default function Footer() {
    return (
        <footer className="bg-wild-400 w-full flex justify-center lg:h-[22rem]  shadow-inner shadow-[#606D6E] relative">
            <div className="lg:w-[70%] h-full">
                <div className="lg:py-4 pt-8 lg:px-10 px-6 w-full h-full">
                    <div className="flex lg:flex-row flex-col justify-center w-full h-full">
                        {/* left */}
                        <table className="lg:w-1/2 lg:h-[85%] flex lg:justify-end justify-center">
                            <tbody className="space-y-3">
                            <tr className="flex">
                                <td className="footer-left-item">about us</td>
                                <td className="footer-left-item ml-12">our initiatives</td>
                            </tr>
                            <tr className="flex">
                                <td className="footer-left-item">wildlife rehabilitation</td>
                                <td className="footer-left-item ml-12">get involved</td>
                            </tr>
                            <tr className="flex">
                                <td className="footer-left-item">educational resources</td>
                                <td className="footer-left-item ml-12">adaopt an animal</td>
                            </tr>
                            <tr className="flex">
                                <td className="footer-left-item">community outreach</td>
                                <td className="footer-left-item ml-12">faq</td>
                            </tr>
                            <tr className="flex">
                                <td className="footer-left-item">terms of use</td>
                                <td className="footer-left-item ml-12">contact us</td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="px-16"></div>
                        {/* right (FUN) */}
                        <div className="flex flex-col items-left lg:w-1/2 w-full px-16 lg:px-0">
                            <div className="py-4"></div>
                            <div className="lg:block flex justify-evenly">
                                <h1 className="text-white text-4xl">Be in the know.</h1>
                                <div className="py-4 lg:block hidden"></div>
                                <h4 className="text-[#9FC4BB] font-lato text-[18px]">Stay Informed. Subscribe to our newsletter for wildlife updates, events, and more.</h4>
                            </div>
                            <div className="py-2"></div>
                            <form className="border-b-4 border-white flex justify-between pb-2 px-2">
                                <input className="bg-transparent text-2xl focus:outline-none caret-white placeholder:text-green-100 font-lat" type="text" placeholder="Email Address" />
                                <button className="text-2xl text-[#FFE08F] font-lato font-extrabold">Subscribe</button>
                            </form>
                            <div className="py-4"></div>
                            <div className="flex justify-between px-4">
                                <img className="w-14" src="/logo-instagram.png" alt="insta" />
                                <img className="w-14" src="/logo-x.png" alt="x" />
                                <img className="w-14" src="/logo-discord.png" alt="discord" />
                                <img className="w-14" src="/logo-facebook.png" alt="facebook" />
                            </div>
                            <div className="lg:hidden pb-8"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <p className="absolute left-[22%] bottom-0 text-[#84A98C]">@ 2023 Wildlife Connect. All rights Reserved. </p>

        </footer>
    )
}