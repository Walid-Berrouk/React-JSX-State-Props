import React from 'react'
import Row from './Challenge_21/Row'

function Challenge_21() {

    const students = [
        {
            id: 0,
            firstName: "Walid",
            lastName: "Berrouk",
            twitter: "@w-berrouk"
        },
        {
            id: 1,
            firstName: "Abdeljalil",
            lastName: "Boudekhana",
        },
        {
            id: 2,
            firstName: "Rafik",
        },
        {
            id: 3,
            firstName: "Tarek",
            codeName: "Lahouaoui",
            twitter: "@tr-lh"
        },
        {
            id: 4,
            firstName: "Mohamed Racim",
            lastName: "Abdi"
        },
        {
            id: 5,
            firstName: "Abdrrahmane",
            lastName: "Bada"
        },
        {
            id: 6,
            firstName: "Chemssedine",
            twitter: "@chemsou-dz"
        },
    ]

    const studentsList = students.map(student => (<Row id={student.id} firstName={student.firstName} lastName={student.lastName} twitter={student.twitter} seeDetails={() => alert(student)} />))


  return (
    <div>
        <br />
        <br />
        <section className="h-full">
            <h1 className="text-center">Challenge 21</h1>
            <br />
            <br />
            <div className='border p-20 flex justify-center'>
                <h1 className='mb-5'>Some of you didn't fill all the information appearantly !</h1>
                    <table className="table table-hover text-center">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Twitter</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentsList}
                        </tbody>
                    </table>
            </div>
            <br />
        </section>
    </div>
  )
}

export default Challenge_21