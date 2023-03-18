import { firebaseSignOut } from "@/firebase/auth";
import userState from "@/recoil/user";
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
          <h2 className="text-xl font-[500]">Firebase</h2>

          {user && (
            <d>
              <button
                onClick={onSignout}
                className="rounded border border-indigo-600 py-2 px-5 text-sm font-semibold text-indigo-600 md:hover:bg-indigo-50"
              >
                Sign Out
              </button>
            </d>
          )}
        </div>
      </header>
    </>
  );
}
