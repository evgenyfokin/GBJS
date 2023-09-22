const createCounter = () => {
    let acc = 0
    return ({
        increment: () => acc++,
        decrement: () => acc--,
        getCount: () => console.log(acc)
    })
}
const count = createCounter()

count.getCount()
count.increment()
count.increment()
count.getCount()
count.decrement()
count.getCount()