// let A = "Grapes6$Mango6$Apple5";
// const func = (A) => {
//     let results = [];
//     const newA = A.split("$");
//     //console.log(newA)
//     for(let i=0; i<newA.length; i++){
//         const newS = newA[i].split("");
//         //console.log(newS)
//         if(parseInt(newS[newS.length-1]) === newS.length - 1){
//             newS.pop();
//             results.push(newS.join(''));
//         }
//     }
//     return results;
// }

// const res = func(A)
// console.log(res);

// let arr = [1,2,1,3,4,5,2];

// let results = [];
// let windowSize = 3;
// for(let row = 0; row<arr.length-windowSize; row++){
//     const frequency = {};
//     //manually construct the window and count frequnecies
//     for(let row2=row; row2 < row + windowSize; row2++){
//         if(frequency[arr[row2]]){
//             frequency[arr[row2]] += 1
//         }else{
//             frequency[arr[row2]] = 1;
//         }
//     }
//     //console.log(frequency,row)
//     const distinctColumns = Object.keys(frequency).length
//     results.push(distinctColumns)
// }
// console.log(results)

let A = "(code100)"
let result = [];
                for(let i =0; i<A.length;i++){
                  if (A[i] === "(") {
                    let word = "";
                    let j = i + 1;
                    while (j < A.length && A[j] !== ")") {
                      word += A[j];
                      j++;
                    }
                    result.push(word);
                    i = j;
                  }
                }
                //console.log(result)
                let final = [];
                result.forEach((item)=>{
                    const newar = item.split("")
                    const countt = newar.filter((item)=> !isNaN(item)).join("")
                    console.log(countt)
                
                    const basestr = item.slice(0,-1);
                    for(let i=0;i<countt;i++){
                        final.push(basestr)
                    }
                })
                console.log(final.join(" "));
                