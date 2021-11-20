import React, { useEffect, useState } from 'react'
import socket from '../../services/socket'
import './Notifications.scss'

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);

    const addNotification = text => {
        setNotifications(notifications => [...notifications, text]);

        setTimeout(() => {
            setNotifications(notifications => notifications.filter((n, i) => i < notifications.length - 1));
        }, 3000)
    }

    useEffect(() => {
        socket.on('user_notification', text => {
            addNotification(text);
        })
    }, [])

    return (
        <div className="notifications-container">
            {notifications.map(notification => (
                <div>
                    <span>{notification}</span>
                </div>
            ))}        
        </div>
    )
}

export default Notifications
