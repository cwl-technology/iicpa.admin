import { SessionProvider } from "next-auth/react"
import "bootstrap-icons/font/bootstrap-icons.css";
import { Toaster } from "react-hot-toast";


export const metadata = {
  title: "IICPA ",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicons  */}
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/assets/images/favicons/site.webmanifest" />
        <meta name="description" content="Fistudy Laravel Template" /> */}

        {/* <!-- fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="true" />

        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&amp;display=swap" rel="stylesheet" />


        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&amp;display=swap"
          rel="stylesheet" />

        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/custom-animate.css" />
        <link rel="stylesheet" href="/assets/css/swiper.min.css" />
        <link rel="stylesheet" href="/assets/css/font-awesome-all.css" />
        <link rel="stylesheet" href="/assets/css/jarallax.css" />
        <link rel="stylesheet" href="/assets/css/jquery.magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/odometer.min.css" />
        <link rel="stylesheet" href="/assets/css/flaticon.css" />
        <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/jquery-ui.css" />
        <link rel="stylesheet" href="/assets/css/aos.css" />


        <link rel="stylesheet" href="/assets/css/module-css/banner.css" />
        <link rel="stylesheet" href="/assets/css/module-css/slider.css" />
        <link rel="stylesheet" href="/assets/css/module-css/footer.css" />
        <link rel="stylesheet" href="/assets/css/module-css/sliding-text.css" />
        <link rel="stylesheet" href="/assets/css/module-css/category.css" />
        <link rel="stylesheet" href="/assets/css/module-css/about.css" />
        <link rel="stylesheet" href="/assets/css/module-css/courses.css" />
        <link rel="stylesheet" href="/assets/css/module-css/why-choose.css" />
        <link rel="stylesheet" href="/assets/css/module-css/live-class.css" />
        <link rel="stylesheet" href="/assets/css/module-css/video-one.css" />
        <link rel="stylesheet" href="/assets/css/module-css/blog.css" />
        <link rel="stylesheet" href="/assets/css/module-css/counter.css" />
        <link rel="stylesheet" href="/assets/css/module-css/team.css" />
        <link rel="stylesheet" href="/assets/css/module-css/newsletter.css" />
        <link rel="stylesheet" href="/assets/css/module-css/testimonial.css" />
        <link rel="stylesheet" href="/assets/css/module-css/contact.css" />
        <link rel="stylesheet" href="/assets/css/module-css/courses-search.css" />
        <link rel="stylesheet" href="/assets/css/module-css/pricing.css" />
        <link rel="stylesheet" href="/assets/css/module-css/process.css" />
        <link rel="stylesheet" href="/assets/css/module-css/event.css" />
        <link rel="stylesheet" href="/assets/css/module-css/page-header.css" />
        <link rel="stylesheet" href="/assets/css/module-css/skill.css" />
        <link rel="stylesheet" href="/assets/css/module-css/become-a-teacher.css" />
        <link rel="stylesheet" href="/assets/css/module-css/gallery.css" />
        <link rel="stylesheet" href="/assets/css/module-css/faq.css" />
        <link rel="stylesheet" href="/assets/css/module-css/shop.css" />
        <link rel="stylesheet" href="/assets/css/module-css/error.css" />


        {/* <!-- template styles --> */}
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />


      </head>
      <body className="custom-cursor">
        <div className="custom-cursor__cursor"></div>
        <div className="custom-cursor__cursor-two"></div>
        <div className="page-wrapper">

          {/* <div className="stricky-header stricked-menu main-menu">
            <div className="sticky-header__content"></div>
          </div> */}

          <SessionProvider>
            {children}
          </SessionProvider>

        </div>
        <Toaster />
      </body>
    </html>
  );
}
