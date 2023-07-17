import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function Button(props: ButtonProps) {
  return (
    <button
      className="h-[54px] py-0 px-6 bg-teal-900 rounded-2xl mt-6 text-white font-semibold"
      {...props}
    >
      {props.children}
    </button>
  );
}
