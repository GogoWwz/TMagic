import React from 'react';
export declare enum ButtonType {
    Default = "default",
    Primary = "primary",
    Success = "success",
    Warning = "warning",
    Danger = "danger",
    Info = "info",
    Link = "link"
}
export declare enum ButtonHTMLType {
    Submit = "submit",
    Reset = "reset",
    Button = "button"
}
export declare enum ButtonSize {
    Large = "large",
    Normal = "normal",
    Small = "small"
}
declare type ButtonTypeLimit = "default" | "primary" | "success" | "warning" | "danger" | "link";
declare type ButtonSizeLimit = "large" | "normal" | "small";
export interface BaseButtonProps {
    type?: ButtonTypeLimit;
    size?: ButtonSizeLimit;
    className?: string;
    disabled?: boolean;
    href?: string;
}
export declare type NativeButtonProps = {
    htmlType?: ButtonHTMLType;
} & BaseButtonProps & Omit<React.AnchorHTMLAttributes<HTMLElement>, 'type'>;
declare type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonTypes = Partial<NativeButtonProps & AnchorButtonProps>;
declare const Button: React.FC<ButtonTypes>;
export default Button;
