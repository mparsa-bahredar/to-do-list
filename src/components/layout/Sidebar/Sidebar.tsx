"use client"
import { Link, usePathname } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";



const Sidebar = () => {

    const t = useTranslations("sidebar");
    const locale = useLocale();
    const pathname = usePathname();


    const getLinkClass = (href: string) =>
        `flex items-center w-full h-10 rounded-lg transition-colors
        ${
            pathname === href
            ? "font-medium text-[#2196F3] bg-[#E3F2FD]   dark:bg-[#145A92] dark:hover:bg-[#145A92]"
            : "hover:bg-[#F5F5F5]"
        }
        ${locale === "en" ? "pl-4" : "pr-4"}`;


    return (
        <div className={`hidden flex-col gap-16 w-64 h-screen px-4 py-24 bg-[#FFFFFF] border-r border-r-[#E4E4E4]
        shadow-[0_0_8px_rgba(0,0,0,0.04)] fixed top-0 z-6
        sm:flex
        dark:bg-[#0D3C61] dark:border-[#145A92]
        ${`${locale === "en" ? "left-0" : "right-0"}`}`}>
            <div className={locale === "en" ? "pl-4" : "pr-4"}>
                <h3 className="font-bold text-[20px] text-[#262626]   dark:text-[#F5F5F5]">{t("menu")}</h3>
            </div>
            <div className="flex flex-col gap-2 font-regular text-[#262626]   dark:text-[#F5F5F5]">
                <Link 
                href={"/"} 
                className={`flex items-center w-full h-10 rounded-[8px]   dark:hover:bg-[#0A2D49]
                ${locale === "en" ? "pl-4" : "pr-4"}
                ${getLinkClass("/")}`}>
                    {t("main")}
                </Link>
                <Link 
                href={"/categories"} 
                className={`flex items-center w-full h-10 rounded-[8px]   dark:hover:bg-[#0A2D49]
                ${locale === "en" ? "pl-4" : "pr-4"}
                ${getLinkClass("/categories")}`}>
                    {t("categories")}
                </Link>
            </div>
        </div>
    )

}

export default Sidebar