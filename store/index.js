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
    favorites: ['DOGE', 'ZIL', 'BAT', 'SUSHI', 'ADA'],
    favoritesData: [],
    history: {
      transactions: '',
    },
  },
  coinData: {
    allData: [],
    topMovers: [],
    gainers: [],
    losers: [],
  }
});

export const mutations = {
  addCoinData(state, payload) {
    state.coinData.gainers = payload.filter((coin) => coin.USD.PRICE > coin.USD.OPEN24HOUR);
    state.coinData.losers = payload.filter((coin) => coin.USD.PRICE < coin.USD.OPEN24HOUR);
    state.coinData.allData.push(payload);
  },
  addTopMovers(state) {
    // Top Gainers
    const gainersRef = [...state.coinData.gainers];
    const sortTopGainers = gainersRef.sort((a, b) => {
      const current = parseFloat(a.USD.CHANGEPCT24HOUR);
      const next = parseFloat(b.USD.CHANGEPCT24HOUR);
      return current - next;
    });
    const top = sortTopGainers.slice(-3).reverse();
    // Top Losers
    const losersRef = [...state.coinData.losers];
    const sortTopLosers = losersRef.sort((a, b) => {
      const current = parseFloat(a.USD.CHANGEPCT24HOUR);
      const next = parseFloat(b.USD.CHANGEPCT24HOUR);
      return current - next;
    });
    const bottom = sortTopLosers.slice(0, 3);
    state.coinData.topMovers = top.concat(bottom);
  },
  addFavorites(state) {
    const allCoins = [...state.coinData.allData];
    state.userData.favorites.forEach((coin) => {
      const findCoin = allCoins[0].find((obj) => obj.USD.FROMSYMBOL === coin);
      if (findCoin) {
        state.userData.favoritesData.push(findCoin);
      }
    });
  },
};

const coin_data_api = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,ADA,XRP,DOGE,SHIB,ZIL,BNB,MATIC,MANA,SOL,LINK,VET,ONE,ATOM,CRV,SUSHI,ENJ,AVAX,OXT,BAT,ALGO,EOS,XTZ,AMP,HBAR,LTC,GRT,HNT,XLM,DOT,OMG,NANO,DOT,EGLD,VTHO,XLM,BCH,STORJ,ZEC,USDC,COMP,FIL,1INCH,MKR,RVN,AXS,ICX,YFI,NEO,UNI,WAVES,ZEN,CTSI,BAND,IOTA,QTUM,ETC,AAVE,REP,ONT,DASH,ZRX,DAI,KNC,PAXG&tsyms=USD';

export const actions = {
  async getCoinData({ commit }, state) {
    const dataRes = await axios.get(coin_data_api).then((res) => res.data.DISPLAY);
    const keys = Object.keys(dataRes);
    const data = [];
    keys.forEach((key) => {
      data.push(dataRes[key]);
    });
    commit('addCoinData', data);
    commit('addTopMovers');
    commit('addFavorites');
  },
};