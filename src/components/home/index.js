import Home from './Home.vue'

const route = {
  path: 'home',
  name: 'Home',
  component: Home,
  meta: {
    requiresLogin: true
  }
}

export default {
  route
}
