import React, {useEffect} from 'react'
import {PopularIcon} from "../icons/Icon"
import TweetBox from "../components/TweetBox"
import Divider from "../components/Divider"

const Content = () => {
    return (
        <main className="bg-white flex-1 flex-col border-r border-l border-gray-extraLight">
            <header className="sticky top-0 z-10 bg-white flex justify-between items-center p-4 border-b border-gray-extraLight">
                <span className="font-bold text-xl text-gray-900">Home</span>
                <PopularIcon className="w-22 h-22"></PopularIcon>
            </header>
            <div className="flex px-4 py-3 space-x-4">
                <img className="w-12 h-12 rounded-full" src="https://pbs.twimg.com/profile_images/1345322260442329088/EiRcWTm0_400x400.jpg"></img>
                        <TweetBox />
            </div>
            <Divider />
        </main>
    )
}

export default Content;
