import React from 'react';
declare type ButtonTypeLimit = "default" | "primary" | "success" | "warning" | "danger" | "link";
declare type ButtonSizeLimit = "large" | "normal" | "small";
declare type ButtonHtmlTypeLimit = "button" | "submit" | "reset";
export interface BaseButtonProps {
    type?: ButtonTypeLimit;
    size?: ButtonSizeLimit;
    className?: string;
    disabled?: boolean;
    href?: string;
}
export declare type NativeButtonProps = {
    htmlType?: ButtonHtmlTypeLimit;
} & BaseButtonProps & Omit<React.AnchorHTMLAttributes<HTMLElement>, 'type'>;
declare type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonTypes = Partial<NativeButtonProps & AnchorButtonProps>;
declare const Button: React.FC<ButtonTypes>;
export default Button;
