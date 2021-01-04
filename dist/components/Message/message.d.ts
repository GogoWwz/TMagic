export declare type MessageTypes = 'primary' | 'warning' | 'success' | 'danger';
export interface MessageProps {
    className?: string;
    content?: string;
    type?: MessageTypes;
}
declare const Message: {
    info: () => void;
    success: () => void;
    warning: () => void;
    danger: () => void;
};
export default Message;
