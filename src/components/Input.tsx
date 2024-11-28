import { twMerge } from "tailwind-merge";

interface Props {
  type: string;
  placeholder: string;
  className?: string;
  required?: boolean;
}

const Input = ({ type, placeholder, className, required }: Props) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={twMerge(
        "py-1.5 px-4 border border-px outline-none placeholder:text-lightText/50     focus-visible:border-darkOrange rounded-md hoverEffect",
        className
      )}
      required={required}
    />
  );
};

export default Input;
