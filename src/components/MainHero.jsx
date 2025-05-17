import React from 'react'

const MainHero = () => {
  return (
    <section className='main-hero ' id='main-hero'>
      <video
        src="/assets/img/accueil.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      >
        <source src="/assets/img/accueil.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  )
}

export default MainHero

