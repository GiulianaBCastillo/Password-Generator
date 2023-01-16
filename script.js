const characterAmountRange = document.getElementByID ('characterAmountRange')
const characterAmountNumber = document.getElementByID ('characterAmountNumber')
const includeUppercaseElement = document.getElementById ('includeUppercase')
const includeNumbersElement = document.getElementById ('includeNumbers')
const includeSymbolsElement = document.getElementById ('includeSymbols')
const form = document.getElementById('passwordGeneratorForm')

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e=> {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
})

function generatePassword (characterAmount, includeUppercaseElement, includeNumbers, includeSymbols) {
    String.fromCharCode()
}

function arrayFromLowToHigh(low, high) {
    for (let i = low; i <= high; i++ )
}
function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}