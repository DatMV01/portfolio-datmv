import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-60 border-r dark:border-gray-800 p-6 flex flex-col gap-4">
      <Link href="/dashboard">🏠 Home</Link>
      <Link href="/dashboard/hello">⚙️ Hello</Link>
      <Link href="/dashboard/settings">⚙️ Settings</Link>
    </aside>
  );
};

export default Sidebar;
