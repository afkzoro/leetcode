class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
         let rows = Array(9).fill().map(() => Array(9).fill(false));
    let cols = Array(9).fill().map(() => Array(9).fill(false));
    let boxes = Array(9).fill().map(() => Array(9).fill(false));

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const cellValue = board[i][j];
            
            if (cellValue === ".") {
                continue;
            }
            
            const num = Number(cellValue) - 1;
            
            // Calculate which 3x3 box we're in
            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            
            if (rows[i][num] || cols[j][num] || boxes[boxIndex][num]) {
                return false;
            }
            
            rows[i][num] = true;
            cols[j][num] = true;
            boxes[boxIndex][num] = true;
        }
    }
    return true;
    }
}
