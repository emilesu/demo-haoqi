import React, { Component } from 'react'
import AddIcon from './add.svg'
import './add-dog.css'

class AddDog extends Component {
  state = {
    showForm: false,
    imgUrl: ''
  }

  handleChange = (e) => {
    this.setState({
      imgUrl: e.target.value
    })
  }

  handleSubmit = () => {
    console.log(this.state.imgUrl)
  }
  
  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  render () {
    const form = (
      <div className="add-form-wrap">
        <div className="add-form">
          <div className="form-row">
            <input
              value={this.state.imgUrl}
              onChange={this.handleChange}
              type="text" placeholder="imgUrl" />
          </div>
          <div className="form-row">
            <button onClick={this.handleSubmit}
              className="primary">确定</button>
            <button onClick={this.toggleForm}
              >取消</button>
          </div>
        </div>
      </div>
    )
    const { showForm } = this.state
    return (
      <div className='add-dog'>
        {showForm && form}
        <img onClick={this.toggleForm}
          className='add-btn'
          src={AddIcon} alt="add"/>
      </div>
    )
  }
}

export default AddDog
