"use client";
import styles from "./styles.module.css";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import AnimatedTitle from "../Animations/AnimatedTitle";
import AnimatedText from "../Animations/AnimatedText";
import Tooltip from "../Tooltip";
import Link from "next/link";

export default function Footer() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 0]);
    return (
        <motion.div
            id="contact"
            style={{ y }}
            ref={container}
            className={styles.contact}
        >
            <div className={styles.body}>
                <div className={styles.section}>
                    <div className={styles.title}>
                        <h1>
                            <AnimatedTitle title="Ready to" />
                        </h1>
                        <h1>
                            <AnimatedTitle title="Collaborate?" />
                        </h1>
                    </div>
                    <div className={styles.nav}>
                        <div className={styles.button}>
                            <Tooltip label="Hey, Let's Talk">
                                <Link
                                    target="_blank"
                                    href="mailto:mahendrasutar811@gmail.com"
                                >
                                    <AnimatedText content="email" />
                                </Link>
                            </Tooltip>
                        </div>
                        <div className={styles.button}>
                            <Tooltip label="Design Stuff <3">
                                <Link
                                    target="_blank"
                                    href="https://www.behance.net/mahendrasutar"
                                >
                                    <AnimatedText content="behance" />
                                </Link>
                            </Tooltip>
                        </div>
                        <div className={styles.button}>
                            <Tooltip label="Experiences Here">
                                <Link
                                    target="_blank"
                                    href="http://www.linkedin.com/in/mahendra-sutar-817a3022a"
                                >
                                    <AnimatedText content="linkedin" />
                                </Link>
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <div className={styles.info}>
                </div>
            </div>
        </motion.div>
    );
}
