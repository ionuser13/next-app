import { Navigation } from "../components/navigation";
import "../styles/globals.css";
import { font } from "./font"

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>My first Next App</title>
      </head>
      <body className={font.variable}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
