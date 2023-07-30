import { useEffect, useState } from 'react'
import './Style.css'

function App() {
  const [img1, setImg1] = useState(25)
  const [img2, setImg2] = useState(36)
  const [img3, setImg3] = useState(37)
  const [img4, setImg4] = useState(38)

  const image1 = `https://picsum.photos/id/${img1}/200/300`
  const image2 = `https://picsum.photos/id/${img2}/200/300`
  const image3 = `https://picsum.photos/id/${img3}/200/300`
  const image4 = `https://picsum.photos/id/${img4}/200/300`

function handlerClick(){

  setImg1((prev)=> prev + 1)
}
useEffect(()=>{
  setTimeout(() => {
    setImg2(img1+1)
  }, 500);
},[img1])

useEffect(()=>{
  setTimeout(() => {
    setImg3(img2+1)
  }, 500);
},[img2])

useEffect(()=>{
  setTimeout(() => {
    setImg4(img3+1)
  }, 500);
},[img3])





  return (
    <>
      <div className='container'>
        <div className='imgPlace1'>
          <div className='imgOne'>
            <img className='images' src={image1} />
          </div>
          <div className='imgTwo'>
            <img className='images' src={image2} />
          </div>     
        </div>
        <button onClick={()=>handlerClick()} className='startButton'>START</button>
        <div className='imgPlace2'>
          <div className='imgThree'>
            <img className='images' src={image4} />
          </div>
          <div className='imgFour'>
            <img className='images' src={image3} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
