import { SideNav } from "../SideNavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" flex flex-row">
      <div className="">
        <SideNav />
      </div>
      <div className="mt-10">{children}</div>
    </div>
  );
}
