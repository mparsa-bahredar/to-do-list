import { estedad } from "../../fonts";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";


export default async function LocaleLayout({children, params}: {children: React.ReactNode; params: Promise<{ locale: string }>;}){

  
  const { locale } = await params;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();


  return (
    <div
    className={`${locale === "fa" ? estedad.className : ""} h-full antialiased`}
    lang={locale}
    dir={locale === "fa" ? "rtl" : "ltr"}>
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
    </div>
  );
}
