"use client";
import { useEffect } from "react";
import AnimatedTitle from "@/components/Animations/AnimatedTitle";
import AnimatedText from "@/components/Animations/AnimatedText";
import SlidingImages from "@/components/SlidingImages";
import Experience from "@/components/Experience";
import WorkedWith from "@/components/WorkedWith";
import Image from "next/image";
import styles from "./page.module.css";

export default function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={styles.main}>
            <div className={styles.header_container}>
                <div className={styles.title}>
                    <div className={styles.title_hello}>
                        <h1>
                            <AnimatedTitle title="Hello :)" />
                        </h1>
                    </div>
                    <div className={styles.title_namaste}>
                        <h2>
                            <AnimatedText content="नमस्ते 🙏" />
                        </h2>
                    </div>
                </div>
                <div className={styles.myphoto}>
                    <Image fill src="/dp.png" alt="aboutme image" />
                </div>
            </div>
            <div className={styles.info_text}>
                <div className={styles.info_text_content}>
                    <p>
                        <AnimatedText content="My journey into UI/UX design started back in my school days—sketching cars, creating graphics on benches, and filling the last pages of notebooks with designs. This passion for creativity naturally merged with my growing interest in technology." />
                        <br />
                        <br />
                        <AnimatedText content="While pursuing my B.Tech in Information Technology, I realized I wanted to bridge the gap between design and functionality, combining aesthetics with seamless user experiences. That’s where UI/UX design became my focus—transforming ideas into intuitive and engaging digital products." />
                        <br />
                        <br />
                        <AnimatedText content="In my free time, I love experimenting with UI concepts, graphic design, and iconography in Figma, while also sharing UI/UX insights to help fellow designers grow." />
                        <br />
                        <br />
                        <AnimatedText content="Besides that..." />
                    </p>
                </div>
            </div>
            <div className={styles.activities}>
                <div className={styles.activities_content}>
                    <h1>
                        <AnimatedText content="I love reading, meeting people, travelling and photography!" />
                    </h1>
                </div>
                <div className={styles.sliding_images}>
                    <SlidingImages />
                </div>
            </div>
            <Experience />
            <WorkedWith />
        </div>
    );
}
