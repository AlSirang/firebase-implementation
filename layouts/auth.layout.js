import Head from "next/head";
import useFirebaseAuth from "@/hooks/useFirebaseAuth";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import userState from "@/recoil/user";
import Router from "next/router";

const Layout = ({ children }) => {
  const user = useRecoilValue(userState);

  useEffect(() => {
    if (user) {
      Router.push({
        pathname: "/home",
      });
    }
  }, [user]);

  return (
    <>
      <Head>
        <title>Firebase - auth</title>
      </Head>

      <main className="min-h-[80vh] h-full flex flex-col justify-center">
        {children}
      </main>
    </>
  );
};

export default Layout;
