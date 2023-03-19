import Link from "next/link";
import AuthForm from "@/components/auth-form";
import AuthLayout from "@/layouts/auth.layout";
import { firebaseSignUpWithEmailAndPassword } from "@/firebase/auth";

export default function Index() {
  const onSubmit = async (event) => {
    try {
      event.preventDefault();
      const form = new FormData(event.target);
      const email = form.get("email");
      const password = form.get("password");
      const user = await firebaseSignUpWithEmailAndPassword({
        email,
        password,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <AuthLayout>
      <div className="flex min-h-full w-full justify-center pb-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div>
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
              Create a new account
            </h2>
          </div>
          <AuthForm onSubmit={onSubmit} submitButtonText="Sign Up" />

          <div className="flex flex-col items-center justify-center mt-5">
            <p className="text-md">
              Already have an account?&nbsp;
              <Link className="hover:underline" href="/">
                Click here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
