import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

function Contact() {

  let style = {
    outerDiv: {
      display: 'flex',
      justifyContent: 'center',
      alignItem: 'center',
    },
    innerDiv: {
      height: '100%',
      width: '50%',
      marginTop: '2%'
    },
    innerDiv2: {
      height: '100%',
      width: '50%',
      marginTop: '15%',
      marginLeft: '-2%'
    },
    img: {
      width: '100%',
      height: '100%'
    },
    txt: {
      color: '#2b4a6c'
    }
  }

  return (
    <>
      <div style={style.outerDiv}>
        <div style={style.innerDiv}>
          <img src="https://cdn.dribbble.com/users/10549/screenshots/9890798/media/f38f0e4d71d9763c7533641d2418b35b.png?compress=1&resize=1000x750&vertical=top" alt="display-image" style={style.img} />
        </div>
        <div style={style.innerDiv2}>
          <h1 style={{ color: '#2b4a6c', fontFamily: 'monospace' }}>CONTACT US</h1>
          <p style={{ width: '80%', marginLeft: '80px' }}>We continue to discover incredible work from photographers that live and travel all around the world. Here is a selection of some incredible images of rising star photographers, you can get some creative inspiration from. We hope you enjoy this collection. Thanks for allowing us to discover so many incredible images just for you.</p>
          <Button variant="primary">Get Started</Button>
          <div style={{ marginTop: '4%' }}>
            <ButtonGroup aria-label="Basic example" >

              <Button variant="secondary" ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="social-img" style={{ height: '40px' }} /></Button>
              <Button variant="secondary"><img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" alt="social-img" style={{ height: '40px' }} /></Button>
              <Button variant="secondary"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1022px-WhatsApp.svg.png" alt="social-img" style={{ height: '40px' }} /></Button>
              <Button variant="secondary"><img src="https://icones.pro/wp-content/uploads/2021/02/youtube-logo-icone.png" alt="social-img" style={{ height: '40px' }} /></Button>

            </ButtonGroup>
          </div>

        </div>

      </div>
    </>
  )
}

export default Contact