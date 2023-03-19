import UserLayout from "@/layouts/user.layout";
import profilePic from "@/images/bashir.jpg";
import Image from "next/image";
import Link from "next/link";

export default function ProfileIndex() {
  return (
    <UserLayout className="w-full">
      <div className="mb-10 py-10 bg-white rounded-sm shadow relative">
        <div className="absolute right-10">
          <Link
            href="profile/edit"
            className="border border-gray-400 px-10 rounded md:hover:bg-gray-100"
          >
            Edit
          </Link>
        </div>
        <div className="flex items-center flex-col">
          <div className="rounded-full overflow-hidden bg-black max-w-[150px] max-h-[150px] h-full w-full">
            <Image src={profilePic} alt="profile" className="rounded-full" />
          </div>
          <div className="w-full flex justify-center px-4 py-3 ">
            <div className="text-center mt-5">
              <h2 className="">Name</h2>
              <h3 className="">Bio</h3>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
