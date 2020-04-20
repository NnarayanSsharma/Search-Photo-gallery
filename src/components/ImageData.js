import React, {useState, useEffect} from 'react'
import ImageCard from './ImageCard';
import ImageSearch from './ImageSearch';

function ImageData() {
    const [images, setImage ] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState('');

    

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=16115266-e063dfa251ffb9e3474d25e8a&q=${term}&image_type=photo&pretty=true`)
        .then(res=>res.json())
        .then(data=>{
            setImage(data.hits);
            setIsLoading(false)
        })
        .catch(err=>console.log(err))
    }, [term])

    return (
        <div className="container">
            <ImageSearch searchText = {text=>setTerm(text)} />
            {!isLoading && images.length === 0 && <h1>No Images Found</h1>}
            { isLoading ? <h1>Loading...</h1> :
                <div className="image-data">
                    {
                        images.map(image=> (
                            <ImageCard key={image.id} image={image} />
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default ImageData
