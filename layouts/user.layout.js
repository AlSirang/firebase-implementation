import Head from "next/head";
import Header from "@/components/header";

const Layout = ({ className = "max-w-7xl w-full m-auto", children }) => {
  return (
    <>
      <Head>
        <title>Firebase</title>
      </Head>
      <Header />
      <main className="bg-gray-100">
        <div className={className}>{children}</div>
      </main>
    </>
  );
};

export default Layout;
