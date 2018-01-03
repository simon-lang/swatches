require('./app.scss')

import * as _isArray from 'lodash/isArray'
import * as angular from 'angular'

const app = angular.module('swatches', [])

import SwatchService from './services/SwatchService.ts'
app.service('SwatchService', SwatchService)

import SwatchController from './controllers/SwatchController.ts'
app.controller('SwatchController', SwatchController)

import SwatchComponent from './components/SwatchComponent.ts'
app.component('swatch', SwatchComponent)

app.run($rootScope => {
    $rootScope.isArray = _isArray
})

export default app
