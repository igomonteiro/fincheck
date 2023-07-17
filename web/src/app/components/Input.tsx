import { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Input(props: InputProps) {
  return (
    <div className="flex flex-col relative rounded-lg border border-gray-500 bg-white h-[52px] py-2 px-3 mb-4">
      <label htmlFor="input" className="text-xs text-gray-700">
        {props.label}
      </label>
      <input
        id="input"
        type="text"
        className="text-sm text-gray-800 outline-none flex-1"
        {...props}
      />
    </div>
  );
}
