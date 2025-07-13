
"use client";

import { motion, type MotionProps } from "framer-motion";

type MotionWrapperProps = MotionProps & {
  children: React.ReactNode;
  className?: string;
  el?: keyof JSX.IntrinsicElements;
};

export function MotionWrapper({ children, className, el = 'div', ...props }: MotionWrapperProps) {
    const MotionElement = motion(el);
    return (
        <MotionElement className={className} {...props}>
            {children}
        </MotionElement>
    );
}
