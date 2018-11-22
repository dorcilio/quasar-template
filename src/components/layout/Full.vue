<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="primary" :glossy="$q.theme === 'ios'">
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu" icon="fas fa-bars"/>
        <q-toolbar-title>
          <img src="static/image/logo-white-full.png" alt="LogoHeader" width="150" height="150" class="responsive">
          <!-- <div slot="subtitle">Running on Quasar v{{ $q.version }}</div> -->
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>
    <q-layout-drawer v-model="leftDrawerOpen" :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null">
      <q-card>
        <q-item>
          <q-item-side avatar="static/image/avatar.svg" />
          <q-item-main>
            <q-item-tile label>Dorcílio Neto</q-item-tile>
            <q-item-tile sublabel>Subtítulo</q-item-tile>
          </q-item-main>
        </q-item>
        <q-card-actions align="center">
          <q-btn round color="primary" icon="fas fa-user"></q-btn>
          <q-btn round color="purple" icon="fab fa-android"></q-btn>
          <q-btn round color="red" icon="fas fa-sign-out-alt"></q-btn>
        </q-card-actions>
      </q-card>
      <q-list no-border link inset-delimiter>
        <div v-for="(item, index) in navItems" :key="index">
          <div v-if="item.title" exact tag="div" class="q-list-header">
            {{item.name}}
          </div>
          <router-link v-else :to="item.url" exact tag="div" class="q-item q-item-division relative-position cursor-pointer">
            <div class="q-item-side q-item-section q-item-side-left">
              <i aria-hidden="true" class="q-icon q-item-icon" :class="item.icon"></i>
            </div>
            <div class="q-item-main q-item-section">
              <div class="q-item-label" style="overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical;">
                {{item.name}}
              </div>
              <div v-if="item.comment && item.comment !== ''" class="q-item-sublabel" style="overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical;">
                {{item.comment}}
              </div>
            </div>
          </router-link>
        </div>
      </q-list>
    </q-layout-drawer>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import nav from '../../_nav'
export default {
  name: 'full',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      navItems: []
    }
  },
  mounted () {
    this.navItems = nav.items
  }
}
</script>

<style lang="css">
</style>
