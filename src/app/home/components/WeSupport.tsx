import Section from '@/components/common/Section';
import Paragraph from '@/components/common/Paragraph';
import Heading from '@/components/common/Heading';
import type { FC } from 'react';
import { GoDotFill } from 'react-icons/go';

// Add a static array for the 4 logos
const SUPPORT_LOGOS = [
    '/home/welder.png',
    '/home/welder.png',
    '/home/welder.png',
    '/home/welder.png',

];

const WeSupport: FC = () => (
    <Section aria-labelledby="about-us-heading">
        <div className="pt-10 sm:pt-16 flex flex-col lg:flex-row md:items-start lg:gap-12 text-(--dark-blue)">
            {/* Left: Dot and About Us */}
            <div className="flex flex-row gap-2 items-center lg:min-w-20 xl:min-w-50 mb-6 lg:mb-0 md:mr-4">
                <GoDotFill aria-hidden="true" />
                <Paragraph size="base" className="font-medium uppercase" id="about-us-heading">We Support</Paragraph>
            </div>
            {/* Right: Main content */}
            <div className="flex-1">
                <div className="grid grid-cols-4 gap-6 mb-8" role="list">
                    {SUPPORT_LOGOS.map((src, i) => (
                        <div key={i} className="flex flex-col justify-center items-start">
                            <img src={src} alt={`Support logo ${i + 1}`} className="h-16 object-contain" />
                            <Heading level={6}>Supporting Heading</Heading>
                            <Paragraph size="base">Supporting description text goes here.</Paragraph>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    </Section>
);

export default WeSupport;
