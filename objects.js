var pizza = new Object()
pizza.meat = 'Sausage' // .neat is called a property which doesnt do anything compared to method which does somthing.
pizza.cheese = 'Cheddar'
pizza.veggies = 'Olives'

// more common way of doing this. This is literal way of doing things
var pizza = {
meat:'Sausage',
cheese: 'Cheddar',
veggies: 'Olives'
}
pizza.meat = 'Pepperoni'
 //console.log(pizza.meat)

var topping = 'cheese'
// console.log(pizza[topping]) //dynamic property way

//if we want to loop through our properties in pbject

var props = Object.keys(pizza) // properties are also called keys.
props.forEach(function(prop){
    // console.log(pizza[prop])
}) // this makes props an array now and we can use same things we used in array in here.

// console.log(props)

// think of these variables they are not related the comp doesnt know so we would use object
// var title = 'Star Wards'
// var genre = 'Sci Fi'
// var year = 1977

var movies =[ // now we have a list of movies and we can loop through these 1 at a time. instead of using var movie1 and var movie2 make a array and include the objects in it
    {
        title: 'Star Wars',
        genre: ' Sci Fi',
        year: 1977,
        directors: [
            {
                name: 'George Lucas'
            },
            {
                name: 'JarJar'
            }
        ]
    },
    {
        title: 'Forest Gump',
        genre: 'Drama',
        year: 1995,
        directors: [
            {
                name: 'Robert Zemechas'
            }
        ]
    }
]
movies.forEach(function(movie){ // remember singular and plural this will target each movie and the title of it.
    var directors = movie.directors.map(function(director){ //map comes back with a array this is another way to use it if you want to loop through
        return director.name
    })
    // console.log(directors.join(', ')) // join basically adds any array and glues it together in a string.
    directors = directors.join(', ')
        console.log(movie.title + ' - ' + movie.genre + ' (' + movie.year + ') - Directed By: ' + directors)
    // console.log(movie.title + ' - ' + movie.genre + ' (' + movie.year + ')' + movie.directors[0].name) // title is a string so we can use string methods on it.
})
