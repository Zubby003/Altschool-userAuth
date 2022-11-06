import React from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="welcome to home page" />
        <link rel="canonical" href="/home" />
      </Helmet>

      <div className="home-page">
        <div className="main">
          <h2>Creative Design</h2>
        </div>
      </div>
    </>
  );
};

export default Home;
