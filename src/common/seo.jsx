import Head from "next/head";

const SEO = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle}`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="Your one-stop shop for all things digital. We provide cloud services, digital marketing, content creation, web development, crypto solutions, and web designing. Our knowledgeable staff is committed to increasing your online visibility, accomplishing your marketing objectives, and producing outcomes. Join forces with us to prosper in the digital era!" />
      <meta name="robots" content="index, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" href="/favicon.png" />
    </Head>
  </>
);

export default SEO;
