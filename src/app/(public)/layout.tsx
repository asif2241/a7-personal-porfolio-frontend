import { Footer } from "@/components/shared/Footer"
import { Navbar } from "@/components/shared/Navbar"

const PublicLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            <main className="min-h-dvh">
                <nav className="md:w-4/5 w-11/12 mx-auto"> <Navbar></Navbar> </nav>
                {children}
                <Footer></Footer>
            </main>
        </>
    )
}

export default PublicLayout