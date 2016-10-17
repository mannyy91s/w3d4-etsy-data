//What are you doing?
//How are you doing it?
//Why are you doing it this way?


//calculating the average price of the items listed in array. I used reduce() to calculate the total price of the price: property and then divided it by the length so amount of prices listed in the etsy file to get the average.
var total = items.reduce(function(previous, current){
    return {price: previous.price + current.price}
}, {price: 0})
var avgPrice = total.price / items.length
console.log('The average price is :' + avgPrice.toFixed(2))



// For this question i used filter to filter out the properties that had a price between $14-$18. I used the >= && <= to set the price range and to find the items falling in that range.
var matchesFound = items.filter(function(item) {
    return item.price >= 14 && item.price <= 18
})
console.log('Items that cost between $14.00 and $18.00 USD :' + matchesFound)



//I used filter to find the gbp currency by using the property currency_code and targeting 'GBP' to match that as an absolute. Then i used the [] for the index value and title/price for the things required to show for the question.
var matchCurrency = items.filter(function(currency) {
  return currency.currency_code === 'GBP'
})
console.log(matchCurrency[0].title + ' £' + matchCurrency[0].price)

// In this question i again used filter to check the items for 'wood' using includes(). It ended up with 5 things that had the material wood in them and then i used index and title for each to display the titles for the 5 objects.I later replaced it with forEach() statement so incase if more items were added in future it would show the title of them containing wood and i wouldnt have to manually enter the index value.
var findIt = items.filter(function(item){
  return item.materials.includes('wood')
})
findIt.forEach(function(value){
  console.log(value.title)
})
// console.log(findIt[0].title + findIt[1].title + findIt[2].title + findIt[3].title + findIt[4].title)

// I used filter to materials that had > 7 materials used and it came out with 2 objects. I also used forEach() statement to find the title & mateials instead of doing it by the index #>
var findItAgain = items.filter(function(item) {
  return item.materials.length > 7
})
findItAgain.forEach(function(value){
  console.log(value.title, value.materials)
})
// console.log(findItAgain[0].materials + findItAgain[1].materials)

// I once again used filter() and includes() to find the items made by the people posting them and used length in the console.log to show how many of them there were.
var canYouFindMe= items.filter(function(item){
  return item.who_made.includes('i_did')
})
console.log(canYouFindMe.length + ' were made by their sellers')
