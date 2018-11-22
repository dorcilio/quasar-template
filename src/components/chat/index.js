import Chat from './Chat.vue'

const route = {
  path: 'chat',
  name: 'Chat',
  component: Chat,
  meta: {
    requiresLogin: true
  }
}

export default {
  route
}
