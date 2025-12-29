import React from 'react';
import Section from './Section';
import Heading from './Heading';
import Paragraph from './Paragraph';

export interface BannerProps {
    heading?: string;
    description?: string;
    backgroundImageUrl?: string;
    overlayClassName?: string;
    className?: string;
    style?: React.CSSProperties;
    headingClassName?: string;
    descriptionClassName?: string;
    children?: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({
    heading,
    description,
    backgroundImageUrl = '/home/banner.webp',
    overlayClassName = 'absolute inset-0 bg-(--light-blue-three) rounded-xl z-0',
    className = 'h-[60vh]',
    style = {},
    headingClassName = 'text-white text-center',
    descriptionClassName = 'text-white mt-4 max-w-2xl text-center',
    children,
}) => (
    <section className={`p-3 ${className}`.trim()} aria-label="Steel Quality Banner">
        <Section
            className="w-full h-full bg-cover bg-center rounded-xl bg-fixed relative flex items-center justify-center"
            style={{ backgroundImage: `url('${backgroundImageUrl}')`, ...style }}
        >
            <div className={overlayClassName} aria-hidden="true"></div>
            <div className="h-full w-full flex items-center justify-center relative z-10">
                {children ? (
                    children
                ) : (
                    <div className="flex flex-col items-center justify-center h-full w-full">
                        {heading && <Heading level={4} className={headingClassName}>{heading}</Heading>}
                        {description && (
                            <Paragraph size="base" className={descriptionClassName}>
                                {description}
                            </Paragraph>
                        )}
                    </div>
                )}
            </div>
        </Section>
    </section>
);

export default Banner;
