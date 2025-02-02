import AdminLayout from "@/components/main/AdminLayout";
import Footer from "@/components/main/Footer";
import Header from "@/components/main/Header";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "@/styles/globals.css";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }) {
  const { pathname } = useRouter();
  console.log(pathname);

  if (pathname.startsWith("/admin")) {
    return (
      <AdminLayout>
        <Component {...pageProps} />
      </AdminLayout>
    );
  }
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
