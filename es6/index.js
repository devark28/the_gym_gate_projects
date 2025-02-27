/*
You are given a 5-day sales report as a JSON object.
Each day contains an array of 8 sales amounts.
Your task is to return an array of the most frequent sales amount for each day.
If there is a tie, return the amount that appears last in the day's array.

```js

const salesReport = {
"sales": [
[100, 150, 200, 200, 200, 180, 150, 120],  
[300, 320, 300, 300, 320, 320, 320, 350], 
[500, 500, 450, 450, 450, 450, 500, 500],  
[600, 750, 750, 800, 800, 800, 750, 600],  
[900, 950, 950, 900, 900, 1000, 1000, 1000] ]
};
//output : [200, 320, 500, 800, 1000]
```
*/

const extractReport = (sales) => {
  let frequencies = sales.map((day) => {
    return day.reduce((acc, sale) => {
      if(acc[sale]){
        acc[sale] += 1;
      }else{
        acc[sale] = 1;
      }
      return acc;
    }, {})
  });
  // console.log(frequencies);
  let sorted = frequencies.map((freq) => {
    let arrangedValues = Object.entries(freq).sort((a, b) => b[1] - a[1]);
    let arranged = arrangedValues.filter(([k, v]) => v === arrangedValues[0][1]);
    if(arranged.length === 1){
      return arranged[0][0];
    }else{
      return arranged[arranged.length-1][0];
    }
    // console.log(arranged);
  });
  // console.log(sorted);
  return sorted;
}

const salesReport = {
  "sales": [
    [100, 150, 200, 200, 200, 180, 150, 120],  
    [300, 320, 300, 300, 320, 320, 320, 350], 
    [500, 500, 450, 450, 450, 450, 500, 500],  
    [600, 750, 750, 800, 800, 800, 750, 600],  
    [900, 950, 950, 900, 900, 1000, 1000, 1000]
  ]
};
console.log(extractReport(salesReport.sales))
