// Packages
import React from 'react'
import ReactDOM from 'react-dom'

// Ours
import Title from './components/title'

const anchorWelcome = document.querySelector('#welcome-to-eyes > div')

const Contents = React.createClass({
  render() {
    return (<section id='content'><div id='logo'><img src='../assets/icons/icon.png' /><h1>rabbots.io</h1></div></section>)
  }
})

const mainStyles = {
  height: 'inherit'
}

if (anchorWelcome) {
  ReactDOM.render((
    <main style={mainStyles}>
      <Title/>
      <Contents/>
    </main>
  ), anchorWelcome)
}
