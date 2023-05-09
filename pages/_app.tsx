import { Layout } from "@/components/molecules/DefaultLayout"
import type { AppProps } from "next/app"
import "@/styles/global.scss"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
