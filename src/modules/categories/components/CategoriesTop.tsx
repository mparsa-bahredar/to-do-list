"use client"
import { useTranslations } from "next-intl"



const CategoriesTop = () => {

    const t = useTranslations("sidebar")

    return (
        <div>
            <h1 className="font-bold text-[20px] text-[#262626]">{t("categories")}</h1>
        </div>
    )

}

export default CategoriesTop