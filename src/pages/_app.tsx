import type { AppProps } from "next/app";

// TailwindCSS
import "@/styles/globals.css";

// AntD
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";

// Redux
import { Provider } from "react-redux";
import { store } from "../redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#6b46c1",
          },
        }}
      >
        <Component {...pageProps} />
      </ConfigProvider>
    </Provider>
  );
}
