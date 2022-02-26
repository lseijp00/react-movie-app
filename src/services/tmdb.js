const apiKey = '0125ef3107968fbaa3a245c33067ae36'
const page = 1
const language = 'es'
const apiURL = 'https://api.themoviedb.org/3/movie/popular'

export default async function getMovies({ keyword }) {
  console.log(keyword)
  const url = `${apiURL}?api_key=${apiKey}&language=${language}&page=${page}`

  return fetch(url)
    .then(res => res.json())
    .then(response => {
      const { results = [] } = response
      const movies = results.map(movie => {
        const { original_title, id, backdrop_path, poster_path } = movie
        var url = ""
        if (keyword === "poster") {
          url = "https://image.tmdb.org/t/p/original/" + backdrop_path
        } else {
          url = "https://image.tmdb.org/t/p/original/" + poster_path
        }
        return { original_title, id, url }
      })
      return movies
    })
}
