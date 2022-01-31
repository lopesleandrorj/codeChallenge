import { logInfo } from "../utils/index.js"

export async function calculateRoverPosition (rovers) {
    
    const output = []

    for (let index in rovers) {
        try {
            rovers[index].startProcess()
            output.push(`${rovers[index]._name}: ${rovers[index].position}`) 
        } catch(e) {
            console.log(e.message)
        }
    }

    output.map(row => logInfo(row))

}