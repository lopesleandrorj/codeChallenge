import { error } from '../enum/error.js'

export async function validateInteger(str) {
    for(let char in str) {  
        if (!str.charAt(char).match('[1-9]')) {
            throw new Error(error.invalidInteger)
        }
    }

    return parseInt(str)
}