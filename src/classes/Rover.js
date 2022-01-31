import { move, direction, instruction } from "../enum/movement.js"

export default class Rover {

    constructor(name) {
        this._name = name
    }
    
    get position () {
        return `${this._currentPosition[0]} ${this._currentPosition[1]} ${this._direction}`
    }

    set landing(landing) {
        this._currentPosition = landing.landingCoordinates
        this._direction = landing.direction
        this._plateau = landing.plateau
    }

    set instructions(instructions) {
        this._instructions = instructions
    }


    rotateRover (side) {
        const currentIndex = direction.indexOf(this._direction)

        if (currentIndex === 3 && side === 1) {
            this._direction = direction[0]
        } else if (currentIndex === 0 && side === -1) {
            this._direction = direction[3]
        } else {
            this._direction = direction[currentIndex + side]
        }

    }

    moveRover () {
        const coordinates = move[this._direction]

        for(let index in coordinates) {
            const possibleMove = this._currentPosition[index] + coordinates[index]
                     
            if (possibleMove >= 0 && possibleMove <= this._plateau[index]) {
                this._currentPosition[index] = possibleMove
            }
        }
    }

    startProcess () {

        for (let index in this._instructions) {
            if (this._instructions[index] === instruction.LEFT) {
                this.rotateRover(-1)
            } else if (this._instructions[index] === instruction.RIGHT) {
                this.rotateRover(1)
            } else if (this._instructions[index] === instruction.MOVE) {
                this.moveRover()
            }
        }
    }
}