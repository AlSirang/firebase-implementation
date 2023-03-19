import Head from "next/head";
import Header from "@/components/header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Firebase</title>
      </Head>
      <Header />
      <main className="max-w-7xl w-full m-auto bg-gray-100">{children}</main>
    </>
  );
};

export default Layout;
