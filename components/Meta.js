import Head from "next/head";

export const Meta = () => {
  return (
    <>
      <Head>
        <title>iJS.to - Modern Javascript Courses</title>

        <link
          href="https://fonts.googleapis.com/css?family=Space+Mono|Source+Sans+Pro:700&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
    </>
  );
};

export default Meta;
