import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import { Roboto_Serif } from "next/font/google";


const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-roboto-serif",
  display: "swap",
});

export const metadata = {
    title: "Gatonomous",
    description:
        "Gatonomous is a web application that allows users to manage their tasks and projects efficiently.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${robotoSerif.variable} antialiased`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}