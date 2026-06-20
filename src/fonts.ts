import localFont from "next/font/local";


export const estedad = localFont({
  src: [
    {
      path: "../public/fonts/Estedad-Thin.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "../public/fonts/Estedad-Regular.woff2",
      weight: "400",
      style: "regular",
    },
    {
      path: "../public/fonts/Estedad-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/fonts/Estedad-SemiBold.woff2",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../public/fonts/Estedad-Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
});

