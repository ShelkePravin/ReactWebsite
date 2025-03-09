import React from 'react'
import './VedioPlayer.css'
import video from '../../assets/collage-vedio.mp4'
import { useRef } from 'react'

const VedioPlayer = ({playState, setPlayState}) =>{

    const player = useRef(null);

    const closePlayer = () => {
        if(e.target === player.current){
            setPlayState(false);
        }
    }

  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VedioPlayer
