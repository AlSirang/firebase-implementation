import Head from "next/head";
import useFirebaseAuth from "@/hooks/useFirebaseAuth";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import userState from "@/recoil/user";
import Router from "next/router";

const Layout = ({ children }) => {
  useFirebaseAuth();

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
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-[100vh] h-full flex flex-col justify-center">
        {children}
      </main>
    </>
  );
};

export default Layout;