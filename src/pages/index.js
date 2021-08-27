import * as React from "react"
//import { graphql } from "gatsby"

const IndexPage = () => {
  return (
    <div style={{
      margin: '0',
      padding: '0',
      width: '100vw',
      height: '100vh',
      backgroundColor: '#E7E9EB',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',

    }}>
      <img src="https://hennepintech.edu/communications/Logos/HTC-LOGO-VERT-WEB_ORAN-87K.png" style={{width: "30vw"}}/>

      <p>This blog is currently under construction.</p>
      <a href="https://hennepintech.edu">back to HennepinTech.edu</a>
    </div>
  )
}

export default IndexPage

