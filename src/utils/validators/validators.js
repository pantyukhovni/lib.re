

export const requiredField = value =>{
    if(value) {
        return undefined
    }
    return "Обязательное поле не заполено"
}

export const maxLenghtCreator = maxLength=>{
    return(value)=>{
        if(value && value.length > maxLength){
            return `Максимальная длина поля ${maxLength} символов`
        }
        return undefined
    }
}

export const number = value =>
    value && isNaN(Number(value)) ? 'Должны быть только цифры' : undefined


