import * as d3 from 'd3'
import * as _range from 'lodash/range'

export default (name) => {
    const scale = d3.scale.linear().domain([0, 1000]).range(['rgb(255, 255, 255)', d3.rgb(name)])
    let range = [50].concat(_range(100, 1000, 100))
    const shades = range.map(i => ({
        name: i + '',
        hex: scale(i)
    }))
    return { name, shades }
}
