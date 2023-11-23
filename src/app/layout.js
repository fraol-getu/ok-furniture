
import Fotter from './components/fotter/page'
import Header from './components/header/page'
import './globals.css'



export const metadata = {
  title: 'ok-furniture',
  description: 'ok-furniture based in south africa',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header/>
      {children}
      <Fotter/>
      </body>
    </html>
  )
}
