import { createCalculator } from './calculator.js'
import { expect } from 'chai'

describe('createCalculator', () => {
    it('should return 0 if no operation is executed on the calculator', () => {
        //arrange
        const calculator = createCalculator()
        //act
        const result = calculator.get()
        //assert
        expect(result).to.equals(0);
    });

    it('should return a negative number if only substract operations are executed on the calculator, with positive numbers', () => {
        //arrange
        const calculator = createCalculator()
        //act
        calculator.subtract(3)
        calculator.subtract(3)
        calculator.subtract(3)
        calculator.subtract(10)
        const result = calculator.get()
        //assert
        expect(result).to.equals(-19);
    });

    it('should return a positive number if only add operations are executed on the calculator, with positive numbers', () => {
        //arrange
        const calculator = createCalculator()
        //act
        calculator.add(1)
        calculator.add(2)
        calculator.add(3)
        calculator.add(4)
        const result = calculator.get()
        //assert
        expect(result).to.equals(10);
    });

    it('should handle number as string', () => {
        //arrange
        const calculator = createCalculator()
        //act
        calculator.add('1')
        calculator.add('2')
        calculator.add('3')
        calculator.add('4')
        calculator.subtract('0')
        const result = calculator.get()
        //assert
        expect(result).to.equals(10);
    });

    it('should handle a mix of operations', () => {
        //arrange
        const calculator = createCalculator()
        //act
        calculator.add(2)
        calculator.add(2)
        calculator.add(100)
        calculator.add(-4)
        calculator.subtract(-100)
        calculator.subtract(200)
        const result = calculator.get()
        //assert
        expect(result).to.equals(0);
    });

});