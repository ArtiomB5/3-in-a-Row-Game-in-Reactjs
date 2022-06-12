import {validMovesCheck} from "./validMovesCheck";

test('Should check mov. Move from 0 to 1 - expected TRUE', () => {
    expect(validMovesCheck(0, 1)).toEqual(true);
});
test('Should check mov. Move from 0 to 9 - expected FALSE', () => {
    expect(validMovesCheck(0, 9)).toEqual(false);
});
test('Should check mov. Move from 0 to 8 - expected TRUE', () => {
    expect(validMovesCheck(0, 8)).toEqual(true);
});
test('Should check mov. Move from 7 to 6 - expected TRUE', () => {
    expect(validMovesCheck(7, 6)).toEqual(true);
});
test('Should check mov. Move from 7 to 15 - expected TRUE', () => {
    expect(validMovesCheck(7, 15)).toEqual(true);
});
test('Should check mov. Move from 7 to 14 - expected FALSE', () => {
    expect(validMovesCheck(7, 14)).toEqual(false);
});
test('Should check mov. Move from 8 to 0 - expected TRUE', () => {
    expect(validMovesCheck(8, 0)).toEqual(true);
});
test('Should check mov. Move from 8 to 9 - expected TRUE', () => {
    expect(validMovesCheck(8, 9)).toEqual(true);
});
test('Should check mov. Move from 8 to 16 - expected TRUE', () => {
    expect(validMovesCheck(8, 16)).toEqual(true);
});
test('Should check mov. Move from 8 to 7 - expected FALSE', () => {
    expect(validMovesCheck(8, 7)).toEqual(false);
});
test('Should check mov. Move from 15 to 7 - expected TRUE', () => {
    expect(validMovesCheck(15, 7)).toEqual(true);
});
test('Should check mov. Move from 15 to 14 - expected TRUE', () => {
    expect(validMovesCheck(15, 14)).toEqual(true);
});
test('Should check mov. Move from 15 to 23 - expected TRUE', () => {
    expect(validMovesCheck(15, 23)).toEqual(true);
});
test('Should check mov. Move from 15 to 6 - expected FALSE', () => {
    expect(validMovesCheck(15, 6)).toEqual(false);
});