import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Scene from './components/Scene/Scene'
import Spline from '@splinetool/react-spline'
function App() {
    return (
        <div className='content'>
            <div className='spline'>
                <Spline scene='https://prod.spline.design/3FkfjewmKRMiw8TV/scene.splinecode'/>
            </div>
            <div className='text'>
                <div className='word'>💖Люблю💖</div>
                <div className='word'>💖тебя💖</div>
                <div className='word'>💖Красотка💖</div>
                <div className='word'>&lt;----Это мыыыыы💖💖</div>
            </div>
        </div>
    )
}
export default App
