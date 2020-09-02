import {getOptions} from 'loader-utils'
function textLoader(source){
    const options = getOptions(this)
    const replaceValue = options.replaceValue
    let result = source.replace(/\[name\]/,replaceValue)
    return `export const str = \`${result}\``
}

export default textLoader