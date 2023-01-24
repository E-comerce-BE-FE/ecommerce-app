import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

const Button: FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <div className="flex justify-center">
      <div>
        <button className="btn btn-wide tracking-wider " {...props}>
          {label}
        </button>
      </div>
    </div>
  );
};

export default Button;