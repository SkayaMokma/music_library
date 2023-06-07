import { useState } from 'react'
import { Link } from 'react-router-dom'

function GalleryItem({ item }) {
    let [view, setView] = useState(false)

    //css for the information
    const simpleStyle = {
        'width': '25vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px'
    }
    
    const detailStyle = {
        'width': '80vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px',
        'backgroundImage': `url(${item.artworkUrl100})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'color': 'yellow'
    }

        //sets up a thumbnail type display
    const simpleView = () => {
        return (
            <div style={simpleStyle}>
                <h3>{item.trackName}</h3>
                <h4>{item.collectionName}</h4>
            </div>
        )
    }
        // sets up more detailed view
      
const detailView = () => {
    return (
        <div style={detailStyle}>
            <h2>{item.trackName}</h2>
            <h3>
                <Link to={`/artist/${item.artistId}`}>
                    {item.artistName}
                </Link>
            </h3>
            <h3>
                <Link to={`/album/${item.collectionId}`}>
                    {item.collectionName}
                </Link>
            </h3>
            <h4>{item.primaryGenreName}</h4>
            <h4>{item.releaseDate}</h4>
        </div>
    )
}

 
        

    //uses clicks to alternate between detail and simple views
    return (
        <div onClick={() => setView(!view)}
        style={{'display': 'inline-block'}}>
        
            {/* This simple ternary shows the simple view when 'view' is false! */}
            {view ? detailView() : simpleView()}

        </div>
    )

}

export default GalleryItem