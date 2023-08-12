import Logo from "./Logo";

export default function Navbar() {
    return (
        <nav className="w-full flex justify-center shadow-md">
            <div className="lg:max-w-7xl w-full">
                <div className="py-1"></div>
                <div className="flex flex-col lg:flex-row items-center justify-center lg:h-[100px] w-full lg:space-y-0 space-y-3 lg:pb-0 pb-3">
                    <div className="lg:hidden inline-flex justify-center">
                        <Logo classes="w-3/4" />
                    </div>
                    <h3 className="nav-item">Animal Found: <br className="hidden lg:inline" /> Now What?</h3>
                    <h3 className="nav-item">{"\""}Adopt{"\""} an <br className="hidden lg:inline" /> animal</h3>
                    <div className="max-h-full pl-14 hidden lg:block">
                        <Logo classes="xl:w-[65%] lg:w-[73%] md:w-[75%]" />
                    </div>
                    <h3 className="nav-item">Get <br className="hidden lg:inline" />Involved</h3>
                    <h3 className="nav-item ">Educational <br className="hidden lg:inline" />Resources</h3>
                </div>
            </div>
        </nav>
    )
}