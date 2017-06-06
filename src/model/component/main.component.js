/**
 * Main component.
 * All components should extend the main component.
 */
import React from 'react'

/**
 * 
 */
export default class MainComponent extends React.Component {

	/**
	 * 
	 */
  constructor(props) {
    super(props)

    this.state = {
    }
  }
  
  /**
   * 
   */
  componentWillMount() {
  }
  
  /**
   * 
   */
  componentDidMount() {
  }
  
  /**
   * 
   */
  componentWillReceiveProps(nextProps) {
  }
  
  /**
   * 
   */
  shouldComponentUpdate(nextProps, nextState) {
  }
  
  /**
   * 
   */
  componentWillUpdate(nextProps, nextState) {
  }
  
  /**
   * 
   */
  componentDidUpdate(prevProps, prevState) {
  }
  
  /**
   * 
   */
  componentWillUnmount() {
  }
  
  /**
   * 
   */
  setState(updater, [callback]) {
  	super.setState(updater, [callback])
  }
  
  /**
   * 
   */
  forceUpdate() {
  	super.forceUpdate()
  }
}

/**
 * 
 */
//MainComponent.defaultProps = {
//}
