import { type InputHTMLAttributes, type ReactNode } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;

  leftIcon?: ReactNode;
  rightIcon?: ReactNode;

  error?: boolean;
  errorText?: string;
  success?: boolean;
  countainerStyle?: string;
  labelStyle?:string;



  validate?: (value: string) => boolean | Promise<boolean>;
}
