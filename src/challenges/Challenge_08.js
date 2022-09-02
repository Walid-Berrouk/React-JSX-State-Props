import React from 'react'
import Chemsou from './Challenge_08/chemsou.jpg'
import Abdou from './Challenge_08/abdou.jpg'
import Racim from './Challenge_08/racim.jpg'
import Tarek from './Challenge_08/tarek.jpg'
import DefaultPic from './Challenge_08/default.jpg'


function Challenge_08() {

    const users = [
        {
            id: 0,
            firstName: "Walid",
            codeName: "Maverick",
            age: 19
        },
        {
            id: 1,
            firstName: "Abdeljalil",
            codeName: "Rooster",
            pic: Abdou,
            age: 19
        },
        {
            id: 2,
            firstName: "Rafik",
            codeName: "Payback",
            age: 19
        },
        {
            id: 3,
            firstName: "Tarek",
            codeName: "Bob",
            pic: Tarek,
            age: 23
        },
        {
            id: 4,
            firstName: "Racim",
            codeName: "IronFist",
            pic: Racim,
            age: 20
        },
        {
            id: 5,
            firstName: "Abdrrahmane",
            codeName: "Hawkeye",
            age: 19
        },
        {
            id: 6,
            firstName: "Chemssedine",
            codeName: "Hangman",
            pic: Chemsou,
            age: 19
        },
    ]

    const styles = {
        marginLeft: 25,
        marginBottom: 25,
        borderRadius: 25
      }
      
    const usersList = users.map(user => (
        <div key={user.id} className="border p-20" style={styles}>
            <img src={user.pic ? user.pic : DefaultPic} alt="Picture" width={200} />
            <h1>{user.firstName}</h1>
            <code>{user.codeName}</code>
            <p>{user.age}</p>
        </div>)
    )


  return (
    <div>
        <br />
        <br />
        <section className="">
            <h1 className="">Challenge 08</h1>
            <br />
            <br />
            <div className='border p-20'>
                <h1>This is a list Component</h1>
                <div className='flex justify-center'>
                    {usersList}
                </div>
            </div>
            <br />
        </section>
    </div>
  )
}

export default Challenge_08