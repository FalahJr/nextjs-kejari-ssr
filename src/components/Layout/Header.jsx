import Head from "next/head";
import React from "react";

const Header = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta name="author" content="ArkanaTechnology" />
        <title>Kejari - Kejaksaan Negeri Surabaya</title>
        <meta
          name="title"
          content="Arkana Technology - Software Development & IT Consultant"
        />
        <meta
          name="description"
          content="We Serve Custom Software Development for Your Startup (Website, Android Application, IOS Application)"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arkanatechnology.com/" />
        <meta
          property="og:title"
          content="Arkana Technology - Software Development & IT Consultant"
        />
        <meta
          property="og:description"
          content="We Serve Custom Software Development for Your Startup (Website, Android Application, IOS Application)"
        />
        <meta
          property="og:image"
          content="https://metatags.io/images/meta-tags.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://arkanatechnology.com/" />
        <meta
          property="twitter:title"
          content="Arkana Technology - Software Development & IT Consultant"
        />
        <meta
          property="twitter:description"
          content="We Serve Custom Software Development for Your Startup (Website, Android Application, IOS Application)"
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/images/meta-tags.png"
        />
      </Head>
    </>
  );
};

export default Header;
