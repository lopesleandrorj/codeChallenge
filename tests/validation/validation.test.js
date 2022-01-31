import { validateName, validatePlateau, validateLanding, validateInteger, validateInstructions } from '../../src/validation'

test('it should validate Rover names', async () => {
    await expect(validateName('Rover1')).resolves.toStrictEqual('Rover1')

    try {
        await validateName(' ')
    } catch(e) {
        expect(e.message).toStrictEqual('Error: Rover name cannot be empty or space characters only.')
    }
})

test('it should validate Plateau value', async () => {
    await expect(validatePlateau('5 5')).resolves.toStrictEqual('5 5')

    try {
        await validatePlateau('anywrongvalue')
    } catch (e) {
        expect(e.message).toStrictEqual('Error: Plateau is not on the required format.')
    }
})

test('it should validate Landing value', async () => {
    await expect(validateLanding('1 2 N', '5 5')).resolves.toStrictEqual({ landingCoordinates: [1, 2], direction: 'N', plateau: [5, 5] })

    try {
        await validateLanding('A 2 N', '5 5')
    } catch (e) {
        expect(e.message).toStrictEqual('Error: Landing information is not on the required format.')
    }

    try {
        await validateLanding('1 E N', '5 5')
    } catch (e) {
        expect(e.message).toStrictEqual('Error: Landing information is not on the required format.')
    }

    try {
        await validateLanding('1 2 Z', '5 5')
    } catch (e) {
        expect(e.message).toStrictEqual('Error: Landing information is not on the required format.')
    }

    try {
        await validateLanding('6 6 N', '5 5')
    } catch (e) {
        expect(e.message).toStrictEqual('Error: Landing coordinates cannot be higher than Plateau.')
    }
})

test('it should validate any integer positive values', async () => {
    await expect(validateInteger('5')).resolves.toStrictEqual(5)

    try {
        await validateInteger('')
    } catch (e) {
        expect(e.message).toStrictEqual('Error: Input must be an integer.')
    }
})

test('it should validate any instruction', async () => {
    await expect(validateInstructions('LRMLMLMLMM')).resolves.toStrictEqual('LRMLMLMLMM')

    try {
        await validateInstructions('anyOtherString')
    } catch (e) {
        expect(e.message).toStrictEqual('Error: Instructions provided are not on the required format.')
    }
})
