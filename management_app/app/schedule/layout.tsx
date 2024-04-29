import { SideNav } from "../SideNavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <body className=" flex flex-row">
      <div className="bg-blue-600">
        <SideNav />
      </div>
      <div className="mt-10">{children}</div>
    </body>
  );
}
