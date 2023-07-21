import React from "react";

import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us</title>
        <meta name="description" content="This is the contact page" />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <main>
        <h2>Get in touch</h2>
        <p>Call us on 07777777777</p>
      </main>
    </>
  );
}
