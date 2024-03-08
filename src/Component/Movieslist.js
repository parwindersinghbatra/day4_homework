import React from 'react'
import './Movieslist.css'

const Movieslist = (props) => {

  return (
    <div className='body_main'>
        
        <div className='box-shadow'>
        <div className='div_span'>
            <img src={props.poster} className='poster'/>
          
            <div><h1>{props.filmName}</h1></div>
            <div style={{color:'#7590B1'}}>{props.Year}<br/></div>
            <div className='filmTime'>{props.Time}<br/></div>
            <div>{props.Type}<br/></div>
            <span>{props.Summary}</span>

        </div>
        
        <img src={props.FirstImg} className='img_shadow'/>
        </div>
   </div>
  )
}

export default Movieslist
