import { ruleData } from '../data/ruleData'
import type { Rule } from '../types/RuleType'

const getRuleData = (): Pick<Rule, 'tag' | 'title'>[] => {
    return ruleData.map(({ tag, title }) => ({
        tag,
        title,
    }))
}

const getRuleByTag = (tag: string): Rule => {
    return ruleData.find((item: Rule) => item.tag === tag) as Rule
}

export { getRuleData, getRuleByTag }
