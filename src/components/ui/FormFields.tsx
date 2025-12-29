"use client";
import React, { useState } from "react";

// --- Input Field ---
const baseInputClass =
  "border-b py-2  px-1 outline-none w-full mb-3";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  className = "",
  id,
  value,
  onChange,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState("");
  const inputId =
    id ||
    (label ? `input-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (value === undefined) setInternalValue(e.target.value);
    onChange?.(e);
  };

  return (
    <div className="mb-3 w-full">
      {label && (
        <label className="block mb-1" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        {...props}
        value={value ?? internalValue}
        onChange={handleChange}
        className={`w-full px-4 py-2 bg-(--light-blue-one) rounded-md focus:outline-none transition duration-300 ${className}`}
        autoComplete={props.autoComplete || "off"}
      />
    </div>
  );
};

// --- Textarea Field ---

interface TextAreaFieldProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  className?: string;
}

const baseTextAreaClass =
  "bg-transparent py-2 px-1 outline-none text-(--white-custom) resize-none w-full mb-3";

export const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  className = "",
  id,
  value,
  onChange,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState("");
  const textAreaId =
    id ||
    (label ? `textarea-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (value === undefined) setInternalValue(e.target.value);
    onChange?.(e);
  };

  // Ensure autoComplete is a string
  const autoCompleteValue =
    typeof props.autoComplete === "string" ? props.autoComplete : "off";

  return (
    <div className="mb-3 w-full">
      {label && (
        <label className="block mb-1" htmlFor={textAreaId}>
          {label}
        </label>
      )}
      <textarea
        id={textAreaId}
        {...props}
        value={value ?? internalValue}
        onChange={handleChange}
        className={`w-full px-4 py-2 bg-(--light-blue-one) rounded-md focus:outline-none transition duration-300 ${className}`}
        autoComplete={autoCompleteValue}
      />
    </div>
  );
};
