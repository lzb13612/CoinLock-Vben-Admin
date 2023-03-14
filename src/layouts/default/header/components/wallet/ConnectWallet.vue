<template>
  <div v-if="!getLogin">
    <a-button type="primary" @click="connectWallets()">
      {{ t('layout.header.connectWallet') }}
    </a-button>
  </div>
  <template v-else>
    <BasicTitle> {{ getAddress() }} </BasicTitle>
    &nbsp;&nbsp;
    <a-button type="primary" @click="disconnectConnectedWallets()">
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
  import { Persistent } from '/@/utils/cache/persistent';
  import { ACCOUNTS, WALLET_CONNECT } from '/@/enums/cacheEnum';
  import { getLogin } from '/@/main';

  function getAddress() {
    if (Persistent.getLocal(WALLET_CONNECT as any)) {
      return (
        (Persistent.getLocal(ACCOUNTS as any) as any)[0].address.slice(0, 5) +
        '...' +
        (Persistent.getLocal(ACCOUNTS as any) as any)[0].address.slice(-4)
      );
    } else {
      getLogin.value = Persistent.getLocal(WALLET_CONNECT as any);
    }
  }

  function connectWallets() {
    const { connectWallet } = useOnboard();
    connectWallet().then((_) => {
      getLogin.value = Persistent.getLocal(WALLET_CONNECT as any);
    });
  }
  function disconnectConnectedWallets() {
    const { disconnectConnectedWallet } = useOnboard();
    disconnectConnectedWallet().then((_) => {
      getLogin.value = Persistent.getLocal(WALLET_CONNECT as any);
    });
  }

  /* ================================================== */
</script>
<style scoped></style>
