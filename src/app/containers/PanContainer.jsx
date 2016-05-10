import React from 'react'
import Pan from '../components/Pan.jsx'

export default class PanContainer extends React.Component {

  render() {
    return (
      <Pan sounds={this.props.sounds}/>
    )
  }
}