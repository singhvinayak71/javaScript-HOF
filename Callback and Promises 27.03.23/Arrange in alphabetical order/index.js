const bookStore = [
    {
        title: 'How to Prevent the Next Pandemi',
        author: 'bill Gates',
        year: 2002
    },
    {
        title: 'Ratan N. Tata: The Authorized Biography',
        author: 'dr. Thomas Matthew',
        year: 2010
    },
    {
        title: 'The India Story',
        author: 'bimal Jalal',
        year: 2009
    },
    {
        title: 'Queen of Fire',
        author: 'devika Rangachari',
        year: 2008
    },
    {
        title: 'A Nation To Protect',
        author: 'priyam Gandhi Mody',
        year: 2011
    },

    {
        title: 'Rashtra Pratham - 82 Varshon ki Swarnim Gatha',
        author: 'amit Shah',
        year: 2010
    },
    {
        title: 'The Braille edition of the book Exam Warriors',
        author: 'pm Narendra Modi',
        year: 2000
    },
    {
        title: 'Home in the World',
        author: 'amartya Sen',
        year: 2021
    },

]


const listOfTitles = bookStore.map((elem) => {
    let title = elem.title
    return title
})

function shortedList(title) {
    title.sort()
    console.log(title)
}

shortedList(listOfTitles)