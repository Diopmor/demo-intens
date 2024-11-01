export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <aside className="h-16 bg-red-300"></aside>
      {children}
    </div>
  );
}
