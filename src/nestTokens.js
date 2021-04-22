/**
 * 根据生成的简易tokens，生成真是tokens（把#-/之间的数组，放到#那一项的所以为2里面）
 * [                                 [      
 *     '#','xxx',                       '#','xxx', ['text', 'abc'] 
*      'text', 'abc'   ====>            '/', 'xxx'   
 *     '/', 'xxx'
 * ]                                  ]  
 */
/**
 * 
 * @param { tokens } tokens 
 * @returns 
 */
export default function nestTokens(tokens){
    var resultTokens = []
    // 2创建一个栈结构,存放tokens数组
    var sections = []
    // 3 收集器，指向同一个数组（引用类型，指针相同）
    var collector = resultTokens;
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        // 1利用栈思维，（先进后出，后进先出）先找到对应的#和/一对数据tokens
        switch (token[0]) {
            case '#':
                collector.push(token)
                sections.push(token)
                collector = token[2] = []
                break;
            case '/': 
                // pop方法返回弹出的这一项
               var section_pop = sections.pop()
               // 当里层token都push到了taken【2】里面之后，需要重新改变收集器为外层
               collector = sections.length > 0 ? sections[sections.length - 1][2] : resultTokens  
                break
            default: 
                collector.push(token)
        }
    }
    console.log(resultTokens)
    return resultTokens
}