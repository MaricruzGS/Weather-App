import React from 'react'

const Loader = () => {
    return (
       
             <section>
                <h1 className='loader__name'>Weather App</h1>
                <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
             
             </section>
    )
}

export default Loader