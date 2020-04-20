import React from 'react'
import CountUp from 'react-countup';

const ImageCard = ({image}) => {
    // console.log(image)

    const tags = image.tags.split(',');
    return (
        <div className="image-card">
            <div className="img">
                <img src={image.webformatURL} alt="" />
            </div>
            <div className="image-data-store">
                <div>
                    Photo by {image.user}
                </div>
                <ul>
                    <li>
                        <strong>Views: </strong>
                        <CountUp
                            start={0}
                            end={image.views}
                            duration={2.0}
                            separator=","  
                        />
                    </li>
                </ul>
                <ul>
                    <li>
                        <strong>Downloads: </strong>
                        <CountUp
                            start={0}
                            end={image.downloads} 
                            duration={2.0}
                            separator=","
                        /> 
                    </li>
                </ul>
                <ul>
                    <li>
                        <strong>Likes: </strong>
                        <CountUp
                            start={0}
                            end={image.likes}
                            duration={2.0}
                            separator=","
                        /> 
                    </li>
                </ul>

                <div className="tag">
                    {
                        tags.map((tag, index)=>(
                            <span key={index} className="span">#{tag}</span>
                        ))
                    }
                </div>
            </div>
            



        </div>
    )
}

export default ImageCard
