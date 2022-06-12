export const validMovesCheck = (startPointId: number, endPointId: number) => {
    let validMoves: number[] = []
    if (startPointId === 0) {
        validMoves = [1, 8]
    } else if (startPointId === 7) {
        validMoves = [6, 15]
    } else if (startPointId >= 1 && startPointId <= 6) {
        validMoves = [startPointId + 1, startPointId - 1, startPointId + 8]
    } else if (startPointId === 8 || startPointId === 16 || startPointId === 24 || startPointId === 32 || startPointId === 40 || startPointId === 48) {
        validMoves = [startPointId + 1, startPointId - 8, startPointId + 8]
    } else if (startPointId === 15 || startPointId === 23 || startPointId === 31 || startPointId === 39 || startPointId === 47 || startPointId === 55) {
        validMoves = [startPointId - 1, startPointId - 8, startPointId + 8]
    } else if (startPointId === 56) {
        validMoves = [48, 57]
    } else if (startPointId === 63) {
        validMoves = [55, 62]
    } else if (startPointId >= 57 && startPointId <= 62) {
        validMoves = [startPointId - 1, startPointId + 1, startPointId - 8]
    } else {
        validMoves = [startPointId - 1, startPointId + 1, startPointId - 8, startPointId + 8]
    }
    return validMoves.includes(Number(endPointId))
}