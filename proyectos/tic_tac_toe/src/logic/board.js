import { Winner_Combos } from "../constantes"

const checkWinner = (boardToCheck) => {
    for (const combo of Winner_Combos) {
        const [a, b, c] = combo
        if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) { return boardToCheck[a] }
    }
    return null
}

const checkEmpate = (newBoard) => {
    return newBoard.every((square) => square !== null)
}
export { checkWinner, checkEmpate }