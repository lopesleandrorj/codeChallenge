
import { transformIntoArray, transformIntoOrdinalNumber } from '../../src/utils/index.js'
 
test('it should transform Plateau data into an array', async () => {
    await expect(transformIntoArray('1 1')).resolves.toStrictEqual(['1', '1'])
})

test('it should transform Landing data into an array', async () => {
    await expect(transformIntoArray('1 1 N')).resolves.toStrictEqual(['1', '1', 'N'])
})

test('it should transform cardinal number into ordinal', async () => {
    await expect(transformIntoOrdinalNumber('1')).resolves.toStrictEqual('1st')
    await expect(transformIntoOrdinalNumber('2')).resolves.toStrictEqual('2nd')
    await expect(transformIntoOrdinalNumber('3')).resolves.toStrictEqual('3rd')
    await expect(transformIntoOrdinalNumber('4')).resolves.toStrictEqual('4th')
})