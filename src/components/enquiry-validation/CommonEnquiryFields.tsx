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
                rows={3}
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
        className="bg-(--orange) text-white cursor-pointer py-2 px-4 rounded-full hover:bg-(--orange-nine) transition duration-300 min-w-28"
        disabled={loading}
        style={loading ? { pointerEvents: 'none', opacity: 0.7 } : {}}
    >
        <Paragraph size='base'>{loading ? "Submitting..." : submitText}</Paragraph>
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
