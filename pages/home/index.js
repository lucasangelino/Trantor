import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inspiration</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="keywords"
          content="palabra clave 1, palabra clave 2, palabra clave 3"
        />
      </Head>
      <div className="main">Hello</div>

      <style jsx>{`
        .main {
          height: calc(100vh - 120px);
        }
      `}</style>
    </>
  );
}
