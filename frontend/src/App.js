import React, { useEffect, useState } from 'react'
import DrawArea from './components/DrawArea'


function App() {

  const [image, setImage] = useState('')

  let handleChange = (image) => {
    setImage(image)
  }

  return (
    <DrawArea
      image={image}
      onChange={handleChange}
    />
  )
}

export default App