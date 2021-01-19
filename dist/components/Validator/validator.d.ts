import React from 'react';
interface IValidator {
    rule?: ((value: string) => boolean) | RegExp;
    message?: string;
    value?: number;
}
declare type ValidatorExecutor = IValidator | boolean;
export interface ValidatorProps {
    validates: {
        required?: ValidatorExecutor;
        num?: ValidatorExecutor;
        min?: ValidatorExecutor;
        custom?: IValidator;
    };
    classNames?: string;
}
declare const Validator: React.FC<ValidatorProps>;
export default Validator;
