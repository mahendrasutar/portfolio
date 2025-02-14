"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./styles.module.css";
import Image from "next/image";

const slider1 = [
    {
        src: "1.jpg",
    },
    {
        src: "2.jpg",
    },
    {
        src: "3.jpg",
    },
    {
        src: "4.jpg",
    },
];

const slider2 = [
    {
        src: "5.jpg",
    },
    {
        src: "6.jpg",
    },
    {
        src: "7.jpg",
    },
    {
        src: "8.jpg",
    },
];

const slider3 = [
    {
        src: "9.jpg",
    },
    {
        src: "10.jpg",
    },
    {
        src: "11.jpg",
    },
];

export default function SlidingImages() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

    return (
        <div ref={container} className={styles.slidingImages}>
            <motion.div style={{ x: x1 }} className={styles.slider}>
                {slider1.map((project, index) => {
                    return (
                        <div key={index} className={styles.project}>
                            <div className={styles.imageContainer}>
                                <Image
                                    fill={true}
                                    alt={"image"}
                                    src={`/sliding_images/${project.src}`}
                                    style={{ borderRadius: "15px" }}
                                />
                            </div>
                        </div>
                    );
                })}
            </motion.div>
            <motion.div style={{ x: x2 }} className={styles.slider}>
                {slider2.map((project, index) => {
                    return (
                        <div key={index} className={styles.project}>
                            <div className={styles.imageContainer}>
                                <Image
                                    fill={true}
                                    alt={"image"}
                                    src={`/sliding_images/${project.src}`}
                                    style={{ borderRadius: "15px" }}
                                />
                            </div>
                        </div>
                    );
                })}
            </motion.div>
            <motion.div style={{ x: x1 }} className={styles.slider}>
                {slider3.map((project, index) => {
                    return (
                        <div key={index} className={styles.project}>
                            <div className={styles.imageContainer}>
                                <Image
                                    fill={true}
                                    alt={"image"}
                                    src={`/sliding_images/${project.src}`}
                                    style={{ borderRadius: "15px" }}
                                />
                            </div>
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
}
