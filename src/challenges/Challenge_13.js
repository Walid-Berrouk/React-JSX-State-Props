import React, { useState } from 'react'

function Challenge_13() {
    const [value, setValue] = useState("");

    return (
        <div>
        <br />
        <br />
        <section className="h-full">
            <h1 className="">Challenge 13</h1>
            <br />
            <br />
            <div className='border p-20'>
                <input
                type="text"
                placeholder="Enter Text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                />
                <p>Your are typing : {value}</p>
                </div>
            <br />
        </section>
    </div>
    );
}

export default Challenge_13