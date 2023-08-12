import Footer from "./Footer"
import Navbar from "./Navbar"

type props = {
    children: JSX.Element
}

export default function Layout({ children }: props) {

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <div className="grow-0">
                <Navbar />
            </div>
            <main className="grow">
                { children }
            </main>
            <div className="grow-0">
                <Footer />
            </div>
        </div>
    )
}