export declare type MessageTypes = 'primary' | 'warning' | 'success' | 'danger';
export interface MessageProps {
    className?: string;
    content?: string;
    type?: MessageTypes;
}
declare const Message: {
    Info: (msg?: string) => void;
    Success: (msg?: string) => void;
    Warning: (msg?: string) => void;
    Danger: (msg?: string) => void;
};
export default Message;
