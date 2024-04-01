import { Button } from "@mui/material";

function Page() {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col bg-white h-screen w-full items-center justify-center p-28">
          <div className="text-4xl font-extrabold">Login To Your Account</div>
          <div>OR</div>
          <div className="border-2 px-52"></div>
          <form
            action="http://localhost:8080/login"
            method="post"
            className="flex flex-col items-center"
          >
            <label htmlFor="username">
              <input
                type="text"
                name="username"
                id="username"
                className="mt-10 pl px-24 py-2 bg-gray-300 rounded-3xl"
                placeholder="Type username here..."
              />
            </label>
            <label htmlFor="password">
              <input
                type="text"
                name="password"
                id="password"
                className="mt-5 py-2 px-24 bg-gray-300 rounded-3xl"
                placeholder="Type password here..."
              />
            </label>
            <Button
              className="bg-blue-700 rounded-3xl py-3 mt-5 px-20 font-extrabold"
              variant="contained"
            >
              Login
            </Button>
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
            Sign Up
          </Button>
        </div>
      </div>
    </>
  );
}

export default Page;
