import Scanner from './Scanner'
import nestTokens from './nestTokens'
/**
 * 将模板字符串变为数组
 */
export default function createTokens(templateStr) {
    var tokens = []
    var scanner = new Scanner(templateStr)
    while (!scanner.eos()) {
        var word;
        word = scanner.scanUntil('{{')
        word && tokens.push(['text', word])
        scanner.scan('{{')
        word = scanner.scanUntil('}}')
        if (word[0] === '#') {
            word && tokens.push(['#', word.substring(1)])
        } else if (word[0] === '/') {
            word && tokens.push(['/', word.substring(1)])
        } else {
            word && tokens.push(['name', word])
        }
        scanner.scan('}}')
    }
    // 判断是否在标签内，标签内空格不能去掉，标签外部空格能去掉

    return nestTokens(tokens)
}