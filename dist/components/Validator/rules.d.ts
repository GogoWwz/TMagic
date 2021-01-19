declare type RuleFn = (value: string) => boolean;
declare type RuleLimitFn = (value: string, limit: number) => boolean;
interface RulesProps {
    isEmpty: RuleFn;
    isNum: RuleFn;
    isAboveNum: RuleLimitFn;
    isAboveLen: RuleLimitFn;
}
declare const _: RulesProps;
export default _;
