import { SideNav } from "@/app/SideNavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <body className="flex bg-slate-200">
      <div className="bg-blue-600">
        <SideNav />
      </div>
      <div className="mt-10">{children}</div>
    </body>
  );
}
