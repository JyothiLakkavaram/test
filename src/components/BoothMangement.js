import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Button, Modal, ModalBody } from "react-bootstrap";

const BoothMangement = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    phone: "",
    companyName: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    

    let isValid = true;

    if (firstName === '') {
      setFirstNameError('First Name is required');
      isValid = false;
    } else {
      setFirstNameError('');
    }

    if (lastName === '') {
      setLastNameError('Last Name is required');
      isValid = false;
    } else {
      setLastNameError('');
    }

    if (gender === '') {
      setGenderError('Gender is required');
      isValid = false;
    } else {
      setGenderError('');
    }

    if (email === '') {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Invalid email format');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (phone === '') {
      setPhoneError('Phone is required');
      isValid = false;
    } else if (!/^\d{10}$/.test(phone)) {
      setPhoneError('Invalid phone number');
      isValid = false;
    } else {
      setPhoneError('');
    }

    if (companyName === '') {
      setCompanyNameError('Company Name is required');
      isValid = false;
    } else {
      setCompanyNameError('');
    }

    if (isValid) {
     //
    }
  }



  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [users, setUsers] = useState([]);
  const [totalElements, setTotalElements] = useState();
  const productsPerPage = [10, 20, 40];
  const [modal, showModal] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [genderError, setGenderError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [companyNameError, setCompanyNameError] = useState('');

  useEffect(() => {
    axios.get(`https://dummyjson.com/users?limit=${pageSize}&skip=${pageNumber * pageSize}`)
      .then(res => {
        setTotalElements(res.data.total);
        setUsers(res.data.users);
        // console.log(res.data)
      });
  }, [])
  const handleModal = () => {
    showModal(!modal);
  }
  const handleReset = () => {

    showModal(!modal)
  }
  return (
    <div className='boothagentmanagement'>
      <header className='boothagent-header'>
        <h5>Booth Agent Management</h5>
        <div className='bootagent-buttons'>
          <button type="button" className='assign-voters'>Assign Voters</button>
          <button type="button" className='add-users'>+ Add Users</button>
          {/* <span className='icon-spreadsheet'><i className={bx BxsFileSpreadsheet}></i></span> */}
          {/* <span className="icon-pdf"><i className={'bx bxs-file-spreadsheet'}></i></span> */}
        </div>
      </header>
      <div className='cards'>
        <div className="row">
          <div className="col-sm-4">
            <div className="card" id="pooling-booths">
              <div className="card-body">
                <h5 className="card-title">Total Pooling Booths</h5>
                <div className='card-details'>
                  <div>239</div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card" id="mandals-town">
              <div className="card-body">
                <h5 className="card-title">Total Mandals/Town</h5>
                <div className='card-details'>
                  <div>4</div>
                  <div>
                    {/* <FontAwesomeIcon icon="fa-solid fa-building" /> */}
                    <i class="fa-solid fa-building"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card" id="villages">
              <div className="card-body">
                <h5 className="card-title">Total Villages</h5>
                <div className='card-details'>
                  <div>60</div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="card" id="volunteers">
              <div className="card-body">
                <h5 className="card-title">Total Volunteers</h5>
                <div className='card-details'>
                  <div>478</div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card" id="male-volunteers">
              <div className="card-body">
                <h5 className="card-title">Total Male Volunteers</h5>
                <div className='card-details'>
                  <div>239</div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card" id="female-volunteers">
              <div className="card-body">
                <h5 className="card-title">Total Female Volunteers</h5>
                <div className='card-details'>
                  <div>239</div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {users.length > 0 ? (
        <div class="table-responsive">
          <table class="table">
            <thead className=''>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Gender</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Company Name</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users?.map(user => (
                <tr key={user.id}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.gender}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.company.name}</td>
                  <td style={{ cursor: "pointer" }} onClick={() => handleModal(user.firstName, user.lastName, user.gender, user.email, user.phone, user.company.name)}>Edit</td>
                </tr>
              ))}
            </tbody>
            <Modal
              size="xl"
              scrollable
              show={modal}
              onHide={() => handleModal()}
            >
              <Modal.Header closeButton>
                <strong>User Details</strong>
              </Modal.Header>

              <div className="container">
                <form>
                  <div className="row my-2">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                        {firstNameError}
                      </div>
                      <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                        {lastNameError}
                      </div>
                      <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <select
                          className="form-control"
                          id="gender"
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                        {genderError}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        {emailError}
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                        {phoneError}
                      </div>
                      <div className="form-group">
                        <label htmlFor="companyName">Company Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          required
                        />
                        {companyNameError}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <Modal.Footer>
                <Button
                  variant="default"
                  onClick={() => { handleReset() }}
                >
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {handleSubmit()}}
                >
                  Submit
                </Button>

              </Modal.Footer>
            </Modal>
          </table>

        </div>) : null}
    </div>
  )
}

export default BoothMangement