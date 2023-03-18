import Head from "next/head";
import Header from "@/components/header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Firebase</title>
      </Head>
      <Header />
      <main className="bg-gray-100">{children}</main>
    </>
  );
};

export default Layout;
