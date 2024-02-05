import { isSymmetric } from './symmetry.js'
import { expect } from 'chai'

describe('isSymmetric', () =>{
    it('if given an empty array should return true', () =>{
        //arange
        const inputArray = [];
        //act
        const result = isSymmetric(inputArray);
        //assert
        expect(result).to.be.true

    });

    it('if non-array value is given return false', () =>{
        //arange

        //act
        const nanResult = isSymmetric(NaN)
        const undefinedResult = isSymmetric(undefined)
        const objectResult = isSymmetric({})
        const nullRequest = isSymmetric(null)
        const stringResult = isSymmetric('string value')
        const numericResult = isSymmetric(123)

        //assert
        expect(nanResult).to.be.false
        expect(undefinedResult).to.be.false
        expect(objectResult).to.be.false
        expect(nullRequest).to.be.false
        expect(stringResult).to.be.false
        expect(numericResult).to.be.false

    });

    it('should return false if a non-symmetric array is given', () =>{
        //arange
        const inputArray = [1, 2, 3, 4, 3, 2, 2]
        //act
        const result = isSymmetric(inputArray)
        //assert
        expect(result).to.be.false

    });

    it('should return true if a symmetric array is given', () =>{
        //arange
        const inputArray = [3, 2, 1, 2, 3]
        //act
        const result = isSymmetric(inputArray)
        //assert
        expect(result).to.be.true

    });

    it('should return false for symmetric lookalike values', () =>{
        //arange
        const inputArray = ['1', 2, 3, 3, 2, 1]
        //act
        const result = isSymmetric(inputArray)
        //assert
        expect(result).to.be.false

    });

});