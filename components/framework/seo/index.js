import Head from "next/head";

export default function SEO() {
  return (
    <Head>
      <title>{"Inspiration"}</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Los meta tags de HTML codifican información para ser interpretada por el navegador y los buscadores. ¿Sabes cuáles son imprescindibles?"
      />
      <meta
        name="keywords"
        content="palabra clave 1, palabra clave 2, palabra clave 3"
      />
      <meta name="author" content="Nombre del autor" />
      <meta name="copyright" content="Propietario del copyright" />
      <meta name="robots" content="follow" />
    </Head>
  );
}
