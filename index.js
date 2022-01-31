import { getInputData, calculateRoverPosition } from './src/functions/index.js'
import { logInfo } from './src/utils/index.js'

const startApp = async () => {
    logInfo(`\nWelcome to NASA's Rover Application! \n`)
  
    logInfo('Input:')
    logInfo('```')

    const rovers = await getInputData()

    logInfo('```')

    logInfo('Output:')
    logInfo('```')

    await calculateRoverPosition(rovers)
    
    logInfo('```')

    process.exit(0)
}

startApp();