import './App.css'
import OnClickAndOnchange from './OnClickAndOnchange'
// import EmployeeForm from './EmployeeForm'
// import StudentRegistrationForm from './StudentRegistrationForm'
// import JobApplicationForm from '../JobApplicationForm'
// import { IdeaSubmissionForm } from './IdeaSubmissionForm'
function App() {
 let name = "Kiran"
 //1)Parent to chid:we can directly access the data to the child components 
 //2)Child to Parent:we can access the data from the child components to the parent components 
 //we are using functions to accept that

let[msg , setMsg] =useState("")

  return (
    <>
      <center>
{/* 
        <h1>Welcome to my Events App..</h1> */}

       
        {/* <OnClickAndOnchange/> */}
       <Sum a={10} b={20}/>
       <multiply props={{first: 10, second: 20}}/>
       <difference Komal={{p: 30, q: 10}}/>
       <Greet nm={name}/>
       <Child sendMSG={(msg) => console.log(msg)}/>

        {/* <EmployeeForm/> */}

        {/* <StudentRegistrationForm /> */}
        {/* <IdeaSubmissionForm/> */}

      </center>
    </>
  )
}

export default App