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
        this.options = ['red', 'blue', 'fuchsia', 'cyan', 'green']
        this.changeColour()
    }
    changeColour() {
        const name = this.option
        // this.data = data.filter(d => d.name === name)
        const promise = this.service.fetch(name)
        this.$q.when(promise).then(data => {
            if (data[0]) {
                this.data = data[0]
                this.scale = 'Supplied by API'
            } else if (materialColours[name + '50']) {
                this.data = materialColourScale(name)
                this.scale = 'Supplied by Material UI'
            } else {
                this.data = linearColourScale(name)
                this.scale = 'Filled with Linear interpolation'
            }
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
