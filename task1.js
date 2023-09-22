class Book {
    constructor(title, author, pages) {
        this.title = title
        this.author = author
        this.pages = pages
    }
    displayInfo = () => {
        console.log(`${this.title} by ${this.author}, ${this.pages} pages.`)
    }
}

const capital = new Book('Capital', 'Karl Marx', 547)
capital.displayInfo()