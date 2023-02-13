const cortes = [1, 2, 5, 10, 20, 50, 100, 200]
const initialValue = 0

const combinatorias = (price: number) => {

    for (let i; i < price; i++) {


        
    }


    const sum = cortes.reduce(
        (acumulador, currentValue) => acumulador + currentValue,
        initialValue
    )
    console.log(sum);
}



combinatorias(3)