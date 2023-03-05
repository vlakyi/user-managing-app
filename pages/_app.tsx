import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import Head from "next/head";

import { Provider } from "react-redux";
import { wrapper } from "store";
import { ToastContainer } from "react-toastify";

import { Layout } from "components/Layout";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });

function MyApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <>
      <Head>
        <title>User Managing App</title>
        <meta name="description" content="Next.js User Managing App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        <Layout className={roboto.className}>
          <Provider store={store}>
            <Component {...props.pageProps} />
          </Provider>
        </Layout>
      </ThemeProvider>

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
