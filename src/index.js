module.exports = function solveSudoku(matrix) {
  function completeMatrix(matrix) {
    for (let horizontal = 0; horizontal < 9; horizontal++) {
        for (let vertical = 0; vertical < 9; vertical++) {
            if (matrix[horizontal][vertical] === 0) {
                for (let value = 1; value <= 9; value++) {
                    if (noReapeatVerticalAndHorizontal(matrix, value, vertical, horizontal)) {
                        if (noRepeatContainer(matrix, value, horizontal, vertical)) {
                            matrix[horizontal][vertical] = value;
                            if (completeMatrix(matrix)) {
                                return true;
                            } else {
                                matrix[horizontal][vertical] = 0;
                            }
                        }
                    }
                    
                }
                return false; 
            }
        }
    }
    return true;
}
completeMatrix(matrix);

function noReapeatVerticalAndHorizontal(matrix, value, vertical, horizontal) {
    for (let position = 0; position < 9; position++) {
        if (matrix[position][vertical] === value) { return false; };
        if (matrix[horizontal][position] === value) { return false; };
    }
    return true;
}

function noRepeatContainer(matrix, value, horizontal, vertical) {
    for (let position = 0; position < matrix.length; position++) {
        const horizontalContainer = 3 * Math.floor(horizontal / 3) + Math.floor(position / 3);
        const verticalContainer = 3 * Math.floor(vertical / 3) + position % 3;
        if (matrix[horizontalContainer][verticalContainer] === value) { return false; };
    }
    return true;
}

return matrix;
}
