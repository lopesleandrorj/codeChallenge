import { transformIntoOrdinalNumber } from "../utils/index.js";

export const question = {
    numberOfRovers: 'How many Rovers would you like to work with? ',
    enterRoverName: async (value) => `Name the ${await transformIntoOrdinalNumber(value)} Rover: `,
    enterPlateau: 'Plateau: ',
    enterRoverLanding: (roverName) => `${roverName} Landing: `,
    enterRoverInstructions: (roverName) => `${roverName} Instructions: `
}