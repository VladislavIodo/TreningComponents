import React from 'react'
import classes from "./AlternativeMessage.module.css"


type propsAlternativeMessage = {
    photo: string
    name: string
    message: string
    time: string
}

const AlternativeMessage = (props: propsAlternativeMessage) => {
    return (
            <div className={classes.container}>
                <div className={classes.avatar}><img src={props.photo}/></div>
                <div className={classes.messageContent}>
                    <div className={classes.message}> {props.message}</div>
                    <span className={classes.time}>{props.time}</span> &nbsp; &nbsp;
                    <span className={classes.name}>{props.name}</span> <i className="fa fa-circle me"></i>
                </div>
            </div>
    )
}

export default AlternativeMessage
