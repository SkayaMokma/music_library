import GalleryItem from './GalleryItem'

function Gallery({ data }) {
    const data = props.data.result.read()
    
    //makes a gallery item for each item in the data array from i tunes
    const display = data.map((item,i) => {
        return <GalleryItem key={i} item={item} />
    })

    return(
        <div>
            {display}
        </div>
    )
}

export default Gallery