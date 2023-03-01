import React from 'react';
import right from './stars/right.png'
import left from './stars/left.png'
import { useState } from 'react';

export default function Caroussel(props){
    const photos = props.pic;
    const [index, SetIndex] = useState(0)
    function previous(){
        console.log('ok')
        if (index === 0){
            SetIndex(photos.length -1)
        } else {
            SetIndex(index - 1)
        }
    }
    function next(){
        if ((index + 1) === photos.length){
            SetIndex(0)
        } else {
            SetIndex(index + 1)
        }
    }
    return (
        <div className='caroussel'>
            { photos.length > 1 ? <span onClick={previous} className='left'><img  src={left} alt="previous" /></span> : ""}
            <div className='car-banner' style={{backgroundImage: `url(${photos[index]})`}}></div>
            { photos.length > 1 ? <img className='right' src={right} alt="next" onClick={next} /> : ""}
        </div>
    )
}
