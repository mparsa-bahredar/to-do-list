"use client";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { ChangeEvent, useTransition } from "react";


export default function LanguageSwitcher() {


  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div className="w-full h-full">
      <select
        defaultValue={locale}
        disabled={isPending}
        onChange={onSelectChange}
        className="flex justify-center items-center w-8 h-8 font-medium text-sm text-[#2196F3] border border-[#2196F3] 
        rounded-[8px] outline-none appearance-none cursor-pointer transition-colors duration-300 
        disabled:opacity-50 disabled:cursor-not-allowed
        hover:bg-[#2196F3] hover:text-white 
        dark:text-[#E4E4E4] dark:border-[#E4E4E4]">
        <option value="fa" className="text-[#2196F3] bg-white">
          FA
        </option>
        <option value="en" className="text-[#2196F3] bg-white">
          EN
        </option>
      </select>
    </div>
  );
}
