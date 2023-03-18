import { useEffect, useRef } from "react";
import Router from "next/router";
import { onAuthenticationStateChange } from "@/firebase/auth";
import { useSetRecoilState } from "recoil";
import userState from "@/recoil/user";

const useFirebaseAuth = () => {
  const setUserState = useSetRecoilState(userState);

  const isInit = useRef(false);
  useEffect(() => {
    if (!isInit.current) {
      isInit.current = true;
      onAuthenticationStateChange((user) => {
        if (user !== null) {
          const userObj = {
            uid: user.uid,
            email: user.email,
          };

          setUserState(userObj);
          return;
        }
        Router.push({ pathname: "/" });

        setUserState(null);
      });
    }
  }, [setUserState]);
};

export default useFirebaseAuth;
