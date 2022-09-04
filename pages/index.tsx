import type { NextPage } from "next"
import Head from "next/head"
import FeatureSection from "./FeatureSection"
import HeroSection from "./HeroSection"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Crappo Crytocurrency App</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/logo.svg" />
      </Head>

      <main className={"scroll-smooth"}>
        <HeroSection />
        <FeatureSection />
      </main>

      <footer className={""}></footer>
    </>
  )
}

export default Home
