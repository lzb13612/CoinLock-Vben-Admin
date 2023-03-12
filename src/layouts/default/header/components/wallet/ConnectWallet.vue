<template>
  <div v-if="connectedWallet === null">
    <a-button type="primary" @click="connectWallet()">
      {{ t('layout.header.connectWallet') }}
    </a-button>
  </div>
  <template v-else>
    <BasicTitle :getAddress="getAddress()">
      {{ address }}
    </BasicTitle>
    &nbsp;&nbsp;
    <a-button type="primary" @click="disconnectConnectedWallet()">
      {{ t('layout.header.disconnectConnectedWallet') }}
    </a-button>
  </template>
</template>

<script lang="ts">
  import AButton from '/@/components/Button/src/BasicButton.vue';
  import { BasicTitle } from '/@/components/Basic';
  export default {
    name: 'ConnectWallet',
    components: { AButton, BasicTitle },
  };
</script>

<script lang="ts" setup>
  import { useI18n } from '/@/hooks/web/useI18n';
  const { t } = useI18n();
  /* ================================================== */
  import { useOnboard } from '/@/wallet/useOnboard';
  let address;
  const { connectedWallet, connectWallet, disconnectConnectedWallet } = useOnboard();
  const getAddress = async () => {
    address =
      connectedWallet.value?.accounts[0].address.slice(0, 4) +
      '...' +
      connectedWallet.value?.accounts[0].address.slice(-4);
  };
  /* ================================================== */
</script>
<style scoped></style>
