import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

import { Provider } from "react-redux";
import { Layout } from "components/Layout";
import { ToastContainer } from "react-toastify";
import { wrapper } from "store";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });

function MyApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Layout className={roboto.className}>
        <Component {...props.pageProps} />
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
    </Provider>
  );
}

export default MyApp;
