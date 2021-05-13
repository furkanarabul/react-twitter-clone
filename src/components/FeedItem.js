import React from 'react'

const FeedItem = ({avatar,content,displayName,image,timestamp,username}) => {
    return (
        <div>
            <h1>{username}</h1>
        </div>
    )
}

export default FeedItem
