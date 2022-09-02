import React from 'react'

function Challenge_04() {

    const styles = {
        backgroundColor: 'green',
        color: 'white',
        padding: 20,
        borderRadius: 15
    }

  return (
    <div>
        <br />
        <br />
        <section className="h-full">
            <h1 className="">Challenge 04 (Each One With a different method)</h1>
            <br />
            <br />
            <div className='border p-20'>
                <h1>This is a Container Component</h1>
                {/* Method 1 : Bootstrap */}
                <div className='border p-20 text-danger'>
                    <h2 >I'm a Header Component</h2>
                </div>
                <br />
                {/* Method 2 : Styling Object */}
                <div style={styles}>
                    <p>I'm a Paragraph Compnonent Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, quisquam modi minima dolorum fugit alias officia quidem dolor hic consequatur, aliquid mollitia, ad neque dicta quod molestiae incidunt? Repudiandae, nulla.</p>
                </div>
                <br />
                <div className='border p-20'>
                {/* Method 3 : Styling File */}
                <a
                    className='App-Link'
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    This is a Learn React Anchor Component
                </a>
                </div>
            </div>
            <br />
        </section>
      </div>
  )
}

export default Challenge_04