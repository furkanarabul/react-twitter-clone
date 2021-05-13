import React, {useEffect} from 'react'
import db from '../firebase'
const Content = () => {
    useEffect(()=> {
        db.collection('feed')
    })
    return (
        <div className="bg-white ring-1 flex-1">
            <h1>Content</h1>
        </div>
    )
}

export default Content
