const apiKey = '0125ef3107968fbaa3a245c33067ae36'
const page = 1
const language = 'es'

export default async function getMovie({ id }) {
  console.log({ id })
  const apiURL = 'https://api.themoviedb.org/3/movie/'

  const url = `${apiURL}/${id}?api_key=${apiKey}&language=${language}`

  return fetch(url)
    .then(res => res.json())
    .then(response => {

      var { backdrop_path, vote_average, original_title, poster_path, overview } = response
      
      backdrop_path = "https://image.tmdb.org/t/p/original/" + backdrop_path
      poster_path = "https://image.tmdb.org/t/p/original/" + poster_path

      return { vote_average, original_title, poster_path, backdrop_path, overview }
    })
}
