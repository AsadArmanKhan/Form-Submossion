import React, { useState } from 'react'


export default function Layout() {
  // event.preEventDefault()
  const [UserData, setUserData] = useState([{ name: 'asad', email: 'asadarmankhan@gmail.com', phone: '85285260' }])
  const adduser = (event) => {
    event.preventDefault();
    // console.log(event.target.name.value)
    // console.log(event.target.email.value)
    // console.log(event.target.phone.value)
    const data = [...UserData]
    // console.log(data)
    const obj = {
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value
    }
    data.push(obj)
    // // data.push(event.target.email.value)
    // // data.push(event.target.phone.value)
    setUserData(data)
    event.target.reset();
    // setUserData(UserData.push(event.target.name.value ))
  }
  const deleteUser = (index) => {
    const data = [...UserData]
    data.splice(index, 1);
    setUserData(data);


    console.log(data);
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row gap-3 ">
          {/* Form Section */}
          <div className="col-md-3 border shadow py-4">
            <h3>Input Form</h3>
            <form id="userForm" onSubmit={adduser}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="name" required="" name='name' />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required=""
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  required=""
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            <div id="submittedMessage" className="alert alert-success mt-3 d-none">
              Form Submitted Successfully!
            </div>
          </div>
          {/* Table Section */}
          <div className="col-md-8 shadow border py-4">
            <h3>User Data</h3>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody id="userTableBody">
                {

                  UserData.map(
                    (user, index) => {
                      return (
                        <tr>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.phone}</td>
                          {/* <td><button className='btn btn-primary'>Active</button></td> */}
                          <td><button onClick={() => deleteUser(index)} className='btn btn-danger' >Delete</button></td>
                        </tr>
                      );
                      // console.log(user);
                    }
                  )
                }
                <tr>
                  {/* <td>John Doe</td>
                  <td>johndoe@example.com</td> */}
                  {/* <td><button className='btn btn-primary'>Active</button></td> */}
                  {/* <td><button className='btn btn-danger'>Delete</button></td> */}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <td className=''>
  <button className="btn btn-danger btn-sm delete-btn ">
    Delete   </button>   <button className="btn btn-success btn-sm status-btn">     Active   </button>
</td>  */}
    </>

  )
}
// UserList = () => {
//   return(
//      <tr>
//                           <td>{user.name}</td>
//                           <td>{user.email}</td>
//                           <td>{user.phone}</td>
//                           {/* <td><button className='btn btn-primary'>Active</button></td> */}
//                           <td><button className='btn btn-danger'>Delete</button></td>
//                         </tr>

//   )
// }