import Head from "next/head";
import Header from "@/components/header";

const Layout = ({ className = "max-w-7xl w-full m-auto", children }) => {
  return (
    <>
      <Head>
        <title>Firebase</title>
      </Head>
      <Header />
      <main className={`${className} bg-gray-100`}>{children}</main>
    </>
  );
};

export default Layout;
