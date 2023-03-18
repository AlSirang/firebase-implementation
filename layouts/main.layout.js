import Head from "next/head";
import useFirebaseAuth from "@/hooks/useFirebaseAuth";

const Layout = ({ children }) => {
  useFirebaseAuth();

  return (
    <>
      <Head>
        <title>Firebase </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <>{children}</>
    </>
  );
};

export default Layout;
