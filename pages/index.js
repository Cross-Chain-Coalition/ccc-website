import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import NavbarComponent from '../components/Header';


import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Job from "../components/Job";

export default function Home() {
  return (
    <Layout pageTitle="Landing Page Nextjs">
      <Head>
        <title>Cross Chain Coalition</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/ccc-icon.svg" />
      </Head>

      <Header />
      <Hero />
      <Job />
      <Footer/>
    </Layout>
  )
}