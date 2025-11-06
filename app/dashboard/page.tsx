"use client";

import { useEffect, useState } from "react";

const Dashboard = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch(`${window.location.origin}/api/stats`, {
          cache: "no-store",
        });
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error("Failed to fetch users:", err);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
      <div className="grid grid-cols-3 gap-4">
        {users.map((item: any) => (
          <div key={item.title} className="p-4 border rounded-md">
            <p className="text-gray-600">{item.title}</p>
            <p className="text-xl font-semibold">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
