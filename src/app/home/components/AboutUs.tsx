import React, { FC } from 'react';
import Section from '@/components/common/Section';
import Paragraph from '@/components/common/Paragraph';
import Heading from '@/components/common/Heading';
import AnimatedCounter from '@/components/common/AnimatedCounter';
import { GoDotFill } from 'react-icons/go';

// Helper: Parse stat value into prefix, number, and suffix
const parseStatValue = (value: string) => {
    const match = value.match(/^([^\d]*)([\d,.]+)(.*)$/);
    if (!match) return { prefix: '', number: 0, suffix: '' };
    return {
        prefix: match[1] || '',
        number: parseFloat(match[2].replace(/,/g, '')),
        suffix: match[3] || '',
    };
};

// Types
interface Stat {
    value: string;
    label: string;
}

// Data
const ABOUT_STATS: Stat[] = [
    { value: '30+', label: 'People' },
    { value: '1015', label: 'Projects' },
    { value: '13+', label: 'Years' },
    { value: '170+', label: 'Clients' },
];

// Reusable StatCard
const StatCard: FC<Stat> = React.memo(({ value, label }) => {
    const { prefix, number, suffix } = parseStatValue(value);
    return (
        <div
            className="pl-4 border-l border-[rgba(26,37,60,0.2)]"
            role="listitem"
            aria-label={label}
        >
            <Heading level={4} className="font-bold text-[#E97F4A]">
                <AnimatedCounter
                    to={number}
                    prefix={prefix}
                    suffix={suffix}
                    duration={1.2}
                />
            </Heading>
            <Paragraph size="base" className="mt-1">{label}</Paragraph>
        </div>
    );
});
StatCard.displayName = 'StatCard';

const AboutUs: FC = () => (
    <Section aria-labelledby="about-us-heading">
        <div className="py-10 sm:py-16 lg:py-20 flex flex-col lg:flex-row md:items-start lg:gap-12 text-[#1a253c]">
            {/* Left: Dot and About Us */}
            <div className="flex flex-row gap-2 items-center lg:min-w-20 xl:min-w-50 mb-4 md:mr-4">
                <GoDotFill aria-hidden="true" />
                <Paragraph size="base" className="font-medium uppercase" id="about-us-heading">ABOUT US</Paragraph>
            </div>
            {/* Right: Main content */}
            <div className="flex-1">
                <Paragraph size="xl" className="font-medium text-justify">
                    PMF World is a trusted name in stainless steel fabrication, delivering precision-built solutions that balance strength, finish, and long-term use. Our expertise covers both mild steel and stainless steel, crafted with close attention to detail at every stage. We serve a wide range of sectors, including retail, construction, hospitals, and hotels. Each project reflects our commitment to quality, reliability, and skilled workmanship.
                </Paragraph>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12" role="list">
                    {ABOUT_STATS.map((stat) => (
                        <StatCard key={stat.value} {...stat} />
                    ))}
                </div>
            </div>
        </div>
    </Section>
);

export default AboutUs;
