import Head from "next/head";
import Layout from "../../components/core/layout";

export default function Inspiration({ userName }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Inspiration</title>
        </Head>
        <h5>{`Hello ${userName}`}</h5>
      </Layout>
    </>
  );
}

Inspiration.getInitialProps = () => {
  return fetch("http://localhost:3000/api/hello")
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      const { userName } = response;
      return { userName };
    })
    .catch((err) => {
      console.log(err);
    });
};
