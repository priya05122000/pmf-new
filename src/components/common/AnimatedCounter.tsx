"use client";
import { useEffect, useState, useRef } from 'react';
import { useMotionValue, animate } from 'framer-motion';

interface AnimatedCounterProps {
    from?: number;
    to: number;
    duration?: number;
    decimals?: number;
    className?: string;
    prefix?: string;
    suffix?: string;
}

const AnimatedCounter = ({
    from = 0,
    to,
    duration = 1.2,
    decimals = 0,
    className = '',
    prefix = '',
    suffix = '',
}: AnimatedCounterProps) => {
    const count = useMotionValue(from);
    const [display, setDisplay] = useState(from);
    const ref = useRef<HTMLSpanElement | null>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current || hasAnimated) return;
            const rect = ref.current.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                setHasAnimated(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasAnimated]);

    useEffect(() => {
        if (!hasAnimated) return;
        const controls = animate(count, to, { duration });
        const unsubscribe = count.on('change', (latest) => setDisplay(latest));
        return () => {
            controls.stop();
            unsubscribe();
        };
    }, [to, duration, count, hasAnimated]);

    return (
        <span ref={ref} className={className}>
            {prefix}
            {Number(display).toLocaleString(undefined, {
                minimumFractionDigits: decimals,
                maximumFractionDigits: decimals,
            })}
            {suffix}
        </span>
    );
};

export default AnimatedCounter;
