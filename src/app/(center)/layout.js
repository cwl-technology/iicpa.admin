

"use client"

import Header from "@/_component/center/Header";
import Sidebar from "@/_component/center/Sidebar";
import { SessionProvider } from "next-auth/react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

export default function TeacherLayout({ children }) {
  const [sidebar, setSidebar] = useState(false)
  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState)
  };

  const [lightheme, setLightTheme] = useState(false)
  const toggleTheme = () => {
    setLightTheme((prevState) => !prevState);
  };



  return (
    <html lang="en">
      <head>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />


        {/* <!-- Vendors Style--> */}
        <link rel="stylesheet" href="\assets\_style\css\vendors_css.css" />

        {/* <!-- Style--> */}
        <link rel="stylesheet" href="\assets\_style\center\css\style.css" />
        <link rel="stylesheet" href="\assets\_style\center\css\skin_color.css" />


      </head>

      <body className={`${sidebar ? "light-skin sidebar-mini theme-info fixed sidebar-collapse" : "light-skin sidebar-mini theme-info fixed"} ${lightheme ? "sidebar-mini theme-info fixed dark-skin" : "sidebar-mini theme-info fixed light-skin"}`}>

        <SessionProvider>
          <div className="wrapper">
            <Header toggleSidebar={toggleSidebar} toggleTheme={toggleTheme} sidebar={sidebar} />
            <Sidebar />
            {children}
          </div>
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
