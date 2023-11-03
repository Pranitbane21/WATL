// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

function createRightAngledNumberTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}

createRightAngledNumberTriangle(5);



// -------------------------------------------------------------------------------------------

// 5 
// 5 4 
// 5 4 3 
// 5 4 3 2 
// 5 4 3 2 1 

function printLeftAngledTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = n; j >= i; j--) {
            row += j + ' ';
        }
        console.log(row);
    }
}

printLeftAngledTriangle(5);



// -------------------------------------------------------------------------------------------

// 1 2 3 4 5 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 

function printInvertedRightAngledTriangle(n) {
    for (let i = n; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += j + ' ';
        }
        console.log(row);
    }
}

printInvertedRightAngledTriangle(5);