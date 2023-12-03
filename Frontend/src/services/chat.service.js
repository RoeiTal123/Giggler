import { httpService } from './http.service.js'
import { socketService } from './socket.service.js'
import { utilService } from './util.service.js'

const BASE_URL = 'chat/'

export const chatService = {
  query,
  getById,
  remove,
  update,
  getDefaultFilter,
}

async function query(filterByUser) {
  try {
    return await httpService.get(BASE_URL, filterByUser)
  } catch (error) {
    console.error('Error querying chats:', error)
    throw error 
  }
}

async function getById(usersId) {
  const chat = await httpService.get(BASE_URL + usersId)
  return chat
}

function remove(chatId) {
  return httpService.delete(BASE_URL, chatId)
}

async function update(chat) {
  const savedChat = await httpService.put(`${BASE_URL}${chat._id}`, chat)
  if (getLoggedinChat()._id === chat._id) setLoggedinChat(chat)
  return savedChat
}

function getDefaultFilter() {
  return {
    userId: '',
    // gigId: ''
  }
}
