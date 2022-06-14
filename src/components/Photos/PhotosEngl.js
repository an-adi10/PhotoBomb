import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {Spinner} from 'react-bootstrap'

function PhotosEngl() {

  const [photourl, setphotourl] = useState('')
  const {id} = useParams()
  useEffect(()=>{
    axios.get(`http://picsum.photos/id/${id}/info`)
    .then((res) => setphotourl(res.data.download_url))
    .catch((err)=>console.log(err.message))
  },[id])

  
  let imgStyle={
    photoStyle:{
    width:'80%',
    height:'80%',
    margin:'80px',
    borderRadius: '8px'
  },
  spinnerDiv:{
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  height:"90vh"
}
}
  return (
    <div>
     {photourl ? <img src={photourl} style={imgStyle.photoStyle} alt='enlarged view'/>:<div style={imgStyle.spinnerDiv}><Spinner animation="grow" /></div>}
    </div>
  )
}

export default PhotosEngl