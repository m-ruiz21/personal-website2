'use client'

import FadeIn from "@/components/fade_in";
import HomeFooter from "@/components/home_footer";
import HomeIntro from "@/components/home_intro";
import Navbar from "@/components/navbar";
import { Page } from "@/components/navbar";

export default function Home() {

    return (
        <div className="h-[100dvh] sm:min-h-screen flex flex-col">
            <Navbar page={Page.HOME}/>
            <main className="flex-grow flex items-center justify-center">
                <HomeIntro/>
            </main>
            <FadeIn delay={500} transitionDuration={500}>
                <HomeFooter/>
            </FadeIn>
    </div>
  );
}
