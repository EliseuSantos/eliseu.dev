import "./globals.css";

// External styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import "swiper/css/effect-coverflow";
import "react-modern-drawer/dist/index.css";
import "react-circular-progressbar/dist/styles.css";

import CustomCursor from "@/src/components/shared/CustomCursor";
import {Poppins} from "next/font/google";
import BackToTop from "@/src/components/shared/BackToTop";
import ModeSwitcher from "@/src/components/shared/ModeSwitcher";
import {siteSettings} from "@/src/staticData/siteSettings";
import {ThemeProvider} from "../context/theme-provider";
import { Analytics } from "@vercel/analytics/react"

const poppins = Poppins({
    weight: ["200", "300", "400", "500", "600", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    display: "swap",
});

export const metadata = {
    title: "Eliseu Santos - Software Developer",
    description: "Eliseu Santos - Software Developer",
};

export default function RootLayout({children}) {
    return (
        <html lang="pt-BR" suppressHydrationWarning={true} className="scroll-smooth light">
        <head>
        <meta property='og:title' content='Eliseu Santos - Software Developer'/>
        <meta property='og:image' content={siteSettings?.logo?.image}/>
        <meta property='og:description' content='Blog Eliseu Santos - Software Developer'/>
        <meta property='og:url' content='//www.eliseu.dev' />
        </head>
        <body
            className={`${poppins.className} relative`}
            suppressHydrationWarning={true}
        >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <main>
                {children}
                <CustomCursor/>
                <BackToTop/>
                {/*<ModeSwitcher/>*/}
            </main>
        </ThemeProvider>
        <Analytics />
        </body>
        </html>
    );
}
