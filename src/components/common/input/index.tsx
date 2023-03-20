import React from "react";

interface AdminInputProps {
  value: string;
  setDataHandler: (target: string, value: string) => void;
  title: string;
  target: string;
  containerClass?: string;
  inputClass?: string;
  placeholder: string;
  error: string | undefined;
}

const AdminInput: React.FC<AdminInputProps> = ({
  value,
  setDataHandler,
  target,
  title,
  containerClass,
  inputClass,
  placeholder,
  error,
}) => {
  return (
    <div className={`${containerClass} flex flex-col items-start gap-1`}>
      <label className="text-lg font-medium">{title}</label>
      <input
        value={value}
        onChange={(e) => setDataHandler(target, e.target.value)}
        className={`${inputClass} ${
          error ? "border-red-700/70" : ""
        } placeholder:text-sm p-2 border-2 focus:border-blue-200 duration-200 rounded-md outline-none w-full`}
        placeholder={placeholder}
        type="text"
      />
      {error && (
        <span className="text-sm text-red-700 font-semibold">{error}</span>
      )}
    </div>
  );
};

export default AdminInput;
