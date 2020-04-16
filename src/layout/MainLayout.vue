<template>
  <a-layout>
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
      :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }"
    >
      <SideMenu></SideMenu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-header :style="{ background: '#fff', padding: 0 }">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
        }"
      >
        content
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import SideMenu from "./SideMenu";

export default {
  components: {
    SideMenu,
  },
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>

<style scoped></style>
