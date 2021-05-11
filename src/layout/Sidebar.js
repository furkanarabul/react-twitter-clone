import React from 'react'
import {HomeIcon} from "../icons/Icon"
import {ExploreIcon} from "../icons/Icon"
import {NotificationIcon} from "../icons/Icon"
import {MessagesIcon} from "../icons/Icon"
import {BookmarksIcon} from "../icons/Icon"
import {ListsIcon} from "../icons/Icon"
import {ProfileIcon} from "../icons/Icon"
import {MoreIcon} from "../icons/Icon"


const Sidebar = () => {
    return (
        <div className="w-72 bg-blue-200">
            <h1>Sidebar</h1>
            <HomeIcon/>
            <ExploreIcon/>
            <NotificationIcon/>
            <MessagesIcon/>
            <BookmarksIcon/>
            <ListsIcon/>
            <ProfileIcon/>
            <MoreIcon/>
        </div>
    )
}

export default Sidebar