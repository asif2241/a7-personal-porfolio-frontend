import { Footer } from "@/components/shared/Footer"
import { Navbar } from "@/components/shared/Navbar"




const PublicLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            <nav className="md:w-4/5 w-11/12 mx-auto"> <Navbar></Navbar> </nav>
            <main className="min-h-[calc(100vh-415px)]">
                {children}
            </main>
            <Footer></Footer>
        </>
    )
}

export default PublicLayout