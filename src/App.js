import { useEffect, useState, Suspense } from 'react'
import { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gallery from './Components/Gallery.js'
import SearchBar from './Components/SearchBar.js'
import AlbumView from './Components/AlbumView.js'
import ArtistView from './Components/ArtistView.js'
import { createResource as fetchData } from './helper'




function App(){
    let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState(null)

    //gets the data from itunes everytime the search is changed
    useEffect(() => {
        if (searchTerm) {
            setData(fetchData(searchTerm))
        }
    }, [searchTerm])
    
    //makes it so that when submited it changes the searched term
    const handleSearch= (e, term) => {
        e.preventDefault()
        setSearch(term)
    }   

    const renderGallery = () => {
        if(data) {
            return (
                <Suspense fallback={<Spinner />}>
                    <Gallery data={data} />
                </Suspense>
            )
        }
    }
    

    return (
        <div className="App">
            <SearchBar handleSearch={handleSearch} />
            {message}
            {renderGallery()}
        </div>
    )
    
}

export default App
