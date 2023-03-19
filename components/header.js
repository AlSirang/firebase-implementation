import { firebaseSignOut } from "@/firebase/auth";
import userState from "@/recoil/user";
import Link from "next/link";
import { useRecoilState } from "recoil";

export default function Header() {
  const user = useRecoilState(userState);
  const onSignout = async () => {
    try {
      await firebaseSignOut();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <header className="py-5 px-3 shadow-sm">
        <div className="max-w-7xl w-full m-auto flex justify-between items-center flex-wrap gap-3">
          <Link href="/home" className="text-xl font-[500]">
            Firebase
          </Link>

          {user && (
            <div className="flex items-center gap-3">
              <Link href="/profile">Profile</Link>
              <div>
                <button
                  onClick={onSignout}
                  className="rounded border border-gray-400 px-10  md:hover:bg-gray py-1 text-sm font-semibold text-gray400 md:hover:bg-gray-50"
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
