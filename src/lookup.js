/**
 * loopup 函数
 * dataObj = {
 *     a: {
 *          b: {  
 *              c: 100     
 *             }    
 *      }
 * }
 * 在dataobj中  寻找连续点符号得keyName属性
 * lookup(dataObj, 'a.b.c')  返回100
 */

export default function lookup(dataObj, keyName){
    console.log(dataObj, keyName)
    var temp = dataObj
    if(keyName.indexOf('.') !== -1 && keyName !== '.'){
        var keyList = keyName.split('.')
        for (let i = 0; i < keyList.length; i++) {
           temp = temp[keyList[i]]
        }
        return temp
    }
    return dataObj[keyName]

}