/**
 * Landing page component.
 */
import React from 'react'
import MainComponent from 'model/component/main.component'

import './landing.component.css'

import {getCitiesStartedWith} from 'model/service/geobytes'

getCitiesStartedWith('Floria')

/**
 * 
 */
export class Landing extends MainComponent {

	/**
   * 
   */
  render() {
    return <div></div>
  }
}
