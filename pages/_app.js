// _app.js
import { SessionProvider } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]"
import { AuthProvider } from '../context/authContext';
import "../styles/globals.scss";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (

    <SessionProvider session={session}>
      <AuthProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AuthProvider>
    </SessionProvider>
  );
}

export default MyApp;
