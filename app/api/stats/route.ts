export async function GET() {
  const stats = [
    { title: "Users", value: 1200 },
    { title: "Revenue", value: "$9,540" },
    { title: "Orders", value: 321 },
  ];
  return Response.json(stats);
}
