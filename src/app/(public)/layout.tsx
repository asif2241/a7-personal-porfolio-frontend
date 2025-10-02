import { Footer } from "@/components/shared/Footer"
import { Navbar } from "@/components/shared/Navbar"

const PublicLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            <main className="min-h-dvh">
                <Navbar></Navbar>
                {children}
                <Footer></Footer>
            </main>
        </>
    )
}

export default PublicLayout