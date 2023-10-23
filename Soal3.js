const printTriangleWithNumber = (num) => {
  
    for (let i = num; i >= 1; i--) {
      let row = '';
      for (let j = 1; j <= i; j++) {
        row += j + ' ';
      }
     console.log(row);
    }
    if (typeof num !== 'number') {
      return 'Parameter harus angka!';
    }
  };
  
  console.log(printTriangleWithNumber(4));