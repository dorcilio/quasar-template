<template>
  <q-page padding>
    <div class="q-display-1 q-mb-md text-grey">Chat with avatar</div>
    <p class="caption">To mix messages with avatar and without avatar in the same thread, use a placeholder avatar image.</p>
    <q-chat-message
      name="Eu"
      avatar="static/image/boy-avatar.png"
      :text="['Hello!']"
      stamp="4 minutes ago"
      sent
    />

    <q-chat-message
      name="Jane"
      avatar="static/image/linux-avatar.png"
      :text="['Hello Dorcílio!', 'How are you?']"
      stamp="7 minutes ago"
    >
    </q-chat-message>

    <q-chat-message
      name="Jane"
      avatar="static/image/linux-avatar.png"
    >
      <q-spinner-dots size="2rem" />
    </q-chat-message>
  </q-page>
</template>

<script>
export default {
  name: 'chat'
}
</script>

<style lang="css">
</style>
