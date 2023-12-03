import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { socketService } from '../services/socket.service.js'

import SvgIcon from './SvgIcon.jsx'
import { SmileyChoice } from './SmileyChoice.jsx'
import { getChatByUsers, saveChat } from '../store/chat.actions.js'
import { chatService } from '../services/chat.service.js'

export function UserChat({ owner, chatState, setChatState, buyer, gig }) {
  const loggedinUser = useSelector((storeState) => storeState.userModule.user)

  const [chat, setChat] = useState(chatService.getEmptyChat())
  const [characterCount, setCharacterCount] = useState(0)
  const [message, setMessage] = useState('')
  const [smileyChoice, setSmileyChoice] = useState(false)
  const timeoutId = useRef(null)

  let isBuyer = loggedinUser && owner._id !== loggedinUser._id

  useEffect(() => {
    if (chatState) {
      if (isBuyer) openChatWithSeller()
      
      socketService.on('chat_add_msg', addMessage)
      socketService.on('chat_add_typing', addTypingUser)
      socketService.on('chat_remove_typing', removeTypingUser)
    }
    return () => {
      socketService.off('chat_add_msg', addMessage)
      socketService.off('chat_add_typing', addTypingUser)
      socketService.off('chat_remove_typing', removeTypingUser)
      clearTimeout(timeoutId.current)
    }
  }, [chatState])

  useEffect(() => {
    getNewChat()
  }, [loggedinUser])

  async function getNewChat() {
    try{
    if (isBuyer) {
        const newChat = await getChatByUsers({
          buyerId: loggedinUser._id,
          sellerId: owner._id,
        })
        if (newChat) setChat(newChat)
        else
      setChat(
          await saveChat({
            buyerId: loggedinUser._id,
            sellerId: owner._id,
            messages: [],
            gig: gig,
          })
          )
        } else {
          setChat(await getChatByUsers({ buyerId: buyer._id, sellerId: owner._id }))
        }
      }
      catch(err){
        console.log('Problem occurred whe getting/saving new chat: ',err);
      }
  }

  function openChatWithSeller() {
    socketService.emit('chat_open', {
      sellerId: owner._id,
      buyer: loggedinUser,
    })
  }

  function addMessage(message) {
    setChat((prevChat) => [
      ...prevChat.messages.filter((msg) => msg.type !== 'typing'),
      message,
    ])
  }

  function addTypingUser(user) {
    setChat((prevChat) => [
      ...prevChat.messages.filter((msg) => msg.type !== 'typing'),
      { type: 'typing', user: user },
    ])
  }

  function removeTypingUser() {
    setChat((prevChat) =>
      prevChat.messages.filter((msg) => msg.type !== 'typing')
    )
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      handleSendMessage()
    }
  }
  async function handleSendMessage() {
    const newMessage = {
      message: message,
      time: new Date(),
      user: loggedinUser,
    }
    if (isBuyer) {
      socketService.emit('chat-send-msg', { userId: owner._id, newMessage })
    } else {
      socketService.emit('chat-send-msg', { userId: buyer._id, newMessage })
    }

    setChat((prevChat) => ({
      ...prevChat,
      messages: [...prevChat.messages, newMessage],
    }))
    try {
      await saveChat(chat)
    } catch (err) {
      console.log('unable to save update chat: ', err)
    }
    clearTimeout(timeoutId.current)
    timeoutId.current = null
    setMessage('')
    socketService.emit('chat-stop-typing', isBuyer ? owner : buyer)
    setCharacterCount(0)
  }

  function onChangeMessage(event) {
    const messageText = event.target.value
    setCharacterCount(messageText.length)
    setMessage(messageText)

    if (!timeoutId.current)
      socketService.emit('chat-user-typing', {
        typingUser: loggedinUser,
        receiverId: isBuyer ? owner._id : buyer._id,
      })

    if (timeoutId.current) clearTimeout(timeoutId.current)
    timeoutId.current = setTimeout(() => {
      socketService.emit('chat-stop-typing', {
        typingUser: loggedinUser,
        receiverId: isBuyer ? owner._id : buyer._id,
      })
      timeoutId.current = null
    }, 2000)
  }

  return (
    <>
      {chatState && (
        <div className="chat-box-wrapper">
          <aside className="chat-box">
            <div className="chat-box-container grid">
              <section className="user-info-bar flex row">
                <div className="avatar">
                  {buyer ? (
                    <img src={buyer.imgUrl} alt={buyer.username} />
                  ) : (
                    <img src={owner.imgUrl} alt={owner.username} />
                  )}
                  <span className="status-dot"></span>
                </div>
                <div className="owner-info flex">
                  <span>
                    {buyer ? (
                      <span className="message flex row">{`Message ${buyer.username}`}</span>
                    ) : (
                      <span className="message flex row">{`Message ${owner.username}`}</span>
                    )}
                    <span className="response-time flex">
                      <span>Online</span>
                      <span className="dot flex"></span>
                      <span>
                        Avg. response time: <span className="b">1 Hour</span>
                      </span>
                    </span>
                  </span>
                  <span className="remove" onClick={() => setChatState(false)}>
                    <SvgIcon iconName={'remove'} />
                  </span>
                </div>
              </section>

              <section className="chat-container grid">
                <div className="message-form grid">
                  <div className="message-container flex column">
                    {chat.messages.map((message, index) => {
                      if (message.type === 'typing') {
                        return (
                          <div
                            key={index}
                            className="message user-two typing-indicator"
                          >
                            <div className="message-body grid">
                              <span className="text">
                                <span className="typing-loader">
                                  <span className="dot"></span>
                                  <span className="dot"></span>
                                  <span className="dot"></span>
                                </span>
                              </span>
                              <img
                                className="avatar"
                                src={message.user.imgUrl}
                                alt={message.user.username}
                              />
                            </div>
                          </div>
                        )
                      } else {
                        return (
                          <div
                            key={index}
                            className={`message 
                            ${
                              message.user._id === loggedinUser._id
                                ? 'user-one'
                                : 'user-two'
                            } flex column`}
                          >
                            <div className="message-body grid">
                              <span className="text">{message.message}</span>
                              <img
                                className="avatar"
                                src={message.user.imgUrl}
                                alt={message.user.username}
                              />
                            </div>
                          </div>
                        )
                      }
                    })}
                  </div>

                  <div className="input-container">
                    <textarea
                      maxLength="2500"
                      data-testid="message-box"
                      placeholder={
                        isBuyer
                          ? `Ask ${owner.username} a question or share your project details (requirements, timeline, budget, etc.)`
                          : `Sell your gig...`
                      }
                      value={message}
                      onChange={(e) => onChangeMessage(e)}
                      onKeyPress={handleKeyPress}
                    ></textarea>
                  </div>

                  <div
                    className="message-footer-wrapper"
                    data-testid="message-wrapper"
                  >
                    {!message && !buyer && (
                      <section className="quick-question-container flex column">
                        <button
                          onClick={() =>
                            setMessage(
                              `👋 Hey ${owner.username}, can you help me with...`
                            )
                          }
                        >
                          👋 Hey {owner.username}, can you help me with...
                        </button>
                        <button
                          onClick={() =>
                            setMessage(
                              'Would it be possible to get a custom offer for...'
                            )
                          }
                        >
                          Would it be possible to get a custom offer for...
                        </button>
                        <button
                          onClick={() =>
                            setMessage(
                              'Do you think you can deliver an order by...tomorrow at 10pm'
                            )
                          }
                        >
                          Do you think you can deliver an order by...
                        </button>
                      </section>
                    )}

                    <footer className="message-footer flex">
                      <section className="character-count">
                        <span>{characterCount}/2500</span>
                      </section>
                    </footer>
                  </div>
                </div>
                <div className="message-options flex row">
                  <span className="addition flex">
                    <span className="emoji-picker-icon">
                      <span className="smiley-container">
                        <SvgIcon iconName={'smiley'} />
                        <span
                          className={`smiley-selection ${
                            smileyChoice ? '' : 'hidden'
                          }`}
                          onClick={() =>
                            setSmileyChoice((prevState) => !prevState)
                          }
                        >
                          <SmileyChoice setMessage={setMessage} />
                        </span>
                      </span>
                      <div className="emoji-picker-container"></div>
                    </span>

                    <button>
                      <SvgIcon iconName={'loadingFiles'} />
                    </button>
                  </span>

                  <button
                    className="send-message-button flex row"
                    disabled={!message}
                    onClick={handleSendMessage}
                  >
                    <SvgIcon iconName={'send'} />
                    <span>Send message</span>
                  </button>
                </div>
              </section>
            </div>
          </aside>
        </div>
      )}
    </>
  )
}
