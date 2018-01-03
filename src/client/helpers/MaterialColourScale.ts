import * as colours from 'material-ui/styles/colors'
import * as _range from 'lodash/range'

export default (name) => {
    let range = [50].concat(_range(100, 1000, 100))
    const shades = range.map(i => ({
        name: i + '',
        hex: colours[name + i]
    }))
    const accents = [100, 200, 400, 700].map(i => ({
        name: i + '',
        hex: colours[name + 'A' + i]
    }))
    return { name, shades, accents }
}
