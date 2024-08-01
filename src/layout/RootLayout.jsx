import { Outlet } from "react-router-dom"
import { Footer, Navbar } from "../components"

function RootLayout() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default RootLayout