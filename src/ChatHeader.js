import { EditLocationRounded, HelpRounded, Notifications, PeopleAltRounded, SearchRounded, SendRounded } from '@mui/icons-material'
import React from 'react'
import './ChatHeader.css'

const ChatHeader = () => {
    return (
        <div className='chatHeader'>
            <div className="chatHeader__left">
                <h3><span className='chatHeader__hash'>#</span>Test Chanel Name</h3>
            </div>
            <div className="chatHeader__right">
                <Notifications/>
                <EditLocationRounded/>
                <PeopleAltRounded/>

                <div className="chatHeader__search">
                    <input placeholder='Search' />
                    <SearchRounded/>
                </div>
                <SendRounded/>
                <HelpRounded/>
            </div>
        </div>
    )
}

export default ChatHeader
