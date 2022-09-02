import React from 'react'

function Challenge_19({check, setCheck}) {


  return (
    <div>
        <br />
        <br />
        <section className="h-full">
            <h1 className="text-center">Challenge 19</h1>
            <br />
            <br />
            <div className='border p-20 flex flex-column justify-center'>
                <h1 className='mb-5'>I'm a little boy, but i can have an big influence on my mother !</h1>
                <div className="form-check form-switch form-switch-xl mx-auto">
                    <input className="form-check-input mt-2 me-3" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={check} onClick={() => setCheck(!check)} />
                    <label className="form-check-label display-6" for="flexSwitchCheckDefault">Check it out here !</label>
                </div>
            </div>
            <br />
        </section>
    </div>
  )
}

export default Challenge_19