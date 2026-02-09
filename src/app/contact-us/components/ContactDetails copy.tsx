import React from 'react';
import Paragraph from '@/components/common/Paragraph';
import Heading from '@/components/common/Heading';
import Section from '@/components/common/Section';
import CenterSection from '@/components/common/CenterSection';
import { MdOutlineMail, MdOutlinePhoneInTalk } from 'react-icons/md';
import { MdOutlineWhatsapp } from "react-icons/md";
import { BsShop } from 'react-icons/bs';
import Span from '@/components/common/Span';

const CONTACTS = [
    {
        icon: (
            <MdOutlinePhoneInTalk />
        ),
        label: 'Phone',
        value: '+97165351536',
    },
    {
        icon: (
            <MdOutlineWhatsapp />

        ),
        label: 'Whatsapp',
        value: '+971 56 828 4581',
    },
    {
        icon: (
            <MdOutlineMail />
        ),
        label: 'Email',
        value: 'Sales@pmfworld.com',
    },
    {
        icon: (
            <BsShop />
        ),
        label: 'Address',
        value: 'Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.',
    },
];

const ContactDetails = () => {
    return (
        <CenterSection>
            <div className="flex flex-col md:flex-row gap-8 w-full py-10 sm:py-16 lg:py-20">
                {/* Left: Contact Info & Map */}
                <div className="flex-1 flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        {CONTACTS.map((c) => (
                            <div key={c.label} className=" rounded-md shadow p-6 flex flex-col items-center text-center gap-2 bg-(--orange-one) text-(--dark-blue)">
                                <Heading level={4} className=' '>{c.icon}</Heading>
                                <Paragraph size="base" className="font-semibold">{c.label}</Paragraph>
                                <Span >{c.value}</Span>
                            </div>
                        ))}
                    </div>
                    <div className="rounded-md overflow-hidden ">
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
                </div>
                {/* Right: Contact Form */}
                <div className="flex-1  sm:pl-8 flex flex-col justify-between text-(--dark-blue)">
                    <div>
                        <Heading level={4} className="text-(--dark-blue) mb-2">Get In Touch</Heading>
                        <Paragraph size="base" className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Paragraph>
                    </div>

                    <form>
                        <div className="mb-3">
                            <label className="block  mb-1" htmlFor="name"> Name</label>
                            <input className="w-full px-4 py-2 bg-(--light-blue-one) rounded-md focus:outline-none  transition duration-300" placeholder="Enter your name" name="name" id="name" type="text" />
                        </div>
                        <div className="mb-3">
                            <label className="block  mb-1" htmlFor="email"> Email</label>
                            <input className="w-full px-4 py-2 bg-(--light-blue-one) rounded-md focus:outline-none  transition duration-300" placeholder="Enter your email" name="email" id="email" type="email" />
                        </div>
                        <div className="mb-3">
                            <label className="block  mb-1" htmlFor="phone"> Phone Number</label>
                            <input className="w-full px-4 py-2 bg-(--light-blue-one) rounded-md focus:outline-none  transition duration-300" placeholder="Enter your phone number" name="phone" id="phone" type="tel" />
                        </div>
                        <div className="mb-3">
                            <label className="block mb-1" htmlFor="message">Your Message</label>
                            <textarea className="w-full px-4 py-2 bg-(--light-blue-one) rounded-md focus:outline-none  transition duration-300" rows={4} placeholder="Enter your message" name="message" id="message" defaultValue={""} />
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-(--orange) text-white cursor-pointer py-2 px-4 rounded-full hover:bg-(--orange-nine) transition duration-300" type="submit">
                                <Paragraph size='base'>Send Message</Paragraph>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </CenterSection>

    );
};

export default ContactDetails;
