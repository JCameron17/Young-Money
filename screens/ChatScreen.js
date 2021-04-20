import React, { useState, useEffect, useCallback } from 'react'
import {View, ScrollView, Text, Button, StyleSheet} from 'react-native'
import { Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { FontAwesome } from 'react-native-vector-icons/FontAwesome'

const ChatScreen = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            /*{
                _id: 1,
                text: 'Yes, let\'s discuss',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/640/480/any',
                },
            },
            */
            {
                _id: 1,
                text: 'Hi, are you ready to review some financial plans?',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/640/480/any',
                },
            },
        ])
    }, []);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, []);

    const renderBubble = (props) => {
        return(
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: 'green'
                    }
                }}
                textStyle={{
                    right: {
                        color: '#fff'
                    }
                }}
            />
        );
    }

    const renderSend = (props) => {
        return (
            <Send {...props}>
                <View>
                    <MaterialCommunityIcons 
                        name='send-circle'
                        style={{
                            marginBottom: 5,
                            marginRight: 5
                        }}
                        size={32}
                        color='green'
                    />
                </View>
            </Send>
        );
    }

    const scrollToBottomComponent = () => {
       return(
           <FontAwesome 
               name='angle-double-down'
               size={22}
               color='#333'
           />
       ) 
    }

    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id:1,
            }}
            renderBubble={renderBubble}
            alwaysShowSend
            renderSend={renderSend}
            scrollToBottom
            scrollToBottomComponent={scrollToBottomComponent}
        />
    );
};

export default ChatScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});