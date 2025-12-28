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
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState("");
  const inputId =
    id ||
    (label ? `input-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const showFloating = isFocused || Boolean(value ?? internalValue);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    props.onFocus?.(e);
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    props.onBlur?.(e);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (value === undefined) setInternalValue(e.target.value);
    onChange?.(e);
  };

  return (
    <div className="relative w-full ">
      {label && (
        <label
          htmlFor={inputId}
          className={`absolute left-0 transition-all duration-200 z-10 pointer-events-none
            ${showFloating
              ? `-top-2 text-base ${className.includes("text-(--blue)")
                ? "text-(--blue)"
                : "text-(--white-custom)"
              }`
              : `top-3  xl:top-5 ${className.includes("text-(--blue)")
                ? "text-(--blue)"
                : "text-(--white-custom)"
              } text-base`
            }
          `}
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        {...props}
        value={value ?? internalValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`${baseInputClass} ${className} ${label ? "pt-5" : ""
          }`}
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
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState("");
  const textAreaId =
    id ||
    (label
      ? `textarea-${label.replace(/\s+/g, "-").toLowerCase()}`
      : undefined);
  const showFloating = isFocused || Boolean(value ?? internalValue);

  const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(true);
    props.onFocus?.(e);
  };
  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false);
    props.onBlur?.(e);
  };
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (value === undefined) setInternalValue(e.target.value);
    onChange?.(e);
  };

  const borderClass = className.includes("text-(--blue)")
    ? "border-blue-custom"
    : "border-white-custom";

  return (
    <div className="relative w-full">
      {label && (
        <label
          htmlFor={textAreaId}
          className={`absolute left-0 transition-all duration-200 z-10 pointer-events-none
            ${showFloating
              ? `-top-3 text-base ${className.includes("text-(--blue)")
                ? "text-(--blue)"
                : "text-(--white-custom)"
              }`
              : `top-3 xl:top-5 ${className.includes("text-(--blue)")
                ? "text-(--blue)"
                : "text-(--white-custom)"
              } text-base`
            }
          `}
        >
          {label}
        </label>
      )}
      <textarea
        id={textAreaId}
        {...props}
        value={value ?? internalValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`${baseTextAreaClass} border-b ${borderClass} ${className} ${label ? "pt-5" : ""}`}
        autoComplete={props.autoComplete || "off"}
      />
    </div>
  );
}
