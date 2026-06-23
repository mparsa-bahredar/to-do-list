import "./[locale]/globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-[#F5F5F5]   dark:bg-[#071E31]">{children}</body>
    </html>
  );
}
