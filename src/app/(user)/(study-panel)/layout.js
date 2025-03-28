import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";

export default function chapterLayout({ children }) {


  return (
    <html lang="en">
      <head>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />

        {/* <!-- Vendors Style--> */}
        <link rel="stylesheet" href="/assets/_style/css/vendors_css.css" />

        {/* <!-- Style--> */}
        {/* <link rel="stylesheet" href="/assets/_style/css/style.css" /> */}
        <link rel="stylesheet" href="/assets/_style/css/coustom.css" />
        <link rel="stylesheet" href="/assets/_style/css/custom2.css" />
        <link rel="stylesheet" href="/assets/_style/css/skin_color.css" />


      </head>

      <body >
        <SessionProvider>
          {children}
        </SessionProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
