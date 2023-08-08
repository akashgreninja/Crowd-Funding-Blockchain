import "@/styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "web3uikit";
// import { CrowdFundingProvider } from "../context/CrowdFunding";
export default function App({ Component, pageProps }) {
  return (
    <MoralisProvider initializeOnMount={false}>
      {/* <CrowdFundingProvider> */}
        <Component {...pageProps} />
      {/* </CrowdFundingProvider> */}
    </MoralisProvider>
  );
}
