import React from 'react'
import classes from "./Message.module.css";

type iMessage = {
    avatar: string
    name: string
    message: string
    time: string
}

const Message = (props: iMessage) => {
    return (
        <div className={classes.container}>
            <div className={classes.avatar}><img src={props.avatar}/></div>
            <div className={classes.messageContent}>
                <div className={classes.name}>{props.name}</div>
                <div className={classes.message}>{props.message}</div>
                <div className={classes.time}>{props.time} </div>
            </div>
        </div>
    )
}

export default Message
