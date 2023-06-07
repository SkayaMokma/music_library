import { useState } from 'react'

function SearchBar({ handleSearch }) {
    const [searchTerm, setSearchTerm] = useState('')

    //takes in the input and makes the search variable the input when submit is clicked
    return(
        <form onSubmit={(e)=> handleSearch(e, searchTerm)}>
            <input onChange={(e) => {setSearchTerm(e.target.value)}} placeholder='Enter a search term' />
            <input type='submit' />
        </form>
    )
}

export default SearchBar