import Scanner from './Scanner'
import createTokens from './tokens'
import renderTemplate from './renderTemplate'
import lookup from './lookup'
window.SLC_Template = {
    render(templateStr, data) {
        var domStr = renderTemplate(createTokens(templateStr), data)
        return domStr
    }
    
}