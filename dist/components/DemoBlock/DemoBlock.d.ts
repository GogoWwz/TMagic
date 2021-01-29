import React from 'react';
import './index.scss';
declare type RoleTypes = "row";
export interface DemoBlockProps {
    role?: RoleTypes;
}
declare const DemoBlock: React.FC<DemoBlockProps>;
export default DemoBlock;
