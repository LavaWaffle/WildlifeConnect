import Logo from "./Logo";

export default function Navbar() {
    return (
        <>
            <nav className="w-full flex justify-center">
                <div className="max-w-7xl">
                    <div className="py-1"></div>
                    <div className="flex items-center h-[100px]">
                        <h3 className="nav-item">Community Outreach</h3>
                        <h3 className="nav-item">"Adopt" an animal</h3>
                        <div className="max-h-full px-10">
                            <Logo />
                        </div>
                        <h3 className="nav-item">Get Involved</h3>
                        <h3 className="nav-item">Educational Resources</h3>

                    </div>
                </div>
            </nav>
        </>
    )
}