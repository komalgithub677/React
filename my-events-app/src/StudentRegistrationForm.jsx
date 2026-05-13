import React, { useState } from 'react'

const StudentRegistrationForm = () => {

  let [studentForm, setStudentForm] = useState({
    name: "",
    email: "",
    mobile: "",
    course: "",
    gender: "",
    address: ""
  })

  const handleChange = (e) => {

    let { name, value } = e.target;

    setStudentForm({
      ...studentForm,
      [name]: value
    })
  }

  const handleSubmit = (e) => {

    e.preventDefault();//preveting from page refresh after form submit

    console.log("Form submitted..");

    console.log("Student data Added : ", studentForm)

    setStudentForm({
      name: "",
      email: "",
      mobile: "",
      course: "",
      gender: "",
      address: ""
    })
  }

  return (
    <div>

      <h1>Student Registration Form 🎓</h1>

      <form onSubmit={handleSubmit}>

        Enter Name :
        <input
          type="text"
          name="name"
          value={studentForm.name}
          onChange={handleChange}
        />

        <br /><br />

        Enter Email :
        <input
          type="email"
          name="email"
          value={studentForm.email}
          onChange={handleChange}
        />

        <br /><br />

        Enter Mobile Number :
        <input
          type="text"
          name="mobile"
          value={studentForm.mobile}
          onChange={handleChange}
        />

        <br /><br />

        Select Course :
        <select
          name="course"
          value={studentForm.course}
          onChange={handleChange}
        >

          <option value="">Select Course</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
          <option value="React">React</option>

        </select>

        <br /><br />

        Select Gender :

        <select
          name="gender"
          value={studentForm.gender}
          onChange={handleChange}
        >

          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>

        </select>

        <br /><br />

        Enter Address :

        <textarea
          name="address"
          value={studentForm.address}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Register
        </button>

      </form>

    </div>
  )
}

export default StudentRegistrationForm