const numberMaximo = 50
const numSkipMaximo = 20
const zero = 0
const n1 = 1


const mBonnaci = (nSkip: number, nFibo: number) => {
    let cond = true
    let fiboArray = Array(nFibo).fill(zero)
    let lastIndex

    cond = validar(nSkip, nFibo)
    if (cond) {
        fiboArray[nSkip - n1] = n1
        fiboArray[nSkip] = n1

        for (let i = nSkip + n1; i < nFibo; i++) {
            let sum = fiboArray.reduce(
                () => 2 * fiboArray[i - n1] - fiboArray[i - nSkip - n1],
                fiboArray[i]
            )
            fiboArray[i] = sum
            console.log(sum);
        }
        return fiboArray[fiboArray.length - 1]
    }
}

const validar = (nSkip: number, nFibo: number) => {
    if (nFibo >= numberMaximo || nSkip >= numSkipMaximo) {
        return false
    }

    if (nFibo === zero || nSkip === zero) {
        return false
    }
    return true
}

mBonnaci(3, 7)
mBonnaci(2, 5)
mBonnaci(0, 0)
mBonnaci(20, 50)



