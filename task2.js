class Student {
    constructor(name, age, grade) {
        this.name = name
        this.age = age
        this.grade = grade
    }
    displayInfo = () => {
        console.log(`name: ${this.name}, age: ${this.age}, grade: ${this.grade}`)
    }
}

const Jeffrey = new Student('Jeffrey', 14, 'A')
Jeffrey.displayInfo()