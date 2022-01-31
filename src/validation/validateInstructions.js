import { error } from '../enum/error.js' 

export async function validateInstructions (str) {
    if (!str.match(/(^[LRM]*$)/g)) {
        throw new Error (error.invalidInstruction)      
    }

    return str.trim()
}