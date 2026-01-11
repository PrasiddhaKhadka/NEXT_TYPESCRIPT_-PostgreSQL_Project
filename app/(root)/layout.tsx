export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div className="flex h-screen flex-col border-5 border-red-500">
    ROOT LAYOUT
    <main className="flex-1 wrapper border border-red-500 p-0">
        {children}
    </main>
   </div>
  );
}