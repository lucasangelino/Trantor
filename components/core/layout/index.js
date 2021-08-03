import Navbar from "../navbar/index";
import Footer from "../footer/index";
import SEO from "../../framework/seo/";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />

      <style jsx global>{`
        html,
        body {
          height: 100%;
          background: #fff;
          margin: 0;
          padding: 0;
          font-family: "Roboto", sans-serif;
        }
      `}</style>
    </>
  );
}
