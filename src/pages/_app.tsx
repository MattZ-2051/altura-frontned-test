import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { WagmiConfig, createClient } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { mainnet } from "wagmi/chains";
import { configureChains } from "wagmi";

const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY as string;
const { provider } = configureChains([mainnet], [alchemyProvider({ apiKey })]);

const client = createClient({
  autoConnect: true,
  provider,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} />{" "}
    </WagmiConfig>
  );
}
