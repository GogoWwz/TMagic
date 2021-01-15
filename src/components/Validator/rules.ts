type RuleFn = (value: string) => boolean
type RuleLimitFn = (value: string, limit: number) => boolean

interface RulesProps {
  isEmpty: RuleFn,
  isNum: RuleFn,
  isAboveNum: RuleLimitFn,
  isAboveLen: RuleLimitFn
}

const _:RulesProps = {
  isEmpty: value => {
    return value.length > 0
  },
  isNum: value => {
    return /^[0-9]*$/.test(value)
  },
  isAboveNum: (value, limit) => {
    if(!value) return true
    return !isNaN(Number(value)) && Number(value) > limit
  },
  isAboveLen: (value, limit) => {
    if(!value) return true
    return value.length > limit
  }
}

export default _