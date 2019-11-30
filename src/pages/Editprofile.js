import React, {Fragment} from 'react'
import AppHeader from '../global/wrapper/app/AppHeader'
class Editprofile extends React.Component{
    render(){
        return(
            <Fragment>
            <AppHeader/>
            <div className="col-lg-12 col-xl-8 col-md-12 col-sm-12 mx-auto" style={{marginTop : 120}}>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Register Your Company Details</h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label htmlFor="exampleInputname">Company Name</label>
                      <input type="text" className="form-control" id="exampleInputname" placeholder="Your Company Name" required/>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Location</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Your Office Location" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputnumber">Description</label>
                  <textarea className="form-control" rows={6} defaultValue={"My Company is ....."} />
                </div>
                <div className="form-group">
                  <label className="form-label">Website</label>
                  <input className="form-control" placeholder="http://Hogo.com" />
                </div>
                <div className="form-group">
                  <label className="form-label">DateOfBirth</label>
                  <div className="row">
                    <div className="col-md-4">
                      <select className="form-control">
                        <option value={0}>Date</option>
                        <option value={1}>01</option>
                        <option value={2}>02</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <select className="form-control">
                        <option value={0}>Mon</option>
                        <option value={1}>Jan</option>
                        <option value={2}>Feb</option>
                        <option value={3}>Mar</option>
                        <option value={4}>Apr</option>
                        <option value={5}>May</option>
                        <option value={6}>June</option>
                        <option value={7}>July</option>
                        <option value={8}>Aug</option>
                        <option value={9}>Sep</option>
                        <option value={10}>Oct</option>
                        <option value={11}>Nov</option>
                        <option value={12}>Dec</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <select className="form-control">
                        <option value={0}>Year</option>
                        <option value={1}>2018</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-group mb-0 mt-5">
                  <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-12 userprofile">
                      <div className="userpic mb-2">
                        <img src="../assets/images/users/female/5.jpg" alt="" className="userpicimg" />
                      </div>
                      <p className="text-center">Web Designer, USA</p>
                      <div className="text-center">
                        <a href="#" className="btn btn-primary mt-1"><i className="fe fe-camera  mr-1" />Change Photo</a><br />
                        <a href="#" className="btn btn-info mt-1 mb-3 mb-xl-0"><i className="fe fe-camera-off mr-1 mb-2" />Remove Photo</a>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Change Password</label>
                        <input type="password" className="form-control" defaultValue="password" />
                      </div>
                      <div className="form-group">
                        <label>New Password</label>
                        <input type="password" className="form-control" defaultValue="password" />
                      </div>
                      <div className="form-group mb-0">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" defaultValue="password" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer text-right">
                <a href="#" className="btn btn-success mt-1">Save</a>
                <a href="#" className="btn btn-warning mt-1">Cancel</a>
              </div>
            </div>
          </div>
          </Fragment>
        )
    }
}
export default Editprofile