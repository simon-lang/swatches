class SwatchService {
    URL: string = 'http://localhost:1337/'
    constructor() {
        console.log('OK');
    }
    fetch(colour) {
        return fetch(this.URL + colour).then(d => d.json())
    }
}

export default SwatchService
