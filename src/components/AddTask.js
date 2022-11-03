import * as React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function IconLabelButtons() {
    return (
        <Stack direction="row">
            <Button type="button" className="btn btn-danger w-100" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" variant="contained">{<AddIcon />}
                <span id="textadd">Add New Task</span>
            </Button>

            <div className="modal fade modal-xl " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Task</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form >
                                <div className="row">
                                    <div className='col-4'>
                                        <div className='mb-3'>
                                            <label htmlFor="recipient-name" className="col-form-label">Task Name:</label>
                                            <input type="text" className="form-control" placeholder='Get Appointment letter from HR' id="recipient-name" style={{backgroundColor:"#E4ECF7"}} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="message-text" className="col-form-label">Description:</label>
                                            <textarea className="form-control" id="message-text" placeholder='Write Description from HR' style={{backgroundColor:"#E4ECF7"}}></textarea>
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor="recipient-name" className="col-form-label">Related To:</label>
                                            <input type="text" className="form-control" id="recipient-name" placeholder='HR Departmant' style={{backgroundColor:"#E4ECF7"}}/>
                                        </div>
                                    </div>

                                    <div className='col-4'>
                                        <div className='mb-3'>
                                            <label htmlFor="recipient-name" className="col-form-label">Assign To:</label>
                                            <input type="text" className="form-control" placeholder='Vishal' id="recipient-name" style={{backgroundColor:"#E4ECF7"}}/>
                                        </div>
                                        <div className="mb-3">
                                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                            <strong> Gautam Sharma</strong> 
                                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>
                                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                                            <strong> Harshad Joshi</strong> 
                                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>
                                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                            <strong> Kavish sen</strong> 
                                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>
                                        </div>
                                    </div>
                                    <div className='col-4'>
                                        <div className='mb-3'>
                                            <label htmlFor="recipient-name" className="col-form-label">Set Daedline:</label>
                                            <input type="date" className="form-control" id="recipient-name" style={{backgroundColor:"#E4ECF7"}}/>
                                        </div>
                                        <div className='mb-3'>
                                            <FormControl>
                                                <FormLabel id="demo-radio-buttons-group-label">Set Priority</FormLabel>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    defaultValue="female"
                                                    name="radio-buttons-group"
                                                >
                                                    <FormControlLabel value="High" control={<Radio />} label="High" />
                                                    <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
                                                    <FormControlLabel value="Low" control={<Radio />} label="Low" />
                                                </RadioGroup>
                                            </FormControl>
                                        </div>
                                    </div>
                                </div>


                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btnAdd">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </Stack>
    );
}



