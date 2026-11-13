import "./globals.css";

export const metadata = {
    title: "Gatonomous",
    decription:
        "Gatonomous is a web application that allows users to manage their tasks and projects efficiently.",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-gat-red text-white antialiased">
                {children}
            </body>
        </html>
    );
}