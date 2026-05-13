import './App.css'

function App() {

  // spread operator
  let arr1 = [1, 2, 3]
  let arr2 = [4, 5, 6]

  let arr = [arr1, arr2]
  console.log("arr = ", arr)

  let arr4 = [...arr1, ...arr2]
  console.log("arr4 =", arr4)

  let person = { age: 21, name: "komal" }
  console.log("person =", JSON.stringify(person))

  let newData = { ...person, name: "Disha" }
  console.log("newData =", JSON.stringify(newData))

  person = { ...person, city: 'pune' }
  console.log("person =", JSON.stringify(person))


  // Employee class
  class Employee {
    constructor(id, name, department, salary) {
      this.id = id;
      this.name = name;
      this.department = department;
      this.salary = salary;
    }
  }

  // Creating employee objects
  const emp1 = new Employee(101, "Rahul", "HR", 35000);
  const emp2 = new Employee(102, "Priya", "IT", 50000);
  const emp3 = new Employee(103, "Amit", "Finance", 45000);
  const emp4 = new Employee(104, "Sneha", "Marketing", 40000);
  const emp5 = new Employee(105, "Karan", "Sales", 38000);

  // Store objects in array
  const employees = [emp1, emp2, emp3, emp4, emp5];

  // loop
  for (let emps of employees) {
    console.log(emps)
  }

  // map
  let map_emp = employees.map((e) => e.name)

  console.log("map_emp =", map_emp)

  let name = "komal";

  return (
    <>
      <h2>Welcome to my app</h2>
      <h1>My name is : {name}</h1>

      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Role</th>
            <th>Salary</th>
          </tr>
        </thead>

        <tbody>
          {
            employees.map((e) => {
              return (
                <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.department}</td>
                  <td>{e.salary}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default App