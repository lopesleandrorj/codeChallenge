import { question } from '../enum/question.js'
import Rover from '../classes/Rover.js'
import { submitQuestion, logInfo } from '../utils/index.js';
import { validateName, validateInstructions, validatePlateau, validateInteger, validateLanding } from '../validation/index.js';


const valid = {
    numOfRovers: null,
    rovers: [],
    plateau: null,
}

export async function getInputData() {
    try {

        // Ask how many Rovers user wants to work with.
        if (!valid.numOfRovers) {
            const inputNumOfRovers = await submitQuestion(question.numberOfRovers)
            valid.numOfRovers = await validateInteger(inputNumOfRovers)
        }
        
        // Ask each Rover's name and instantiate a Rover object for each one.
        if (!(valid.rovers.length === valid.numOfRovers)) {
            for (let index = 1; index < valid.numOfRovers + 1; index++) {
                
                if (index > valid.rovers.length) {
                    const inputName = await submitQuestion(await question.enterRoverName(index))
                    await validateName(inputName)

                    const rover = new Rover(inputName)
                    valid.rovers.push(rover)
                }
            }
        }
        
        // Ask for Plateau value
        if (!valid.plateau) {
            const inputPlateau = await submitQuestion(question.enterPlateau)
            valid.plateau = await validatePlateau(inputPlateau)
        }

        // Loop through all rovers added and ask for landing and instruction information.
        for (let index in valid.rovers) {
           const rover = valid.rovers[index]

           if (!rover._direction || !rover._currentPosition || !rover._plateau) {
                const landing = await submitQuestion(question.enterRoverLanding(rover._name))
                rover.landing = await validateLanding(landing, valid.plateau)
           }

           if (!rover._instructions) {
                const instructions = await submitQuestion(question.enterRoverInstructions(rover._name))
                rover.instructions = await validateInstructions(instructions)
           }
        }

        return valid.rovers

    } catch(e) {
        // In case of errors, show error message and restart from the point where it failed.
        logInfo(e.message)
        return await getInputData()
    }  
}