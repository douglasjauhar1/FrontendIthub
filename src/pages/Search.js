import React from 'react'
class Search extends React.Component{
    render(){
        return(
<div className="card mt-5">
        <div className="card-header">
          <h4>Category Filters</h4>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label className="form-label">Programming Language</label>
            <select name="beast" id="select-beast2" className="form-control custom-select">
              <option value={0}>--Select--</option>
              <option value={1}>JavaScript</option>
              <option value={2}>Python</option>
              <option value={3}>C++</option>
              <option value={4}>Go</option>
              <option value={5}>PHP</option>
              <option value={6}>HTML</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Position</label>
            <select name="beast" id="select-beast3" className="form-control custom-select">
              <option value={0}>--Select--</option>
              <option value={1}>Software Engineer</option>
              <option value={2}>Front End</option>
              <option value={3}>Backend</option>
              <option value={4}>Devops</option>
              <option value={5}>React Engineer</option>
            </select>
          </div>
          <a className="btn btn-primary" href="#">Apply Filter</a>
        </div>
      </div>
        )
    }
}
export default Search