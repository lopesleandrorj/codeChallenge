import { instruction, direction, move } from '../../src/enum/movement.js'

test('it should return all instructions properly', async () => {
    await expect(instruction.LEFT).toStrictEqual('L')
    await expect(instruction.RIGHT).toStrictEqual('R')
    await expect(instruction.MOVE).toStrictEqual('M')
})

test('it should return all directions properly', async () => {
    await expect(Array.isArray(direction)).toBe(true)
    await expect(direction[0]).toStrictEqual('W')
    await expect(direction[1]).toStrictEqual('N')
    await expect(direction[2]).toStrictEqual('E')
    await expect(direction[3]).toStrictEqual('S')
})

test('it should return values for each possible move', async () => {
    await expect(move.N).toStrictEqual([0, 1])
    await expect(move.S).toStrictEqual([0, -1])
    await expect(move.E).toStrictEqual([1, 0])
    await expect(move.W).toStrictEqual([-1, 0])

})
