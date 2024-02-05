import { sum } from './sum.js'
import { expect } from 'chai'

describe('The function sum', () => {
    it('should return 0 if an empty array is given', () =>{
        //arrange
        const inputArray = [];
        //act
        const result = sum(inputArray);
        //assert
        expect(result).to.equals(0);
    });

    it('should return the single element as a sum if a single a element array is given', () => {
        //arrange
        const inputArray = [19];
        //act
        const result = sum(inputArray);
        //assert
        expect(result).to.equals(19);
    })

    it('should return the total sum of an array if a multi value array is given', () => {
        //arrange
        const inputArray = [1, 5, 4];
        //act
        const result = sum(inputArray);
        //assert
        expect(result).to.equals(10);
    })
})