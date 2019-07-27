const movies = [
  { title: 'a', year: 2018, rating: 4.5 },
  { title: 'b', year: 2018, rating: 4.7 },
  { title: 'c', year: 2018, rating: 3 },
  { title: 'd', year: 2017, rating: 4.5 }
]

const titles = movies
  // All the movies in 2018 with rating > 4
  .filter(m => m.year === 2018 && m.rating >= 4)
  // Sort them by their rating
  .sort((a, b) => a.rating - b.rating)
  // Descending order
  .reverse()
  // Pick their title
  .map(m => m.title)

console.log(titles)
