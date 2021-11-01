import { Avatar } from '@mui/material'
import React from 'react'
import './Message.css'

const Message = () => {
    return (
        <div className='message'>
            <Avatar/>
            <div className="message__info">
                <h4>Azat
                <span className='message__timestamp'>this is a timestamp</span>
                </h4>
                <p>This is a test message</p>
            </div>
        </div>
    )
}

export default Message
