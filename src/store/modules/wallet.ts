import { defineStore } from 'pinia';
import { Account, ConnectedChain } from '@web3-onboard/core/dist/types';
import { EIP1193Provider } from '@web3-onboard/common';
import { store } from '/@/store';
import { Persistent } from '/@/utils/cache/persistent';
import { ACCOUNTS } from '/@/enums/cacheEnum';

export interface WalletState {
  label: string;
  icon: string;
  provider: EIP1193Provider;
  accounts: Account[];
  chains: ConnectedChain[];
  instance?: unknown;
  alreadyConnectedWallets: [];
  lastConnectionTimestamp: number;
}
export const useWalletStore = defineStore({
  id: 'wallet',
  state: (): WalletState => ({
    label: '',
    icon: '',
    provider: <EIP1193Provider>{},
    accounts: [],
    chains: [],
    instance: null,
    alreadyConnectedWallets: [],
    lastConnectionTimestamp: 0,
  }),
  getters: {
    getLabel(): string {
      return this.label;
    },
    getIcon(): string {
      return this.icon;
    },
    getProvider(): {} {
      return this.provider;
    },
    getAccounts(): {} {
      return this.accounts;
    },
    getChains(): {} {
      return this.chains;
    },
    getInstance(): unknown | null {
      return this.instance;
    },
    getAlreadyConnectedWallets(): [] {
      return this.alreadyConnectedWallets;
    },
    getLastConnectionTimestamp(): number {
      return this.lastConnectionTimestamp;
    },
  },
  actions: {
    setLabel(labelInfo: string): void {
      this.label = labelInfo;
    },
    setIcon(iconInfo: string): void {
      this.icon = iconInfo;
    },
    setProvider(providerInfo: EIP1193Provider): void {
      this.provider = providerInfo;
    },
    setAccounts(accountsInfo: Account[]): void {
      Persistent.setLocal(ACCOUNTS as any, accountsInfo as any);
      this.accounts = accountsInfo;
    },
    setChains(chainInfo: []): void {
      this.chains = chainInfo;
    },
    setAlreadyConnectedWallets(acw_list: []): void {
      this.alreadyConnectedWallets = acw_list;
    },
    setLastConnectionTimestamp(lct_num: number): void {
      this.lastConnectionTimestamp = lct_num;
    },
  },
});

export function useWalletStoreWithOut() {
  return useWalletStore(store);
}
