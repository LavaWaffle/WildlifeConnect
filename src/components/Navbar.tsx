import Logo from "./Logo";

export default function Navbar() {
    return (
        <>
            <nav className="w-full flex justify-center shadow-md ">
                <div className="max-w-7xl ">
                    <div className="py-1"></div>
                    <div className="flex items-center h-[100px] ">
                        <h3 className="nav-item">Animal Found: <br /> Now What?</h3>
                        <h3 className="nav-item">{"\""}Adopt{"\""} an <br/> animal</h3>
                        <div className="max-h-full pl-14">
                            <Logo />
                        </div>
                        <h3 className="nav-item">Get <br />Involved</h3>
                        <h3 className="nav-item ">Educational <br/>Resources</h3>

                    </div>
                </div>
            </nav>
        </>
    )
}