import type { AppProps } from "next/app";

// TailwindCSS
import "@/styles/globals.css";

// AntD
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";

// Redux
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "../redux/store";

// Next Auth
import UnderDev from "@/components/UnderDev";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <>
      <Head>
        <title>HRQM by Riyan Saputra</title>
      </Head>
      <SessionProvider session={session}>
        <Provider store={store}>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#6b46c1",
              },
            }}
          >
            <UnderDev />
            <Component {...pageProps} />
          </ConfigProvider>
        </Provider>
      </SessionProvider>
    </>
  );
}
