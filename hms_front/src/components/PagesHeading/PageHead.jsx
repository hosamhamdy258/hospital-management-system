import React from 'react'

const PageHead = ({title}) => {
  return (
    <>
     <section className='Dbg-1'>
        <div className="overlay">      
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="text-center">
                        <span className="text-white">
                           
                        </span>
                        <h1 className='text-capitalize mb-5 text-lg'>
                            {title} 
                        </h1>
                    </div>
                </div>
            </div>
        </div>

    </section>
    </>
  )
}

export default PageHead