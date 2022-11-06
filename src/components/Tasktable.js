import * as React from "react";
import { useState} from "react";
import {Link} from 'react-router-dom';
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import { Taskheader } from "./Taskheader";
import jsonData from "./data.json";


export function Tasktable() {
  
  const [inputArr, setInputArr] = useState(jsonData);

  const [inputData, setInputData] = useState({
    taskName: "",
    time: "",
    date: "",
    assignedTo: "",
    assignedBy: "",
    deadline: "",
    priority: " ",
  });

  function handleChange(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  let { taskName, time, date, assignedTo, assignedBy, deadline, priority } = inputData;

  function handlesubmit(e) {
    e.preventDefault();

    const date = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});

    const time = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })


    setInputArr([
      ...inputArr,
      { taskName, time, date, assignedTo, assignedBy, deadline, priority },
    ]);
  
    setInputData({
      taskName: "",
      time: "",
      date: "",
      assignedTo: "",
      assignedBy: "",
      deadline: "",
      priority: " ",
    });

  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 col-sm-12">
          <Taskheader />
        </div>
        <div className="col-md-4 col-sm-12">
          <Stack direction="row">
            <Button
              type="button"
              className="btn btn-danger w-100 mt-4"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@mdo"
              variant="contained"
            >
              {<AddIcon />}
              <span id="textadd">Add New Task</span>
            </Button>

            <div
              className="modal fade modal-xl "
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Add Task
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="row">
                        <div className="col-4">
                          <div className="mb-3">
                            <label
                              htmlFor="recipient-name"
                              className="col-form-label"
                            >
                              Task Name:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Get Appointment letter from HR"
                              id="recipient-name"
                              name="taskName"
                              value={inputData.taskName}
                              onChange={handleChange}
                              style={{ backgroundColor: "#E4ECF7" }}
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="message-text"
                              className="col-form-label"
                            >
                              Assigned By:
                            </label>
                            <input
                              className="form-control"
                              id="message-text"
                              placeholder="From HR"
                              name="assignedBy"
                              value={inputData.assignedBy}
                              onChange={handleChange}
                              style={{ backgroundColor: "#E4ECF7" }}
                            ></input>
                          </div>
                          {/* <div className='mb-3'>
                                            <label htmlFor="recipient-name" className="col-form-label">Related To:</label>
                                            <input type="text" className="form-control" id="recipient-name" placeholder='HR Departmant' style={{backgroundColor:"#E4ECF7"}}/>
                                        </div> */}
                        </div>

                        <div className="col-4">
                          <div className="mb-3">
                            <label
                              htmlFor="recipient-name"
                              className="col-form-label"
                            >
                              Assign To:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Vishal"
                              id="recipient-name"
                              name="assignedTo"
                              value={inputData.assignedTo}
                              onChange={handleChange}
                              style={{ backgroundColor: "#E4ECF7" }}
                            />
                          </div>
                          <div className="mb-3">
                            <div
                              className="alert alert-danger alert-dismissible fade show"
                              role="alert"
                            >
                              <strong> Gautam Sharma</strong>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="alert"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div
                              className="alert alert-success alert-dismissible fade show"
                              role="alert"
                            >
                              <strong> Harshad Joshi</strong>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="alert"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div
                              className="alert alert-warning alert-dismissible fade show"
                              role="alert"
                            >
                              <strong> Kavish sen</strong>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="alert"
                                aria-label="Close"
                              ></button>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="mb-3">
                            <label
                              htmlFor="recipient-name"
                              className="col-form-label"
                            >
                              Set Deadline:
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              id="recipient-name"
                              name="deadline"
                              value={inputData.deadline}
                              onChange={handleChange}
                              style={{ backgroundColor: "#E4ECF7" }}
                            />
                          </div>
                          <div className="mb-3">
                            <div className="form-check mb-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="priority"
                                id="High"
                                value={
                                  inputData.priority === true ? "low" : "High"
                                }
                                onChange={handleChange}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="High"
                              >
                                {" "}
                                High{" "}
                              </label>
                            </div>

                            <div className="form-check mb-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="priority"
                                id="Low"
                                value={
                                  inputData.priority === false ? "Low" : "high"
                                }
                                onChange={handleChange}
                              />
                              <label className="form-check-label" htmlFor="Low">
                                Low{" "}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-light"
                          data-bs-dismiss="modal"
                        >
                          Cancel
                        </button>
                       <Link to="/myapp">
                        <button data-bs-dismiss="modal" className="btnAdd" onClick={handlesubmit}>
                          Add
                        </button>
                        </Link> 
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Stack>
        </div>
      </div>
    
      <div className="row">
        <div className="col-md-12 col-sm-12">
        <div className="table">
        <table
          id="example"
          className="table table-resposive table-hover bg-light"
        >
          <thead>
            <tr>
              <th>Task</th>
              <th>Time</th>
              <th>Date</th>
              <th>Assigned By</th>
              <th>Assigned To</th>
              <th>Deadline</th>
              <th>Status</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
                <td>BGV of new Candidates</td>
                <td>2.00 PM</td>
                <td>Fri, 21 May 22</td>
                <td>Manohar Phatak</td>
                <td>Ramesh Kumar</td>
                <td>Sat, 22 July 22</td>
                <td><i className="bi bi-circle-fill text-danger"></i></td>
                <td>High</td>
            </tr>
            <tr>
                <td>Onboard new Client</td>
                <td>4.00 PM</td>
                <td>Mon, 14 June 22</td>
                <td>Aniket Sherma</td>
                <td>Suress Rathod</td>
                <td>Wed, 25 Aug 22</td>
                <td><i className="bi bi-circle-fill texr-danger text-warning"></i></td>
                <td>Medium</td>
            </tr>
            <tr>
                <td>Onboard new Client</td>
                <td>4.00 PM</td>
                <td>Mon, 14 June 22</td>
                <td>Avez Qazi</td>
                <td>Rohit Sherma</td>
                <td>Wed, 25 Aug 22</td>
                <td><i className="bi bi-circle-fill text-success"></i></td>
                <td>low</td>
            </tr>
            <tr>
                <td>BGV of new Candidates</td>
                <td>2.00 PM</td>
                <td>Fri, 21 May 22</td>
                <td>Manohar Phatak</td>
                <td>Ramesh Kumar</td>
                <td>Sat, 22 July 22</td>
                <td><i className="bi bi-circle-fill text-danger"></i></td>
                <td>High</td>
            </tr>
            <tr>
                <td>Onboard new Client</td>
                <td>4.00 PM</td>
                <td>Mon, 14 June 22</td>
                <td>Aniket Sherma</td>
                <td>Suress Rathod</td>
                <td>Wed, 25 Aug 22</td>
                <td><i className="bi bi-circle-fill texr-danger text-warning"></i></td>
                <td>Medium</td>
            </tr>
            <tr>
                <td>Onboard new Client</td>
                <td>4.00 PM</td>
                <td>Mon, 14 June 22</td>
                <td>Avez Qazi</td>
                <td>Rohit Sherma</td>
                <td>Wed, 25 Aug 22</td>
                <td><i className="bi bi-circle-fill text-success"></i></td>
                <td>low</td>
            </tr>
            <tr>
                <td>BGV of new Candidates</td>
                <td>2.00 PM</td>
                <td>Fri, 21 May 22</td>
                <td>Manohar Phatak</td>
                <td>Ramesh Kumar</td>
                <td>Sat, 22 July 22</td>
                <td><i className="bi bi-circle-fill text-danger"></i></td>
                <td>High</td>
            </tr>
            <tr>
                <td>Onboard new Client</td>
                <td>4.00 PM</td>
                <td>Mon, 14 June 22</td>
                <td>Aniket Sherma</td>
                <td>Suress Rathod</td>
                <td>Wed, 25 Aug 22</td>
                <td><i className="bi bi-circle-fill texr-danger text-warning"></i></td>
                <td>Medium</td>
            </tr>
            <tr>
                <td>BGV of new Candidates</td>
                <td>2.00 PM</td>
                <td>Fri, 21 May 22</td>
                <td>Manohar Phatak</td>
                <td>Ramesh Kumar</td>
                <td>Sat, 22 July 22</td>
                <td><i className="bi bi-circle-fill text-danger"></i></td>
                <td>High</td>
            </tr>
            <tr>
                <td>Onboard new Client</td>
                <td>4.00 PM</td>
                <td>Mon, 14 June 22</td>
                <td>Aniket Sherma</td>
                <td>Suress Rathod</td>
                <td>Wed, 25 Aug 22</td>
                <td><i className="bi bi-circle-fill texr-danger text-warning"></i></td>
                <td>Medium</td>
            </tr>
            <tr>
                <td>BGV of new Candidates</td>
                <td>2.00 PM</td>
                <td>Fri, 21 May 22</td>
                <td>Manohar Phatak</td>
                <td>Ramesh Kumar</td>
                <td>Sat, 22 July 22</td>
                <td><i className="bi bi-circle-fill text-danger"></i></td>
                <td>High</td>
            </tr>
            <tr>
                <td>Onboard new Client</td>
                <td>4.00 PM</td>
                <td>Mon, 14 June 22</td>
                <td>Aniket Sherma</td>
                <td>Suress Rathod</td>
                <td>Wed, 25 Aug 22</td>
                <td><i className="bi bi-circle-fill texr-danger text-warning"></i></td>
                <td>Medium</td>
            </tr>
            <tr>
                <td>Onboard new Client</td>
                <td>4.00 PM</td>
                <td>Mon, 14 June 22</td>
                <td>Avez Qazi</td>
                <td>Rohit Sherma</td>
                <td>Wed, 25 Aug 22</td>
                <td><i className="bi bi-circle-fill text-success"></i></td>
                <td>low</td>
            </tr>
            <tr>
                <td>BGV of new Candidates</td>
                <td>2.00 PM</td>
                <td>Fri, 21 May 22</td>
                <td>Manohar Phatak</td>
                <td>Ramesh Kumar</td>
                <td>Sat, 22 July 22</td>
                <td><i className="bi bi-circle-fill text-danger"></i></td>
                <td>High</td>
            </tr>
            <tr>
                <td>Onboard new Client</td>
                <td>4.00 PM</td>
                <td>Mon, 14 June 22</td>
                <td>Aniket Sherma</td>
                <td>Suress Rathod</td>
                <td>Wed, 25 Aug 22</td>
                <td><i className="bi bi-circle-fill texr-danger text-warning"></i></td>
                <td>Medium</td>
            </tr>
            <tr>
                <td>BGV of new Candidates</td>
                <td>2.00 PM</td>
                <td>Fri, 21 May 22</td>
                <td>Manohar Phatak</td>
                <td>Ramesh Kumar</td>
                <td>Sat, 22 July 22</td>
                <td><i className="bi bi-circle-fill text-danger"></i></td>
                <td>High</td>
            </tr>
            <tr>
                <td>Onboard new Client</td>
                <td>4.00 PM</td>
                <td>Mon, 14 June 22</td>
                <td>Aniket Sherma</td>
                <td>Suress Rathod</td>
                <td>Wed, 25 Aug 22</td>
                <td><i className="bi bi-circle-fill texr-danger text-warning"></i></td>
                <td>Medium</td>
            </tr>
            <tr>
                <td>BGV of new Candidates</td>
                <td>2.00 PM</td>
                <td>Fri, 21 May 22</td>
                <td>Manohar Phatak</td>
                <td>Ramesh Kumar</td>
                <td>Sat, 22 July 22</td>
                <td><i className="bi bi-circle-fill text-danger"></i></td>
                <td>High</td>
            </tr>
            <tr>
                <td>Onboard new Client</td>
                <td>4.00 PM</td>
                <td>Mon, 14 June 22</td>
                <td>Aniket Sherma</td>
                <td>Suress Rathod</td>
                <td>Wed, 25 Aug 22</td>
                <td><i className="bi bi-circle-fill texr-danger text-warning"></i></td>
                <td>Medium</td>
            </tr> */}
            {inputArr.map((info, ind) => {
              return (
                <tr key={ind}>
                  <td>{info.taskName}</td>
                  <td>{info.time}</td>
                  <td>{info.date}</td>
                  <td>{info.assignedTo}</td>
                  <td>{info.assignedBy}</td>
                  <td>{info.deadline}</td>
                  <td>
                    {info.priority === "High" ? (
                      <i className="bi bi-circle-fill text-warning"></i>
                    ) : (
                      <i className="bi bi-circle-fill text-danger"></i>
                    )}
                  </td>
                  <td>{info.priority}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th>Task</th>
              <th>Time</th>
              <th>Date</th>
              <th>Assigned By</th>
              <th>Assigned To</th>
              <th>Deadline</th>
              <th>Status</th>
              <th>Priority</th>
            </tr>
          </tfoot>
        </table>
      </div>
        </div>
      </div>
     
    </div>
  );
}
