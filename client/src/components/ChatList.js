import React from 'react'
import styles from "./styles.module.css";
import ChatItem from "./ChatItem";
import { useChat } from "../context/ChatContext";
import ScrollableFeed from "react-scrollable-feed";

function ChatList() {
    const {messages}=useChat();
    
    return (
        <div className={styles.chatlist}>
            <ScrollableFeed forceScroll={true}>
            {
                messages.map((item,key)=>(<ChatItem key={key} item={item}/>))
            }
            </ScrollableFeed>
        </div>
    )
}

export default ChatList
