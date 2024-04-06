export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <body className="h-full bg-blue-800 flex justify-center">{children}</body>
  );
}
