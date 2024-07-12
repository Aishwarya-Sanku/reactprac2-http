import React, { Component } from 'react'
import axios from 'axios'
 class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId:'',
         title:'',
         body:''


      }
    }
    changeHandler =(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler =(e)=>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(res => {
            console.log(res)
           //  this.props.history.push('/')
        })
        .catch(err => {
            console.log(err)
        })

    }
  render() {
    const {userId, title, body } = this.state;

    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <div>
                <label for="title">userId:</label>
                <input type="text" id="userId" name="userId" value={userId} onChange={this.changeHandler} required />

            </div>
            <div>
                <label for="title">Title:</label>
                <input type="text" id="title" name="title" value={title}  onChange={this.changeHandler}  required />
            </div>
            <div>
                <label for="body">Body:</label>
                <textarea id="body" name="body" value={body}  onChange={this.changeHandler}  required />
            </div>
        <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm
