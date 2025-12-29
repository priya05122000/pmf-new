import Section from '@/components/common/Section';
import Paragraph from '@/components/common/Paragraph';
import { FC, memo } from 'react';
import { GoDotFill } from 'react-icons/go';

// Type for support item
interface SupportItem {
    src: string;
    heading: string;
    description: string;
}

// Static array for the support items
const SUPPORT_ITEMS: SupportItem[] = [
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

// Reusable SupportCard component
const SupportCard: FC<SupportItem> = memo(({ src, heading, description }) => (
    <div
        className="flex flex-col justify-start items-start hover:bg-(--dark-blue) hover:text-(--white) rounded-md transition-all duration-200 p-4 focus-within:ring-2 focus-within:ring-(--dark-blue)"
        tabIndex={0}
        role="listitem"
        aria-label={heading}
    >
        <img
            src={src}
            alt={heading}
            className="h-14 object-contain mb-2"
            loading="lazy"
            width={56}
            height={56}
            draggable={false}
        />
        <Paragraph size='xl' className='my-2 font-bold'>{heading}</Paragraph>
        <Paragraph size="base" className='text-justify'>{description}</Paragraph>
    </div>
));
SupportCard.displayName = 'SupportCard';

const WeSupport: FC = () => (
    <Section aria-labelledby="about-us-heading" className="bg-(--light-blue)/10">
        <div className="py-10 sm:py-16 lg:py-20 flex flex-col lg:flex-row md:items-start lg:gap-12 text-(--dark-blue)">
            {/* Left: Dot and About Us */}
            <div className="flex flex-row gap-2 items-center lg:min-w-20 xl:min-w-50 mb-6 lg:mb-0 md:mr-4">
                <GoDotFill aria-hidden="true" />
                <Paragraph size="base" className="font-medium uppercase" id="about-us-heading">Industries We Serve</Paragraph>
            </div>
            {/* Right: Main content */}
            <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4" role="list">
                    {SUPPORT_ITEMS.map((item) => (
                        <SupportCard key={item.heading} {...item} />
                    ))}
                </div>
            </div>
        </div>
    </Section>
);

export default WeSupport;
