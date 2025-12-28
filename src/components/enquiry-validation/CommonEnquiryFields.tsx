"use client";

import React from "react";
import { GoDownload } from "react-icons/go";
import Paragraph from "@/components/common/Paragraph";
import {
    InputField,
    TextAreaField,
} from "@/components/ui/FormFields";

// -------------------- Types --------------------
export type CommonEnquiryFormData = {
    name: string;
    email: string;
    mobile: string;
    message: string;
};

export type CommonEnquiryFieldsProps = {
    formData: CommonEnquiryFormData;
    handleChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    requiredMobile?: boolean;
    requiredName?: boolean;
    loading?: boolean;
    submitText?: string;
};

// -------------------- Main Component --------------------
const CommonEnquiryFields: React.FC<CommonEnquiryFieldsProps> = ({
    formData,
    handleChange,
    requiredMobile = true,
    requiredName = true,
    loading = false,
    submitText = "Submit",
}) => {
    return (
        <>
            <InputField
                type="text"
                label="Name *"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required={requiredName}
                autoComplete="new-password"
            />
            <InputField
                type="email"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required={false}
                autoComplete="new-password"
            />
            <InputField
                type="tel"
                label="Mobile number *"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required={requiredMobile}
                autoComplete="new-password"
            />
            <TextAreaField
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={2}
                required={false}
            />
            <div className="flex justify-end mt-4">
                <SubmitButton loading={loading} submitText={submitText} />
            </div>
        </>
    );
};

// -------------------- Reusable Buttons --------------------
const SubmitButton: React.FC<{ loading?: boolean; submitText?: string }> = ({ loading, submitText }) => (
    <button
        type="submit"
        className="relative flex justify-center items-center rounded-full bg-transparent overflow-hidden cursor-pointer border border-(--yellow) group transition-all duration-300 min-w-[110px]"
        disabled={loading}
        style={loading ? { pointerEvents: 'none', opacity: 0.7 } : {}}
    >
        <span className="relative z-20 text-center no-underline w-full px-2 py-1 text-(--yellow) text-base transition-all duration-300 group-hover:text-(--blue)">{loading ? "Submitting..." : submitText}</span>
        <span className="absolute left-0 top-0 w-full h-0 bg-(--yellow) transition-all duration-300 ease-in-out group-hover:h-full group-hover:top-auto group-hover:bottom-0 z-10" />
    </button>
);

const DownloadBrochureButton: React.FC<{ loading?: boolean }> = ({ loading }) => (
    <button
        type="submit"
        className="relative flex justify-center items-center gap-1 rounded bg-(--yellow) overflow-hidden cursor-pointer border border-(--yellow) group transition-all duration-300 px-4 py-1"
        disabled={loading}
        style={loading ? { pointerEvents: 'none', opacity: 0.7 } : {}}
    >
        <span className="relative z-20 gap-x-1 flex items-center text-center no-underline w-full text-(--blue) transition-all duration-300 group-hover:text-(--yellow)">
            {loading ? "Downloading Brochure..." : "Download Brochure"} <GoDownload />
        </span>
        <span className="absolute left-0 top-0 w-full h-0 bg-(--blue) transition-all duration-300 ease-in-out group-hover:h-full group-hover:top-auto group-hover:bottom-0 z-10" />
    </button>
);

// -------------------- Autofill Suppression Fields --------------------
export const AutofillSuppressionFields: React.FC = () => (
    <>
        <input type="text" name="fakeusernameremembered" autoComplete="username" style={{ display: "none" }} tabIndex={-1} />
        <input type="password" name="fakePassword" autoComplete="new-password" style={{ display: "none" }} tabIndex={-1} />
    </>
);

export default CommonEnquiryFields;
