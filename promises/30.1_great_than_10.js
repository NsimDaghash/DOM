function check_number(input) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (input>10) {

                resolve('resolve')
            } else {
                reject('reject')
            }
        }, 1000)
    })
}

let number = 11 ;

check_number(number).then((request) => {
    console.log(request)
}).catch((error) => {
    console.log(error)
})

let number1 = 8 ;
check_number(number1).then((request) => {
    console.log(request)
}).catch((error) => {
    console.log(error)
})