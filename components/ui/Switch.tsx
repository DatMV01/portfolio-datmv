"use client";

import { ReactNode, useState } from "react";

export type SwitchSize = "sm" | "md" | "lg" | "xl" | "2xl";

interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  size?: SwitchSize;
  className?: string;
}

const Switch = ({
  checked: controlled,
  defaultChecked = false,
  onChange,
  disabled = false,
  loading = false,
  icon = undefined,
  size = "md",
  className = "",
}: SwitchProps) => {
  const [internal, setInternal] = useState(defaultChecked);
  const checked = controlled !== undefined ? controlled : internal;

  const toggle = () => {
    if (disabled || loading) return;
    const next = !checked;
    if (controlled === undefined) setInternal(next);
    onChange?.(next);
  };

  const sizeTrack = {
    sm: "w-8 h-4",
    md: "w-10 h-5",
    lg: "w-12 h-6",
    xl: "w-14 h-7",
    "2xl": "w-16 h-8",
  }[size];

  const sizeKnob = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
    xl: "w-6 h-6",
    "2xl": "w-7 h-7",
  }[size];

  const translateChecked = {
    sm: "translate-x-4",
    md: "translate-x-5",
    lg: "translate-x-6",
    xl: "translate-x-7",
    "2xl": "translate-x-8",
  }[size];

  return (
    <button
      onClick={toggle}
      disabled={disabled}
      className={`relative inline-flex items-center gap-1 rounded-full transition-colors 
        ${checked ? "bg-green-300" : "bg-gray-300"}
        ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}
        ${sizeTrack} p-0.5 ${className}`}
    >
      <span
        className={`bg-white rounded-full shadow transform transition-transform duration-300
          ${sizeKnob} ${checked ? translateChecked : "translate-x-0"}
          flex items-center justify-center
        `}
      >
        {loading && (
          <svg className="animate-spin h-full w-full p-1" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        )}
        {!loading && icon}
      </span>
    </button>
  );
};

export default Switch;
/* USAGE:

<Switch defaultChecked onChange={(v) => console.log(v)} />
<Switch checked={state} onChange={setState} size="lg" />
<Switch disabled />
<Switch loading size="lg" />
*/
