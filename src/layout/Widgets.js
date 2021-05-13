import React from 'react'
import {ExploreIcon} from "../icons/Icon"
import { Timeline } from 'react-twitter-widgets'

const Widgets = () => {
    return (
        <div className="w-80">
            <div className="flex items-center space-x-4 p-3 m-3 bg-gray-200 rounded-full text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base">
                <ExploreIcon className="w-5 h-5 "/>
                <input type="text" placeholder="Search Twitter" className="placeholder-gray-dark bg-transparent focus:outline-none w-full text-sm"></input>
            </div>
            <div className="mt-5">
            <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: 'reactjs'
                }}
                options={{
                    height: '600'
                }}
            />
            </div>
        </div>
    )
}

export default Widgets
