import textColourScale from '../helpers/TextColourScale.ts'
import linearColourScale from '../helpers/LinearColourScale.ts'
import materialColourScale from '../helpers/MaterialColourScale.ts'
import SwatchService from '../services/SwatchService'
import * as d3 from 'd3'
import * as materialColours from 'material-ui/styles/colors'

class SwatchController {
    $q: any
    data: object
    scale: string
    option: string
    options: string[]
    service: SwatchService
    constructor($attrs, $q, SwatchService) {
        this.$q = $q
        this.service = SwatchService
        this.option = $attrs.colour || 'red'
        // Object.keys(materialColours).map(d => d.slice())
        let optionMap = {}
        Object.keys(materialColours).forEach(colour => {
            const index = colour.search(/[0-9|A]/)
            if (index >= 0) {
                const k = colour.slice(0, index)
                optionMap[k] = true // deduping
            }
        })
        this.options = Object.keys(optionMap) // ['red', 'blue', 'fuchsia', 'cyan', 'green']

        this.changeColour()
    }
    light(name) {
        const scale = materialColourScale(name)
        const shades = scale.shades
        return {
            background: shades ? shades[1].hex : 'black'
            // borderColor: 'transparent'
        }
    }
    dark(name) {
        const scale = materialColourScale(name)
        const shades = scale.shades
        return {
            background: shades ? shades[2].hex : 'black',
            borderColor: shades ? shades[4].hex : 'rgba(0,0,0,0.1)'
        }
    }
    fallback(name) {
        if (materialColours[name + '50']) {
            this.data = materialColourScale(name)
            this.scale = 'supplied by Material UI'
        } else {
            this.data = linearColourScale(name)
            this.scale = 'filled with Linear interpolation'
        }
    }
    changeColour() {
        const name = this.option
        // this.data = data.filter(d => d.name === name)
        const promise = this.service.fetch(name)
        this.$q.when(promise).then(data => {
            if (data[0]) {
                this.data = data[0]
                this.scale = 'supplied by API'
            } else {
                this.fallback(name)
            }
        })
        .catch(err => {
            this.fallback(name)
        })
    }
    style(item) {
        const nameValue = item.name.match(/\d+/g)[0]
        return {
            background: item.hex,
            color: textColourScale(parseInt(nameValue) || 0)
        }
    }
}

export default SwatchController
