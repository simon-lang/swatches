import * as d3 from 'd3'

export default d3.scale.quantile().domain([0, 1000]).range(['#000000', '#ffffff'])
