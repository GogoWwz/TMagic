type RuleFn = (value: string) => boolean
type RuleLimitFn = (value: string, limit: number) => boolean

interface RulesProps {
  isNum: RuleFn,
  isAboveNum: RuleLimitFn,
  isAboveLen: RuleLimitFn
}

const _:RulesProps = {
  isNum: value => {
    return /^[0-9]*$/.test(value)
  },
  isAboveNum: (value, limit) => {
    return !isNaN(Number(value)) && Number(value) > limit
  },
  isAboveLen: (value, limit) => {
    return value.length > limit
  }
}

export default _