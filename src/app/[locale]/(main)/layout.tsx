import Header from "@/components/layout/Header/Header";


export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        {children}
      </main>
    </>
  );
}
