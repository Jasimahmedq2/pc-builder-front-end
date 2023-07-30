import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../redux/store";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  // Wrap the Component with the SessionProvider
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SessionProvider session={pageProps.session}>
          {getLayout(<Component {...pageProps} />)}
        </SessionProvider>
      </PersistGate>
    </Provider>
  );
}
