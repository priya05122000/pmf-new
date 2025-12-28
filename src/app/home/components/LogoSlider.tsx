"use client";

import Section from "@/components/common/Section";
import type { FC } from "react";
import LogoSliderClient from "./LogoSliderClient";

interface Partner {
    id: string;
    name: string;
    logo_url: string;
    status: boolean;
}

interface LogoSliderProps {
    partners: Partner[];
}

const LogoSlider: FC<LogoSliderProps> = ({ partners }) => (
    <Section aria-label="Our Partners" className="bg-(--light-blue-one)">
        <LogoSliderClient partners={partners} />
    </Section>
);

export default LogoSlider;
