import { Sidebar } from "@/components";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <section className="flex-1 p-8  ">{children}</section>
    </div>
  );
}
