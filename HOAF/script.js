const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  
//basic approach
// for(var i = 0;i < companies.length; i++){
//     console.log(companies[i]);
//}

  //foreach

// companies.forEach(function(company) {
//     console.log(company.name);
// });

//filter
//ES5
// var canDrink = ages.filter(function(age) {
//     if(age >= 21) {
//         return true;
//     }
// });

//ES6
// var canDrink = ages.filter(age => age >=21);

//Filter retail companies
//ES5
// var retailCompanies = companies.filter(function(company) {
//     if(company.category === 'Retail')
//     return true;
// });

//ES6
// var retailCompanies = companies.filter(company => company.category === 'Retail')

//Get 80's companies
// var eightiesCompanies = companies.filter(company => (company.start >=1980 && company.start <1990));

// console.log(eightiesCompanies);

//map
//Create array of companies names

// var test = companies.map(function(company) {
//     return company.name;
// });
// console.log(test);

// var testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

// var ageMap = ages
//     .map(age => Math.sqrt(age))
//     .map(age => age * 2);

// console.log(ageMap);

//Sort
// var sortedCompanies = companies.sort(function(c1, c2) {
//     if(c1.start > c2.start) {
//         return 1;
//     }else {
//         return -1;
//     }
// });

// var sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// console.log(sortedCompanies);

//Sorted ages

// var sortAges = ages.sort((a, b) => a - b);

// console.log(sortAges);

// Reduce

// var ageSum = 0;
// for(var i =0; i < ages.length; i++) {
//     ageSum += ages[i];
// }

// var ageSum = ages.reduce(function(total, age) {
//     return total + age;
// }, 0);

// var totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

//Combine Methods

var combine = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0);

console.log(combine);