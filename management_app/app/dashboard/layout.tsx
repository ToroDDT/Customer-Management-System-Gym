import { SideNav } from "../SideNavBar";
import SignOut from "./signOut";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <body className=" flex flex-row">
      <div className="bg-blue-600">
        <SideNav />
        <SignOut />
      </div>
      <div className="mt-10">{children}</div>
    </body>
  );
}
