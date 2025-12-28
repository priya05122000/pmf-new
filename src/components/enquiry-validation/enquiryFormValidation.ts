import { toast } from "react-toastify";
import { EnquiryFormData } from "./useEnquiryForm";

// -------------------- Validation Regex Constants --------------------
const NAME_REGEX = /^[A-Za-z.\s]+$/;
const MOBILE_REGEX = /^[6-9]\d{9}$/;
const EMAIL_REGEX = /^[A-Za-z0-9](?:[A-Za-z0-9._%+-]{0,63})@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;
const MESSAGE_REGEX = /^[A-Za-z0-9\s.,!?\'"()\-]{0,300}$/;

// -------------------- Core Validation Function --------------------
export function validateEnquiryForm(
    formData: EnquiryFormData,
    _requireAgree: boolean = false,
    requiredName: boolean = true
): boolean {
    if (requiredName && (!NAME_REGEX.test(formData.name) || formData.name.length < 2 || formData.name.length > 50)) return false;
    if (!MOBILE_REGEX.test(formData.mobile)) return false;
    if (formData.email && !EMAIL_REGEX.test(formData.email)) return false;
    if (formData.message && !MESSAGE_REGEX.test(formData.message)) return false;
    return true;
}

// -------------------- Toast Validation Wrapper --------------------
export function validateEnquiryFormWithToast(
    formData: EnquiryFormData,
    _requireAgree: boolean = false,
    requiredName: boolean = true
): boolean {
    if (!validateEnquiryForm(formData, false, requiredName)) {
        if (requiredName && (!NAME_REGEX.test(formData.name) || formData.name.length < 2 || formData.name.length > 50)) {
            toast.error("Please enter a valid full name (letters and spaces only, 2–50 chars).");
        } else if (!MOBILE_REGEX.test(formData.mobile)) {
            toast.error("Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.");
        } else if (formData.email && !EMAIL_REGEX.test(formData.email)) {
            toast.error("Please enter a valid professional email address.");
        } else if (formData.message && !MESSAGE_REGEX.test(formData.message)) {
            toast.error("Please enter a valid message (letters, numbers, spaces, and . , ! ? ' \" ( ) - allowed, max 300 chars).");
        }
        return false;
    }
    return true;
}
