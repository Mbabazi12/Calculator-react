import './App.css'
// import star from '/star.png'
import avatar from '/avatar.jpeg'
import black from '/black adam.jpeg'
import keep from '/house keep.jpeg'
import { useState } from 'react'

function App() {
  const [rotate, setRotate] = useState<boolean>(false);

  const handleRotate = () => {
    setRotate(true);
  };
  return (
    <>
    {/* <div className="wrapper">
    <img src={star} className="star" alt="star logo" />
    <div className='circle'>Hover Me</div>
    </div> */}
    <div className="grass">
    <div className="road">
      <img src={avatar} alt="avatar" className='avatar'/>
      </div>
    <div className="another">
    <div className='circle'>Hover Me</div>
    </div>
      <div className="lines">
      <img src={black} alt="black" className={rotate ? 'rotate' : ''} onClick={handleRotate} />
    </div>
      <div className="house">
        <img src={keep} alt="house keeper" className='keep' />
      </div>
    </div>
    </>
  )
}

export default App








{/* <div>
<a href="https://vitejs.dev" target="_blank">
  <img src={viteLogo} className="logo" alt="Vite logo" />
</a>
<a href="https://react.dev" target="_blank">
  <img src={reactLogo} className="logo react" alt="React logo" />
</a>
</div>
<h1>Vite + React</h1>
<div className="card">
<button onClick={() => setCount((count) => count + 1)}>
  count is {count}
</button>
<p>
  Edit <code>src/App.tsx</code> and save to test HMR
</p>
</div>
<p className="read-the-docs">
Click on the Vite and React logos to learn more
</p> */}

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// import { useState } from 'react'
// const [count, setCount] = useState(0)