//calculating the average price of the items listed in array. I used reduce() to calculate the total price of the price: property and then divided it by the length so amount of prices listed in the etsy file to get the average.
var total = items.reduce(function(previous, current){
    return {price: previous.price + current.price}
}, {price: 0})
var avgPrice = total.price / items.length
console.log('The average price is :' + avgPrice.toFixed(2))




var matchesFound = items.filter(function(item) {
    return item.price >= 14 && item.price <= 18
})
console.log('Items that cost between $14.00 and $18.00 USD :' + matchesFound)



//using find to find the GBP currency
var matchCurrency = items.filter(function(currency) {
  return currency.currency_code === 'GBP'
})
console.log(matchCurrency[0].title + ' £' + matchCurrency[0].price)


var findIt = items.filter(function(item){
  return item.materials.includes('wood')
})
console.log(findIt[0].title + findIt[1].title + findIt[2].title + findIt[3].title + findIt[4].title)

var FindItAgain = items.filter(function(item) {
  return item.materials.length > 7
})
console.log(FindItAgain[0].materials + FindItAgain[1].materials)

var canYouFindMe= items.filter(function(item){
  return item.who_made.includes('i_did')
})
console.log(canYouFindMe.length + ' were made by their sellers')
