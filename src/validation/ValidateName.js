import { error } from '../enum/error.js'

export async function validateName(str) {
    if (!str.trim().length) {
        throw new Error(error.invalidName)
    }

    return str
}