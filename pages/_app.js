import "../styles/globals.css";
import { Provider } from "@self.id/react";

function App({ Component, pageProps }) {
  return (
    <Provider client={{ ceramic: "testnet-clay" }}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
