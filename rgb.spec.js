import {rgbToHexColor} from './rgb.js'
import { expect } from 'chai'

describe('rgbToHexColor', () => {

    it('should return undefined if red value is invalid', () => {
        //arrange
        //act
        const nonNumericRedValue = rgbToHexColor('123', 0, 0)
        const negativeRedValueResult = rgbToHexColor(-123, 0, 0)
        const largerRedValue = rgbToHexColor(999, 0, 0)
        //assert
        expect(nonNumericRedValue).to.be.undefined
        expect(negativeRedValueResult).to.be.undefined
        expect(largerRedValue).to.be.undefined
    });

    it('should return undefined if green value is invalid', () => {
        //arrange
        //act
        const nonNumericGreenValue = rgbToHexColor(0, '123', 0)
        const negativeGreenValueResult = rgbToHexColor(-0, -123, 0)
        const largerGreenValue = rgbToHexColor(0, 999, 0)
        //assert
        expect(nonNumericGreenValue).to.be.undefined
        expect(negativeGreenValueResult).to.be.undefined
        expect(largerGreenValue).to.be.undefined
    });

    it('should return undefined if blue value is invalid', () => {
        //arrange
        //act
        const nonNumericBlueValue = rgbToHexColor(0, 0, '123')
        const negativeBlueValueResult = rgbToHexColor(0, 0, -123)
        const largerBlueValue = rgbToHexColor(0, 0, 999)
        //assert
        expect(nonNumericBlueValue).to.be.undefined
        expect(negativeBlueValueResult).to.be.undefined
        expect(largerBlueValue).to.be.undefined
    });

    it('should return correct hex value if correct rgb is given', () => {
        //arrange
        const redValue = 223;
        const greenValue = 123;
        const blueValue = 12;
        //act
        const result = rgbToHexColor(redValue, greenValue, blueValue)
        //assert
        expect(result).to.equals('#DF7B0C')
    });

    it('should return correct hex value if max rgb is given', () => {
        //arrange
        const redValue = 255;
        const greenValue = 255;
        const blueValue = 255;
        //act
        const result = rgbToHexColor(redValue, greenValue, blueValue)
        //assert
        expect(result).to.equals('#FFFFFF')
    });

    it('should return correct hex value if min rgb is given', () => {
        //arrange
        const redValue = 0;
        const greenValue = 0;
        const blueValue = 0;
        //act
        const result = rgbToHexColor(redValue, greenValue, blueValue)
        //assert
        expect(result).to.equals('#000000')
    });

});