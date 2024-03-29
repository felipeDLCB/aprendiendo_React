import { useMovies } from './Hooks/useMovies.js'
import { useSearch } from './Hooks/useSearch.js'
import { Movies } from './Components/Movies.jsx'
import { useState, useCallback } from 'react'
import debounce from 'just-debounce-it'
import './App.css'



function App() {
  const [sort, setSort] = useState(false)

  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce(search => {
      console.log(search)
      getMovies({ search })
    }, 300)
    , [getMovies]
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  return (
    <>
      <div>
        <header>

          <h1>Buscador de Peliculas</h1>

          <form className='form' onSubmit={handleSubmit}>
            <input type="text" style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }} onChange={handleChange} value={search} name='query' placeholder='Movies...' />
            <input type='checkbox' onChange={handleSort} checked={sort} />
            <button>Buscar</button>
          </form>
          {error && <p style={{ color: 'red' }}> {error} </p>}

        </header>

        <main>
          Resultados
          {
            loading ? <p>Cargando...</p> : <Movies movies={movies}></Movies>
          }
        </main>
      </div>

    </>
  )
}

export default App
