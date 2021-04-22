/**
 * renderTemplate函数，根据定义得data数据格式将tokens数组，生成并且返回真实dom字符串
 */
import lookup from './lookup'
function parseTemplate(token,data){
    var resultStr = ''
    var v = data[token[1]]
    if(v === true || v === false){
        if(v){
            resultStr += renderTemplate(token[2], data)
        }
    }else{
        for (let i = 0; i < v.length; i++) {
            resultStr += renderTemplate(token[2],{...v[i],'.': v[i]})
        }
    }
    return resultStr
}
function renderTemplate(tokens, data){
    let domStr = ''
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i]
        if(token[0] === 'text'){
            domStr += token[1]
        }else if(token[0] === 'name'){
            domStr += lookup(data,token[1])
        }else if(token[0] === '#'){
            domStr += parseTemplate(token, data)
        }   
    }
    return domStr
}
export default renderTemplate