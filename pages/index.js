import Head from "next/head";
import Link from "next/link";
// Core components
import Layout from "../components/core/layout";
import Home from "../pages/home/";

export default function App() {
  return (
    <Layout>
      <Home />
      <Link href="/inspiration">
        <a>Inspiration</a>
      </Link>
    </Layout>
  );
}
