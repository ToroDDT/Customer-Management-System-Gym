"use client";
import { Button } from "@mui/material";
import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/actions";
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

function Page() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  return (
    <>
      <div className="flex">
        <div className="flex flex-col bg-white h-screen w-full items-center justify-center p-28">
          <div className="text-4xl font-extrabold">Login To Your Account</div>
          <div>OR</div>
          <div className="border-2 px-52"></div>
          <form action={dispatch} className="flex flex-col items-center">
            <label htmlFor="username">
              <input
                type="text"
                name="username"
                id="username"
                className="mt-10 pr-52 py-3 pl-2 bg-gray-300 rounded-3xl"
                placeholder="Type username here..."
              />
            </label>
            <label htmlFor="password">
              <input
                type="text"
                name="password"
                id="password"
                className="mt-5 pr-52 py-3 pl-2 bg-gray-300 rounded-3xl"
                placeholder="Type password here..."
              />
            </label>
            <div
              className="flex h-8 items-end space-x-1"
              aria-live="polite"
              aria-atomic="true"
            >
              {errorMessage && (
                <>
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                  <p className="text-sm text-red-500">{errorMessage}</p>
                </>
              )}
            </div>
            <LoginButton />
          </form>
        </div>
        <div className="bg-blue-700 w-full flex-col flex items-center justify-center">
          <div className="text-white text-4xl">New Here?</div>
          <div className="text-white text-2xl mt-6">
            Sign up and discover a great amount of new opportunities
          </div>
          <Button
            className="bg-white text-black font-extrabold mt-6 px-10 py-3 rounded-3xl"
            variant="contained"
          >
            <Link onClick={(e) => e.stopPropagation()} href="/signup">
              Sign Up
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      variant="contained"
      className="bg-blue-700 rounded-3xl py-3 px-20 font-extrabold"
      aria-disabled={pending}
    >
      Login
    </Button>
  );
}

export default Page;
