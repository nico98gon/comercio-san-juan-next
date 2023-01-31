import './global.css';
import { NavBar } from "layouts/NavBar"

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}