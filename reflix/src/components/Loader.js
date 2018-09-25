import React, { Component } from 'react';
import LoadingScreen from 'react-loading-screen';

class Demo extends React.Component {
    constructor (props) {
      super(props)
  
      this.state = {
        loading: true
      }
    }
  
    componentDidMount () {
      // fake promise
      setTimeout(() =>
        this.setState({ loading: false })
      , 1500)
    }
  
    render () {
      const { loading } = this.state
  
      return (
        <LoadingScreen
        loading={loading}
        bgColor='#696969'
        spinnerColor='#9ee5f8'
        textColor='#676767'
        logoSrc='https://cdn.dribbble.com/users/1056176/screenshots/3394642/r_v02_dribbble.gif'
      >
      </LoadingScreen>
        )
    }
}

export default Demo