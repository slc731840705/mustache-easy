/**
 * Scanner类（扫描器）
 */
export default class Scanner {
    constructor(templateStr){
        console.log(templateStr)
        this.templateStr = templateStr
        // 当前位置
        this.post = 0
        // 指针算法,走过的str剩余部分（尾巴的str）
        this.tail = templateStr
    }
    // 路过指定内容
    scan(tag){
        if(this.tail.indexOf(tag) === 0 && !this.eos()){
            this.post += tag.length
            this.tail = this.templateStr.substring(this.post)
        }
    }
    // 扫描到指定内容结束，并且返回路过的str
    scanUntil(topTag){
        // 记录起始位置
        const post_back = this.post
        while (this.tail.indexOf(topTag) !== 0 && !this.eos()) {
            this.post ++
            this.tail = this.templateStr.substr(this.post) 
        }
        return this.templateStr.substring(post_back,this.post)
    }
    // end of string判断指针是否走到了最后
    eos(){
        return this.post >= this.templateStr.length
    }
}
