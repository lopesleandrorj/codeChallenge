import Rover from '../../src/classes/Rover.js'

test('it should instantiate a Rover class', () => {
    const rover = new Rover('Rover1')

    expect(rover._name).toBe('Rover1')
})

test('it should add Landing & Plateau information to class', () => {
    const rover = new Rover('Rover1')
    rover.landing = {
        landingCoordinates: [0, 0],
        direction: 'N',
        plateau: [1, 1]
    }
    expect(rover._currentPosition).toStrictEqual([0, 0])
    expect(rover._direction).toBe('N')
})

test('it should add instructions to class', () => {
    const rover = new Rover('Rover1')
    rover.instructions = 'LMLMLMLMM'
    expect(rover._instructions).toBe('LMLMLMLMM')
})

test('it should rotate Rover in all directions', () => {
    const rover = new Rover('Rover1')
    rover.landing = {
        landingCoordinates: [1, 2],
        direction: 'N',
        plateau: [1, 1]
    }
    rover.instructions = 'LMLMLMLMM'

    rover.rotateRover(-1)
    expect(rover._direction).toBe('W')

    rover.rotateRover(-1)
    expect(rover._direction).toBe('S')

    rover.rotateRover(-1)
    expect(rover._direction).toBe('E')

    rover.rotateRover(-1)
    expect(rover._direction).toBe('N')

    rover.rotateRover(1)
    expect(rover._direction).toBe('E')

    rover.rotateRover(1)
    expect(rover._direction).toBe('S')

    rover.rotateRover(1)
    expect(rover._direction).toBe('W')

    rover.rotateRover(1)
    expect(rover._direction).toBe('N')
})

test('it should move the rover', () => {
    const rover = new Rover('Rover1')
    rover.landing = {
        landingCoordinates: [1, 2],
        direction: 'N',
        plateau: [5, 5]
    }

    rover.moveRover()

    expect(rover.position).toBe('1 3 N')
})

test('it should process Rover position', () => {
    const rover = new Rover('Rover1')
    rover.landing = {
        landingCoordinates: [1, 2],
        direction: 'N',
        plateau: [5, 5]
    }
    rover.instructions = 'LMLMLMLMM'
    rover.startProcess()

    expect(rover.position).toBe('1 3 N')
})