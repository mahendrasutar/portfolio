"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll, motion } from "framer-motion";

const images = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png"
];

export default function Gallery() {
    const gallery = useRef(null);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    const { scrollYProgress } = useScroll({
        target: gallery,
        offset: ["start end", "end start"],
    });

    const { height } = dimension;
    const y = useTransform(scrollYProgress, [1, 0], [0, height * 2]);
    const y2 = useTransform(scrollYProgress, [1, 0], [0, height * 3]);

    useEffect(() => {
        const lenis = new Lenis({
            smoothWheel: true,
            smoothTouch: true,
            syncTouch: true,
        });

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        const resize = () => {
            setDimension({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", resize);
        requestAnimationFrame(raf);
        resize();

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <main className={styles.main}>
            <div ref={gallery} className={styles.gallery}>
                <Column images={[images[0], images[1]]} y={y} />
                <Column images={[images[2], images[3], images[4]]} y={y2} />
            </div>
        </main>
    );
}

const Column = ({ images, y }) => {
    return (
        <motion.div className={styles.column} style={{ y }}>
            {images.map((src, i) => (
                <div key={i} className={styles.imageContainer}>
                    <Image
                        src={`/gallery/${src}`}
                        alt="images of all the different artworks"
                        fill={true}
                        priority={true}
                        quality={60}
                    />
                </div>
            ))}
        </motion.div>
    );
};
