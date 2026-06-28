import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import Close from "../../../../public/icons/Close";


interface IProps{
    handleOpenMenu: (value: boolean) => void;
}

const Sidebar = ({handleOpenMenu}: IProps) => {

    const t = useTranslations("sidebar");
    const locale = useLocale();

    return (
        <>
            <div onClick={() => {handleOpenMenu(false)}} className="fixed inset-0 z-30"></div>
            <div className={`flex flex-col gap-16 w-56 min-h-screen p-6 bg-[#FFFFFF] absolute top-0 z-60
            dark:bg-[#0D3C61]
            ${locale === "en" ? "left-0 rounded-r-[12px]" : "right-0 rounded-l-[12px]"}`}>
                <div onClick={() => {handleOpenMenu(false)}} className="text-[#262626] cursor-pointer   dark:text-[#F5F5F5]">
                    <Close/>
                </div>
                <div className="flex flex-col gap-6">
                    <h3 className="font-bold text-[#262626]">{t("menu")}</h3>
                    <div className="flex flex-col gap-2 font-medium text-[#262626]   dark:text-[#F5F5F5]">
                        <Link 
                        onClick={() => {handleOpenMenu(false)}} 
                        href={"/"} 
                        className={`flex items-center w-full h-[44px] rounded-[8px]   hover:bg-[#F5F5F5]
                        ${locale === "en" ? "pl-4" : "pr-4"}`}>
                            {t("main")}
                        </Link>
                        <Link 
                        onClick={() => {handleOpenMenu(false)}} 
                        href={"/categories"} 
                        className={`flex items-center w-full h-[44px] rounded-[8px]   hover:bg-[#F5F5F5]
                        ${locale === "en" ? "pl-4" : "pr-4"}`}>
                            {t("categories")}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Sidebar