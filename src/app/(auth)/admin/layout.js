import { SessionProvider } from "next-auth/react"
import { Toaster } from "react-hot-toast";

export const metadata = {
    title: 'Admin Login | IICPA'
}


export default function AdminLoginLayout({ children }) {


    return (
        <html lang="en">
            <head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />

                {/* <!-- Vendors Style--> */}
                <link rel="stylesheet" href="\assets\_style\css\vendors_css.css" />

                {/* <!-- Style--> */}
                <link rel="stylesheet" href="\assets\_style\css\style.css" />
                <link rel="stylesheet" href="\assets\_style\css\skin_color.css" />
            </head>

            <body className="hold-transition theme-info bg-img" style={{ backgroundImage: "url(/assets/images/auth-bg/bg-16.jpg)" }}>
                <SessionProvider>
                    {children}
                </SessionProvider>
            <Toaster/>
            </body>
        </html>
    );
}
