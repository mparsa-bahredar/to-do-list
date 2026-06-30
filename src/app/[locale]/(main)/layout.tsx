import Header from "@/components/layout/Header/Header";
import Sidebar from "@/components/layout/Sidebar/Sidebar";


export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex flex-col w-full">
        <header className="w-full">
          <Header/>
        </header>
          <main className="flex">
            <div className="h-screen   sm:w-[308px]"></div>
            <div className="flex justify-center w-full mt-20 mb-8">
              {children}
            </div>
          </main>
      </div>
    </div>
  );
}
