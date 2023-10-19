import './globals.css'
import '../assets/css/tailwind.css'
import '../assets/css/animate.css'
import { Inter, Roboto, Poppins } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import AuthProvider from '@/components/AuthProvider/AuthProvider'
import Head from 'next/head'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider>
                    {/*<AuthProvider>*/}
                    <div>
                        <Navbar />
                        {children}
                        <Footer />
                    </div>
                    {/*</AuthProvider>*/}
                </ThemeProvider>
            </body>
        </html>
    )
}
