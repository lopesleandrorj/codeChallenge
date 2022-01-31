import { question } from '../../src/enum/question.js'

test('it should return all questions properly', async () => {
    await expect(question.numberOfRovers).toStrictEqual('How many Rovers would you like to work with? ')
    await expect(await question.enterRoverName('1')).toStrictEqual('Name the 1st Rover: ')
    await expect(question.enterPlateau).toStrictEqual('Plateau: ')
    await expect(question.enterRoverLanding('Rover1')).toStrictEqual('Rover1 Landing: ')
    await expect(question.enterRoverInstructions('Rover1')).toStrictEqual('Rover1 Instructions: ')
})