const directions = [
    'Começando na estação Trianon',
    'Seguir na direção da Consolação',
    'Virar a direita após o center 3',
    'Descer a Rua Augusta',
    'Chegar na praça roosevelt'
]

const getDirections = (step, callback) => {
    setTimeout(() => {
        console.log(directions[step])
        callback()
    }, 2000)
}

// execução usando callback

// getDirections(0, () => {
//     getDirections(1, () => {
//         getDirections(2, () => {
//             getDirections(3, () =>{
//                 getDirections(4, () => {
//                     console.log('acabou');
//                 })
//             })
//         })
//     })
// })

// Promises

const getDirectionsPromise = (step) => {
    return new Promise((resolve, reject) => {
        if(!directions[step]) reject('Not Found Step')
        setTimeout(() => {
            console.log(directions[step])
            resolve('resolvido')
        }, 1000)
    })
}

// getDirectionsPromise(0)
//     .then((result) => getDirectionsPromise(1))
//     .then ((result) => getDirectionsPromise(2))
//     .then ((result) => getDirectionsPromise(3))
//     .then ((result) => getDirectionsPromise(4))
//     .then ((result) => getDirectionsPromise(5))
//     .catch((err)=>{ console.log(err);})
//     .finally(() => { console.log('executei no final')})



// Async await - sugar sintax


const getAsyncDirections = async () => {
    try {
        await getDirectionsPromise(0)
        await getDirectionsPromise(5)
        await getDirectionsPromise(2)
        await getDirectionsPromise(3)
        await getDirectionsPromise(4)
        // await getDirectionsPromise(5)
    } catch (error) {
        console.error(error)
    } finally {
        console.log('fui executado no final')
    }
}

getAsyncDirections()
