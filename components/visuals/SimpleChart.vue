<template>
  <div :class="getCoinId">
    <svg></svg>
  </div>
</template>

<script>
// import * as d3 from 'd3';

export default {
  name: 'SimpleChart',
  data() {
    return {
      chartData: [],
      fullCoinData: [],
    };
  },
  props: {
    coinReq: String,
    comp: String,
    upOrDown: String,
  },
  // ************************************************************************************
  mounted() {
    axios.get(`https://min-api.cryptocompare.com/data/v2/histohour?fsym=${this.coinReq}&tsym=USD&limit=24`)
      .then((res) => {
        this.fullCoinData = res;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.getChartData();
        this.retrieveGraph(this.chartData);
      });
  },
  computed: {
    getCoinId() {
      const id = this.coinReq.replace(/[0-9]/g, '');
      return `${this.comp}-${id}`;
    },
  },
  methods: {
    // ************************************************************************************
    retrieveGraph(data) {
      const svgWidth = 40;
      const svgHeight = 30;
      const margin = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      };
      const width = svgWidth - margin.left - margin.right;
      const height = svgHeight - margin.top - margin.bottom;
      // Select Element
      const svg = d3.select(`.${this.getCoinId}`)
        .select('svg')
        .attr('width', svgWidth)
        .attr('height', svgHeight);
      const g = svg.append('g');
      const x = d3.scaleTime().rangeRound([0, width]);
      const y = d3.scaleLinear().rangeRound([height, 0]);
      const line = d3.line()
        .x((d) => x(d.date))
        .y((d) => y(d.value));
      x.domain(d3.extent(data, (d) => d.date));
      y.domain(d3.extent(data, (d) => d.value));
      g.append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', () => {
          if (this.upOrDown === 'down') {
            return 'rgb(248, 73, 96)';
          }
          return 'rgb(2, 192, 118)';
        })
        .attr('stroke-linejoin', 'round')
        .attr('stroke-linecap', 'round')
        .attr('stroke-width', 1)
        .attr('d', line);
    },
    // ************************************************************************************
    getChartData() {
      this.fullCoinData.forEach((coin) => {
        const { time } = coin;
        const price = coin.close;
        this.chartData.push({
          date: time,
          value: price,
        });
      });
    },
    // ************************************************************************************
  },
};
</script>
