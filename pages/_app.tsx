import "../styles/globals.css";
import type { AppProps } from "next/app";

import { Roboto } from "@next/font/google";
import { Layout } from "components/Layout";
import { ToastContainer } from "react-toastify";
const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout className={roboto.className}>
        <Component {...pageProps} />
      </Layout>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default MyApp;
