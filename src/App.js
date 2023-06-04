import { useEffect, useState } from 'react'
import Gallery from './Components/Gallery'
import SearchBar from './Components/SearchBar'
import { DataContext } from './Contexts/DataContext'

function App() {
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('Search for Music!')
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const API_URL = `https://itunes.apple.com/search?term=${encodeURI(search)}`
      console.log(API_URL)
      const response = await fetch(API_URL)
      const data = await response.json()
      console.log(data)
      if( data.results.length > 0) {
        setData(data.results)
      } else {
        setMessage('Not found')
      }
    }

    if (search) fetchData()
  }, [search])
  
  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  } 

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      {message}
      <DataContext.Provider value={data}>
      <Gallery />
      </DataContext.Provider>
    </div>
  );
}

export default App;
