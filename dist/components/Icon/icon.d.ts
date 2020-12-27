import React from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
export interface IconProps extends Omit<FontAwesomeIconProps, 'size'> {
    size?: number | string;
}
declare const Icon: React.FC<IconProps>;
export default Icon;
