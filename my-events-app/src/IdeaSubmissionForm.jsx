import  { useState} from "react";

export const IdeaSubmissionForm = () => {

    let [ideaForm ,setIdeaForm] = useState({
        ideaTitle : "",
        ideaDescription : "",
        category : "",
        supportingDocument : ""
    })

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setIdeaForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted..");
        console.log("Idea data : " , ideaForm);
        setIdeaForm({
            ideaTitle : "",
            ideaDescription : "",
            category : "",
            supportingDocument : ""
        })

        // Clear the form fields after submission
        console.log("Form cleared after submission..");

        // Handle form submission logic here
    };

  return (
    <div>
        <h1>Idea Submission Form</h1>
        <form onSubmit={handleSubmit}>
            <label>Idea Title : </label>
            <input type="text" name="ideaTitle" placeholder="Enter your idea title" onChange={handleChange} value={ideaForm.ideaTitle}/><br/><br/>

            <label>Idea Description : </label>
            <textarea name="ideaDescription" placeholder="Enter your idea description" onChange={handleChange} value={ideaForm.ideaDescription}></textarea><br/><br/>

            <label>Category:</label>
            <select name="category" onChange={handleChange} value={ideaForm.category}>
                <option value="">Select Category</option>
                <option value="Technology">Technology</option>
                <option value="Business">Business</option>
                <option value="Healthcare">Healthcare</option>
            </select><br/><br/>

            <label>Upload Supporting Document:</label>
            <input type="file" name="supportingDocument" onChange={handleChange} value={ideaForm.supportingDocument}/><br/><br/>

            <button type="submit">Submit Idea</button>
        </form>
    </div>
  )
}
