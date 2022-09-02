import React, { useState } from 'react'
import Webcam from "react-webcam";

function Discovery_Challenge() {

    const [check, setCheck] = useState(false)


  return (
    <div>
        <br />
        <br />
        <section className="">
            <h1 className="text-center">Discovery Challenge</h1>
            <br />
            <br />
            <div className='border p-20 flex flex-column justify-center'>
                <h1>What can this Box contain ?</h1>
                <div className="form-check form-switch form-switch-xl mx-auto">
                    <input className="form-check-input mt-2 me-3" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={check} onClick={() => setCheck(!check)} />
                    <label className="form-check-label display-6" for="flexSwitchCheckDefault">Toggle this switch to find out</label>
                </div>
                {check ? 
                    <Webcam height={400} width={"50%"} className="mx-auto" />
                : 
                    <div className='h-40 w-50 bg-secondary mx-auto'>
                    </div>
                }
                
            </div>
            <br />
        </section>
    </div>
  )
}

export default Discovery_Challenge