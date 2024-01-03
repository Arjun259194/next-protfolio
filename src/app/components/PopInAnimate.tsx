"use client";
import { motion, useScroll } from "framer-motion";
import { ElementRef, FC, ReactNode, useRef } from "react";

interface Props {
    children: ReactNode;
}

const PopInAnimate: FC<Props> = ({ children }) => {
    const ref = useRef<ElementRef<"div">>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center"],
    });

    return (
        <motion.div
            style={{
                scale: scrollYProgress,
                opacity: scrollYProgress,
            }}
            ref={ref}>
            {children}
        </motion.div>
    );
};

export default PopInAnimate;
