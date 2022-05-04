let display = document.getElementById('display');
let bx1, bx2, bx3, bx4, bx5, bx6, bx7, bx8, bx9; 

bx1 = document.getElementById('row1A').value
bx2 = document.getElementById('row1B').value
bx3 = document.getElementById('row1C').value
bx4 = document.getElementById('row2A').value
bx5 = document.getElementById('row2B').value
bx6 = document.getElementById('row2C').value
bx7 = document.getElementById('row3A').value
bx8 = document.getElementById('row3B').value
bx9 = document.getElementById('row3C').value

if((bx1 == 'x' ||  bx1 == 'X') && (bx2 == 'x' || bx2 == 'X')
    && (bx3=='x' || bx3=='X'))