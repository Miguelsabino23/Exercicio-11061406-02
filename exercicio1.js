const firstName = 'Miguel'
const secondName = 'Sabino'
// Concatenação
let fullName = firstName.concat(" " + secondName)
console.log(fullName)

fullName = firstName + " " + secondName
console.log(fullName)

fullName = `${firstName} ${secondName}`
console.log(fullName)

// Comprimento da string
const stringLength = (text) => {
    return text.length
}
console.log(stringLength(firstName))

// Texto maiúsculo 
const capitalizedText = (text) => {
    return text.toUpperCase()
}
console.log(capitalizedText(firstName))

// Texto minúsculo 
const tinyText = (text) => {
    return text.toLowerCase()
}
console.log(tinyText(firstName))

// Estrair substring
const extractSubstring = (text, indexOne, indexTwo) => {
    return text.substring(indexOne, indexTwo)
}
console.log(extractSubstring(firstName, 2, 5))

// Buscar caracter
const searchCharacter = (text, character, index) => {
    return text.indexOf(character, index)
}
console.log(searchCharacter(firstName, "a"))

// Repetir string
function repeatString (string, repeat) {
    return string.repeat(repeat)
}
console.log(repeatString(firstName, 2))

// Remove espaços em branco
function removeWhiteSpace(text) {
    return text.trim()
}
console.log(removeWhiteSpace("        firstName"))

// Substituir caracteres 
function replaceCharacters(text, modifiedText, modifiedTextTwo) {
    return text.replace(modifiedText, modifiedTextTwo)
}

console.log(replaceCharacters(firstName, "gu", "afsdgasdsadsad"))

// Divide string em array
const splitString = (text, value) => {
    return text.split(value)
}
console.log(splitString(firstName, ""));