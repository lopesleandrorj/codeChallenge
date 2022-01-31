import { error } from '../enum/error.js' 

export async function validatePlateau (str) {
    if (str.match(/(^[1-9]\d*) ([1-9]\d*$)/g)) {

        return str.trim()
    } else {
        throw new Error (error.invalidPlateau)
    }
}