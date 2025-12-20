import Section from '@/components/common/Section';
import Paragraph from '@/components/common/Paragraph';
import Heading from '@/components/common/Heading';
import AnimatedCounter from '@/components/common/AnimatedCounter';
import type { FC } from 'react';
import { GoDotFill } from 'react-icons/go';

// Helper to extract prefix, number, and suffix
function parseStatValue(value: string) {
    const match = value.match(/^([^\d]*)([\d,.]+)(.*)$/);
    if (!match) return { prefix: '', number: 0, suffix: '' };
    return {
        prefix: match[1] || '',
        number: parseFloat(match[2].replace(/,/g, '')),
        suffix: match[3] || '',
    };
}

interface Stat {
    value: string;
    label: string;
}

const ABOUT_STATS: Stat[] = [
    { value: '95%', label: 'Complete customer satisfaction' },
    { value: '10+', label: 'Innovation and valuable insight' },
    { value: '$10m', label: 'Highly efficient financial strategies' },
    { value: '50m', label: 'Users worldwide, providing them with' },
];

// Reusable StatCard component
const StatCard: FC<Stat> = ({ value, label }) => {
    const { prefix, number, suffix } = parseStatValue(value);
    return (
        <div
            className="pl-4 border-(--dark-blue)/20 border-r-0 border-l"
            role="region"
            aria-label={label}
        >
            <Heading level={4} className="font-semibold">
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
};

const AboutUs: FC = () => (
    <Section aria-labelledby="about-us-heading">
        <div className="py-10 sm:py-20 flex flex-col lg:flex-row md:items-start lg:gap-12 text-(--dark-blue)">
            {/* Left: Dot and About Us */}
            <div className="flex flex-row gap-2 items-center lg:min-w-20 xl:min-w-50 mb-6 lg:mb-0 md:mr-4">

                <GoDotFill aria-hidden="true" />
                <Paragraph size="base" className="font-medium uppercase" id="about-us-heading">ABOUT US</Paragraph>

            </div>
            {/* Right: Main content */}
            <div className="flex-1">
                <Paragraph size="xl" className="font-medium">
                    With over 15 years of experience, we specialize in delivering tailored solutions that drive success across industries like finance, technology, and operations. Our dedicated team is focused on accelerating growth and helping your business thrive in an ever-changing market.
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
