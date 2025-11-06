import { headers } from "next/headers";

const HelloPage = async () => {
  const headersList = await headers();
  const referer = headersList.get("referer");
  const host = headersList.get("host");

  // Tự build absolute URL
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const url = `${protocol}://${host}/api/hello`;

  // fetch từ server-side
  const res = await fetch(url, { cache: "no-store" });
  const data = await res.json();

  return (
    <div>
      <p>Message: {data.message}</p>
      <p>Referer: {referer}</p>
      <p>Host: {host}</p>
    </div>
  );
};

export default HelloPage;
