import React from 'react'
import FeedItem from "../components/FeedItem"
const FeedList = ({tweets}) => {
    return (
        <div>
            {tweets.map((tweet,index) =>(
                <FeedItem {...tweet} key={index}/>
                    
            ))}
        </div>
    )
}

export default FeedList
