import React from 'react'
import Footer from '../components/Footer'
import "../styles/home.css"

const Locales = () => {
  return (
    <>
    <div>
      <main>
      <section className='local-wrap' id='local-lima'>
        <div className='local'>
            <div className='local-imagen local-container'>
                <img src="https://cdn.pixabay.com/photo/2017/08/06/19/59/people-2595757_1280.jpg" alt="restaurante-imagen"/>
            </div>
            <div className='local-container local-container-text text-right'>
                <h2>Lima - Surco</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>


        <div className='local'>
            
            <div className='local-container local-container-text'>
                <h2>Lima - Pueblo Libre</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='local-imagen local-container text-left'>
                <img src="https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_1280.jpg" alt="restaurante-imagen"/>
            </div>
        </div>
    </section>
    
    </main>
    </div>
    <Footer/>
    </>
  )
}

export default Locales