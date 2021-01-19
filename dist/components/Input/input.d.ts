import React from 'react';
declare type NativeInputProps = Omit<React.InputHTMLAttributes<HTMLElement>, "size">;
export interface InputProps extends NativeInputProps {
    className?: string;
    size?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const Input: React.FC<InputProps>;
export default Input;
