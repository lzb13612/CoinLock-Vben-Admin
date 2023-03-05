<template>
  <div v-if="!isLoggedIn">
    <a-button type="primary" v-if="isMetaSupported" @click="connectWallet">{{
      t('layout.header.connectMetaMask')
    }}</a-button>
    <a-button type="primary" v-else
      ><a href="https://metamask.io/">{{ t('layout.header.installMetaMask') }}</a></a-button
    >
  </div>
  <div v-else>
    <BasicTitle>{{ address }}</BasicTitle>
  </div>
</template>

<script lang="ts">
  import AButton from '/@/components/Button/src/BasicButton.vue';
  import { BasicTitle } from '/@/components/Basic';

  // declare global {
  //   interface Window {
  //     ethereum: any;
  //   }
  // }
  export default {
    name: 'ConnectMetaMask',
    components: { AButton, BasicTitle },
  };
</script>

<script lang="ts" setup>
  import { useI18n } from '/@/hooks/web/useI18n';
  import { onMounted, ref } from '@vue/runtime-core';
  // import { computed } from 'vue';

  const { t } = useI18n();
  // connect MetaMask ==================================================
  const isLoggedIn = ref(false);

  const address = ref('');

  const isMetaSupported = ref(false);

  onMounted(() => {
    isMetaSupported.value = typeof (window as any).ethereum !== 'undefined';
  });

  async function connectWallet() {
    const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
    address.value = accounts[0];
    isLoggedIn.value = true;
  }

  // const computedAddress = computed(() => address.value.substring(0, 4) + '.....');
</script>

<style scoped></style>
