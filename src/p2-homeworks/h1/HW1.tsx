import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}
const alternativeMessageData = {
    photo: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg',
    name: 'Olia',
    message: 'Hi Vincent, how are you? How is the project coming along?',
    time: '10:10 AM, Today',
}

function HW1() {
    return (
        <div>
            <hr/>
            <h1>homeworks 1</h1>
            {/*should work (должно работать)*/}
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage
                photo={alternativeMessageData.photo}
                name={alternativeMessageData.name}
                message={alternativeMessageData.message}
                time={alternativeMessageData.time}
            />
            <hr/>
        </div>
    )
}

export default HW1
