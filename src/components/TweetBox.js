import React, {useState} from 'react'
import  {
    ImageIcon,
    GifIcon,
    PollIcon,
    EmojiIcon,
    PlanIcon,
    } from "../icons/Icon"
import db from "../firebase";
import firebase from 'firebase';
const TweetBox = () => {
    const [content,setContent] = useState('');
    const sendTweet = () => {
        if(content !== ''){
            db.collection('feed').add({
                displayName: "Furkan Arabul",
                username: "@furkanarabul",
                content,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                avatar: "https://pbs.twimg.com/profile_images/1345322260442329088/EiRcWTm0_400x400.jpg"
            });
            setContent("");
        }
    }
    return (
        <div className="flex-1 flex flex-col mt-2 px-2">
            <textarea className="w-full text-xl outline-none placeholder-gray-dark overflow-hidden resize-none bg-transparent" 
            placeholder="What's happening?"
            onChange={(e) => setContent(e.target.value)}
            value={content}></textarea>
            <div className="flex items-center justify-between">
                <div className="flex-row flex -ml-2">
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <ImageIcon/>
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <GifIcon/>
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <PollIcon/>
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <EmojiIcon/>
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <PlanIcon/>
                    </div>               
                </div>
                <button className="bg-primary-base text-white rounded-full px-4 py-2 font-medium"
                onClick={sendTweet}>Tweet</button>
            </div>
        </div>
    )
}

export default TweetBox
