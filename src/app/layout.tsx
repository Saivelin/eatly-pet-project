import type { Metadata } from 'next'
import '../scss/globals.scss'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <head>
                <title>Eatly</title>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            </head>
            <body>
                <Header/>
                {children}
                <Footer/>
            </body>
        </html>
    )
}
