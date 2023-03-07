import { createClient, configureChains, mainnet } from "@wagmi/core";
import { publicProvider } from "@wagmi/core/providers/public";

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet],
  [publicProvider()]
);

export const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});
