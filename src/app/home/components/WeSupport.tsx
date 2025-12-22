import Section from '@/components/common/Section';
import Paragraph from '@/components/common/Paragraph';
import Heading from '@/components/common/Heading';
import type { FC } from 'react';
import { GoDotFill } from 'react-icons/go';

// Add a static array for the 4 logos
const SUPPORT_ITEMS = [
    {
        src: '/home/Retail.png',
        heading: 'Retail Chains & Showrooms',
        description: 'Fabrication solutions that support attractive displays and functional retail environments.'
    },
    {
        src: '/home/Commercial.png',
        heading: 'Commercial & Residential Construction',
        description: 'Reliable metalwork designed to meet structural and interior requirements across projects.'
    },
    {
        src: '/home/Healthcare.png',
        heading: 'Healthcare Facilities',
        description: 'Hygienic, durable fabrication suited for hospitals, clinics, and medical spaces.'
    },
    {
        src: '/home/Hospitality.png',
        heading: 'Hospitality & Hotels',
        description: 'Well-finished metal solutions that complement service areas and guest-facing spaces.'
    },
    {
        src: '/home/Industrial.png',
        heading: 'Industrial & Institutional Clients',
        description: 'Robust fabrication work built to handle demanding operational and usage needs.'
    },
];

const WeSupport: FC = () => (
    <Section aria-labelledby="about-us-heading" className="bg-(--light-blue)/10">
        <div className="py-10 sm:sm:py-16 lg:py-20 flex flex-col lg:flex-row md:items-start lg:gap-12 text-(--dark-blue)">
            {/* Left: Dot and About Us */}
            <div className="flex flex-row gap-2 items-center lg:min-w-20 xl:min-w-50 mb-6 lg:mb-0 md:mr-4">
                <GoDotFill aria-hidden="true" />
                <Paragraph size="base" className="font-medium uppercase" id="about-us-heading">Industries We Serve</Paragraph>
            </div>
            {/* Right: Main content */}
            <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-10" role="list">
                    {SUPPORT_ITEMS.map((item, i) => (
                        <div key={i} className="flex flex-col justify-start items-start">
                            <img src={item.src} alt={`Support logo ${i + 1}`} className="h-14 object-contain" />
                            <Paragraph size='xl' className='my-2 font-bold'>{item.heading}</Paragraph>
                            <Paragraph size="base" className='text-justify'>{item.description}</Paragraph>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </Section>
);

export default WeSupport;
