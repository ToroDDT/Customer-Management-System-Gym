"use server";
import { signOut } from "@/auth";
import { PowerIcon } from "@heroicons/react/24/outline";

export default async function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <div>
        <button className="flex m-auto mb-2 h-[48px] grow items-center justify-center gap-2 rounded-2xl bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-14">
          <PowerIcon className="w-6" />
          <div className="hidden md:block">Sign Out</div>
        </button>
      </div>
    </form>
  );
}
