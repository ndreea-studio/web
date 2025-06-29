"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";



export default function Home() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <main className="flex flex-col items-center">
            {/* Gradient blob that follows mouse */}
            <div
                className="fixed pointer-events-none opacity-20 w-96 h-96 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] blur-3xl -z-10"
                style={{
                    left: mousePosition.x - 192,
                    top: mousePosition.y - 192,
                    transition: 'all 0.3s ease-out'
                }}
            />

            <Navbar />
            <Hero />
            <Work />
            <Services />
            <About />
            <Contact />
            <Footer />
        </main>
    );
}
