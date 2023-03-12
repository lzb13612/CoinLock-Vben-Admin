import '/@/design/index.less';
import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
import 'virtual:windi-utilities.css';
// Register icon sprite
import 'virtual:svg-icons-register';
import App from './App.vue';
import { createApp } from 'vue';
import { initAppConfigStore } from '/@/logics/initAppConfig';
import { setupErrorHandle } from '/@/logics/error-handle';
import { router, setupRouter } from '/@/router';
import { setupRouterGuard } from '/@/router/guard';
import { setupStore } from '/@/store';
import { setupGlobDirectives } from '/@/directives';
import { setupI18n } from '/@/locales/setupI18n';
import { registerGlobComp } from '/@/components/registerGlobComp';

// Wallets===============================================================
import injectedModule from '@web3-onboard/injected-wallets';
import walletConnectModule from '@web3-onboard/walletconnect';
import { init } from '/@/wallet/useOnboard';

const infuraKey = '41af93a3f9504846af0ef1080b980085';
const injected = injectedModule();
const walletConnect = walletConnectModule();

const chains = [
  {
    id: '0x1',
    token: 'ETH',
    label: 'Ethereum',
    rpcUrl: `https://mainnet.infura.io/v3/${infuraKey}`,
  },
  {
    id: '0x3',
    token: 'tROP',
    label: 'Ropsten',
    rpcUrl: `https://ropsten.infura.io/v3/${infuraKey}`,
  },
  {
    id: '0x4',
    token: 'rETH',
    label: 'Rinkeby',
    rpcUrl: `https://rinkeby.infura.io/v3/${infuraKey}`,
  },
  {
    id: '0x89',
    token: 'MATIC',
    label: 'Polygon',
    rpcUrl: 'https://matic-mainnet.chainstacklabs.com',
  },
  {
    id: '0xa',
    token: 'OETH',
    label: 'Optimism',
    rpcUrl: 'https://mainnet.optimism.io',
  },
];
const onboardOptions = {
  accountCenter: {
    desktop: {
      enabled: true,
    },
    mobile: {
      enabled: false,
    },
  },
  wallets: [walletConnect, injected],
  chains: chains,
  appMetadata: {
    name: 'Connect Wallets',
    icon: '<svg><svg/>',
    description: 'connect wallets',
    recommendedInjectedWallets: [
      { name: 'MetaMask', url: 'https://metamask.io' },
      { name: 'Coinbase', url: 'https://wallet.coinbase.com/' },
      { name: 'Frame', url: 'https://frame.sh' },
    ],
  },
};

init(onboardOptions);
// Wallets===============================================================

// Importing on demand in local development will increase the number of browser requests by around 20%.
// This may slow down the browser refresh speed.
// Therefore, only enable on-demand importing in production environments .
if (import.meta.env.DEV) {
  import('ant-design-vue/dist/antd.less');
}

async function bootstrap() {
  const app = createApp(App);

  // Configure store
  setupStore(app);

  // Initialize internal system configuration
  initAppConfigStore();

  // Register global components
  registerGlobComp(app);

  // Multilingual configuration
  // Asynchronous case: language files may be obtained from the server side
  await setupI18n(app);

  // Configure routing
  setupRouter(app);

  // router-guard
  setupRouterGuard(router);

  // Register global directive
  setupGlobDirectives(app);

  // Configure global error handling
  setupErrorHandle(app);

  // https://next.router.vuejs.org/api/#isready
  // await router.isReady();

  app.mount('#app');
}

bootstrap();
