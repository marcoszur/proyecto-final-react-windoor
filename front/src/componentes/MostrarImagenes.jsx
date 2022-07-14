import React from 'react'
import { useParams } from 'react-router-dom'
import image1_1 from '../image/fullsize/image1-1.png'
import image1_2 from '../image/fullsize/image1-2.png'
import image1_3 from '../image/fullsize/image1-3.png'
import image1_4 from '../image/fullsize/image1-4.png'
import image1_5 from '../image/fullsize/image1-5.png'
import image1_6 from '../image/fullsize/image1-6.png'

const images = [  image1_1, image1_2, image1_3, image1_4, image1_5, image1_6 ]



const MostrarImagenes = () => {
  const { id } = useParams()
  return (
    <div className='container col-lg-7 col-sm-8'>
         <img className='img' src={images[id]} alt="" />
    </div>
  )
}

export default MostrarImagenes