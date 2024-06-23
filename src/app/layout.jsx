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
import {ThemeProvider} from "../context/theme-provider";

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
        </body>
        </html>
    );
}
