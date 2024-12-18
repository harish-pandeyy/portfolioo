import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
export const metadata = {
  title: 'Harish Pandey | Portfolio ',
  description: 'Hello I am Harish Pandey a Web Developer',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <Nav/>
        {children}
        <Footer />
        </body>
    </html>
  )
}
