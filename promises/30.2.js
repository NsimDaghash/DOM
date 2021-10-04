
const names = ['seham','ali','danny','samer' ,'blex','cike','nasim','rawi' , "wajed" ];

function makeAllCaps(arr){
    return new Promise((resolve, reject) => {
            let uppercased = arr.map((name) => {                
            if (typeof name !=='string' ){
                reject('reject: not all the element is string')
            } else {
                return name.toUpperCase();                
            }
        });
        resolve(uppercased);

    }) ;          
}

let newarr = makeAllCaps(names);

const sortWords = (names) => {
    return new Promise((resolve, reject) => {
        let results = names.map((item) => {
            return typeof item === "string"?item : reject('reject: not all the element is string');
        })
   resolve(results.sort())
});
}

makeAllCaps(names)
    .then((result)=>{
        return sortWords(result)
    }).then((resulat1) => {
        console.log(resulat1);
    })
    .catch((err)=> {
        console.log(err)
})
