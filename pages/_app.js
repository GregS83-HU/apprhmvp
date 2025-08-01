import "@/styles/globals.css";
import { PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "../plasmic-init";

export default function App({ Component, pageProps }) {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}