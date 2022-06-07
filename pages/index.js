import React from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Cards from "../components/Cards";

export async function getServerSideProps(context) {
  const res = await fetch("https://meme-api.herokuapp.com/gimme/carporn/21");
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}

function Home({ data }) {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Head>
        <title>OnlyCars</title>
      </Head>
      <h1 className="text-gray-300 text-7xl text-center font-bold pt-24">
        OnlyCars
      </h1>
      <h1 className="text-gray-300 text-center font-bold pt-4">
        Easily View Exotic Cars from reddit
      </h1>
      <Cards data={data} />
      <Footer />
    </div>
  );
}

export default Home;
