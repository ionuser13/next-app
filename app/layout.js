import { Navigation } from "../components/navigation";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>My first Next App</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
