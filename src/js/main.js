'use strict'

console.log('S>>>')

import Collapse from 'bootstrap/js/dist/collapse'
import Dropdown from 'bootstrap/js/dist/dropdown'
import Tab from 'bootstrap/js/dist/tab'
import Popover from 'bootstrap/js/dist/popover'
import Button from 'bootstrap/js/dist/button'
import Offcanvas from 'bootstrap/js/dist/offcanvas'
import Modal from 'bootstrap/js/dist/modal'
import Alert from 'bootstrap/js/dist/alert'

// Tiny Slider
import { tns } from 'tiny-slider/src/tiny-slider'

var slider = tns({
  container: '.my-slider',
  items: 3,
  slideBy: 'page',
  autoplay: false,
})

import { fslightbox } from 'fslightbox'
