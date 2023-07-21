import React from "react";

import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>My About page</title>
        <meta
          name="description"
          content="This is the about oage for my website"
        />
        <link rel="canonical" href="/about" />
      </Helmet>
      <main>
        <h2>Our story</h2>
        <p>We are very interesting - honestly!</p>
      </main>
    </>
  );
}
