"use client";
import React, { useEffect, FC, ReactNode, memo } from 'react';
import Paragraph from '@/components/common/Paragraph';
import Heading from '@/components/common/Heading';
import CenterSection from '@/components/common/CenterSection';
import { MdOutlineMail, MdOutlinePhoneInTalk, MdOutlineWhatsapp } from 'react-icons/md';
import { BsShop } from 'react-icons/bs';
import Span from '@/components/common/Span';
import CommonEnquiryFields, { AutofillSuppressionFields } from '@/components/enquiry-validation/CommonEnquiryFields';
import { useEnquiryForm } from '@/components/enquiry-validation/useEnquiryForm';
import { validateEnquiryFormWithToast } from '@/components/enquiry-validation/enquiryFormValidation';
import { createAppoinmentRequest } from '@/services/appoinmentRequestService';
import { toast } from "react-toastify";
import Link from 'next/link';

// --- Types ---
type ContactType = 'Phone' | 'Whatsapp' | 'Email' | 'Address';

interface ContactItem {
    icon: ReactNode;
    label: ContactType;
    value: string;
}

const CONTACTS: ContactItem[] = [
    { icon: <MdOutlinePhoneInTalk />, label: 'Phone', value: '+97165351536' },
    { icon: <MdOutlineWhatsapp />, label: 'Whatsapp', value: '+971 56 828 4581' },
    { icon: <MdOutlineMail />, label: 'Email', value: 'Sales@pmfworld.com' },
    { icon: <BsShop />, label: 'Address', value: 'Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.' },
];

// --- Reusable Contact Card ---
const ContactCard: FC<ContactItem> = memo(({ icon, label, value }) => {
    let valueNode: ReactNode = value;
    const focusClass = "focus-visible:outline-blue-700 focus-visible:outline-2";
    if (label === 'Phone') {
        valueNode = (
            <Link
                href={`tel:${value.replace(/\s+/g, '')}`}
                className={`hover:underline ${focusClass}`}
                aria-label={`Call ${value}`}
            >
                {value}
            </Link>
        );
    } else if (label === 'Email') {
        valueNode = (
            <Link
                href={`mailto:${value}`}
                className={`hover:underline ${focusClass}`}
                aria-label={`Email ${value}`}
            >
                {value}
            </Link>
        );
    } else if (label === 'Whatsapp') {
        const waNum = value.replace(/\D/g, '');
        valueNode = (
            <Link
                href={`https://wa.me/${waNum}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:underline ${focusClass}`}
                aria-label={`WhatsApp ${value}`}
            >
                {value}
            </Link>
        );
    }
    return (
        <div className="rounded-md shadow p-6 flex flex-col items-center text-center gap-2 bg-(--orange-one) text-(--dark-blue)" role="listitem">
            <Heading level={5}>{icon}</Heading>
            <Paragraph size="base" className="font-semibold">{label}</Paragraph>
            <Span>{valueNode}</Span>
        </div>
    );
});
ContactCard.displayName = 'ContactCard';

const ContactDetails: FC = () => {
    const {
        formData,
        handleChange,
        handleSubmit,
        loading,
        error,
        success,
        setError,
        setSuccess,
    } = useEnquiryForm({
        validateForm: validateEnquiryFormWithToast,
        onSubmit: createAppoinmentRequest,
        captchaAction: "enquiry_form",
    });

    useEffect(() => {
        if (error) {
            toast.error(error);
            setError(null);
        }
        if (success) {
            toast.success(success);
            setSuccess(null);
        }
    }, [error, success, setError, setSuccess]);

    return (
        <CenterSection>
            <div className="flex flex-col md:flex-row gap-8 w-full py-10 sm:py-16 lg:py-20">
                {/* Left: Contact Info & Map */}
                <section className="flex-1 flex flex-col gap-4" aria-label="Contact Information">
                    <div className="grid grid-cols-2 gap-4" role="list" aria-label="Contact Methods">
                        {CONTACTS.map((c) => (
                            <ContactCard key={c.label} {...c} />
                        ))}
                    </div>
                    <div className="rounded-md overflow-hidden mt-4" aria-label="Location Map">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.112233!2d-0.119543!3d51.503324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604cbf0b0b0b0%3A0x0!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1630000000000!5m2!1sen!2suk"
                            width="100%"
                            height="200"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </section>
                {/* Right: Contact Form */}
                <section className="flex-1 sm:pl-8 flex flex-col justify-between text-(--dark-blue)" aria-label="Contact Form">
                    <div>
                        <Heading level={4} className="text-(--dark-blue) mb-2">Get In Touch</Heading>
                        <Paragraph size="base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </Paragraph>
                    </div>
                    <form onSubmit={handleSubmit} autoComplete="off" className="mt-4">
                        <AutofillSuppressionFields />
                        <CommonEnquiryFields
                            formData={formData}
                            handleChange={handleChange}
                            loading={loading}
                            submitText="Submit"
                        />
                    </form>
                </section>
            </div>
        </CenterSection>
    );
};

export default ContactDetails;
