import Logo from "./Logo";

export default function Navbar() {
    return (
        <nav className="w-full flex justify-center shadow-lg">
            <div className="lg:max-w-7xl w-full">
                <div className="py-1"></div>
                <div className="flex flex-col lg:flex-row items-center justify-center lg:h-[100px] w-full lg:space-y-0 space-y-3 lg:pb-0 pb-3">
                    <div className="lg:hidden inline-flex justify-center">
                        <a href="/" className="w-3/4">
                            <Logo classes="w-full" />
                        </a>
                    </div>
                    <a href="/animalgpt" className="nav-item">Animal Found: <br className="hidden lg:inline" /> Now What?</a>
                    <a href="/adopt" className="nav-item">{"\""}Adopt{"\""} an <br className="hidden lg:inline" /> animal</a>
                    <div className="max-h-full pl-14 hidden lg:block">
                        <a href="/" className="">
                            <Logo classes="xl:w-[65%] lg:w-[73%] md:w-[75%]" />
                        </a>
                    </div>
                    <a href="/getinvolved" className="nav-item">Get <br className="hidden lg:inline" />Involved</a>
                    <a href="/education" className="nav-item ">Educational <br className="hidden lg:inline" />Resources</a>
                </div>
            </div>
        </nav>
    )
}