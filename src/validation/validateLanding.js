import { transformIntoArray } from '../utils/index.js'
import { error } from '../enum/error.js' 


export async function validateLanding (landing, plateau) {

    const coordLanding = await transformIntoArray(landing)
    const coordPlateau = await transformIntoArray(plateau)


    if (!landing.match(/(^[0-9]\d*) ([0-9]\d*) ([NSEW]$)/g)) {
        throw new Error (error.invalidLandingFormat)
    } else if ((parseInt(coordLanding[0]) > parseInt(coordPlateau[0])) || (parseInt(coordLanding[1]) > parseInt(coordPlateau[1]))) {
        throw new Error (error.invalidLandingCoordinates)
    }

    return {
        plateau: [parseInt(coordPlateau[0]), parseInt(coordPlateau[1])],
        landingCoordinates: [parseInt(coordLanding[0]), parseInt(coordLanding[1])],
        direction: coordLanding[2],
        
    }
}