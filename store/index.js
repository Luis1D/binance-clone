import axios from "axios";

export const state = () => ({
  userData: {
    portfolio: {
      value: 26000,
      fiatHoldings: [
        {
          name: 'US Dollar',
          coin: 'USD',
          balance: 14000
        },
      ],
      cryptoHoldings: [
        {
          name: 'Zilliqa',
          coin: 'ZIL',
          totalCoins: 40000,
          balance: 2400,
        },
        {
          name: 'Dogecoin',
          coin: 'DOGE',
          totalCoins: 32000,
          balance: 2400,
        },
        {
          name: 'Cardano',
          coin: 'ADA',
          totalCoins: 20000,
          balance: 2400,
        },
        {
          name: 'Brave',
          coin: 'BAT',
          totalCoins: 22000,
          balance: 2400,
        },
        {
          name: 'Binance',
          coin: 'BNB',
          totalCoins: 400,
          balance: 2400,
        },
      ],
    },
    favorites: [],
    history: {
      transactions: '',
    },
  },
  coinData: [],
});

export const mutations = {
  addCoinData(state, payload) {
    state.coinData.push(payload);
  },
};

const coin_data_api = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,ADA,XRP,DOGE,SHIB,ZIL,BNB,MATIC,MANA,SOL,LINK,VET,ONE,ATOM,CRV,SUSHI,ENJ,AVAX,OXT,BAT,ALGO,EOS,XTZ,AMP,HBAR,LTC,GRT,HNT,XLM,DOT,OMG,NANO,DOT,EGLD,VTHO,XLM,BCH,STORJ,ZEC,USDC,COMP,FIL,1INCH,MKR,RVN,AXS,ICX,YFI,NEO,UNI,WAVES,ZEN,CTSI,BAND,IOTA,QTUM,ETC,AAVE,REP,ONT,DASH,ZRX,DAI,KNC,PAXG&tsyms=USD';

export const actions = {
  async getCoinData({ commit }) {
    console.log('ran');
    const data = await axios.get(coin_data_api).then((res) => res.data.DISPLAY);
    commit('addCoinData', data);
  },
};