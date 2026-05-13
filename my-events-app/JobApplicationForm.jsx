import React, { useState } from "react";

export const JobApplicationForm = () => {

  let [jobForm, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    resume: "",
    skills: "",
    experience: "",
    coverLetter: ""
  });

  const handleChange = (e) => {

    let { name, value } = e.target;

    setForm({
      ...jobForm,
      [name]: value
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log("Form submitted..");
    console.log("Job application data : ", jobForm);

    setForm({
      name: "",
      email: "",
      mobile: "",
      resume: "",
      skills: "",
      experience: "",
      coverLetter: ""
    });
  };

  return (
    <div>

      <h1>Job Application Form</h1>

      <form onSubmit={handleSubmit}>

        <label>Personal Details :</label>
        <br /><br />

        name :<input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={handleChange}
          value={jobForm.name}
        />
        <br /><br />

        email: <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
          value={jobForm.email}
        />
        <br /><br />

        mobile: <input
          type="text"
          name="mobile"
          placeholder="Enter your mobile number"
          onChange={handleChange}
          value={jobForm.mobile}
        />
        <br /><br />

        <label>Resume Upload :</label>
        <br /><br />

        resume: <input
          type="file"
          name="resume"
          onChange={handleChange}
        />
        <br /><br />

        <label>Skills Section :</label>
        <br /><br />

        skills: <select
          name="skills"
          onChange={handleChange}
          value={jobForm.skills}
        >
          <option value="">Select Skills</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
          <option value="React">React</option>
        </select>

        <br /><br />

        <label>Experience :</label>
        <br /><br />

        experience: <input
          type="text"
          name="experience"
          placeholder="Enter your experience in years"
          onChange={handleChange}
          value={jobForm.experience}
        />

        <br /><br />

        <label>Cover Letter :</label>
        <br /><br />

        coverLetter: <textarea
          name="coverLetter"
          placeholder="Write your cover letter here..."
          onChange={handleChange}
          value={jobForm.coverLetter}
        ></textarea>

        <br /><br />

        <button type="submit">
          Submit Application
        </button>

      </form>

    </div>
  );
};

export default JobApplicationForm;