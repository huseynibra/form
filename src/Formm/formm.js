import React, { Component } from "react";

class Userlogin extends Component {
    state = {
        email: '',
        password: ''
    }
    inputChange = (event) => {
        if (event.target.type == 'text') {
            this.setState({
                email: event.target.value
            })

        }
        else if (event.target.type == 'password'){
            this.setState({
                password: event.target.value

            })
        }
       
    }
    handleSubmit=(event)=>{
        if(this.state.password.length<8){
            alert('yanlis meluamt')
        }
        else if(!this.state.email.endsWith('.ru')){
            alert('doamin tapilmadi')
        }
        else{
            alert('form sucess')
        }
    }

    render() {
        return (
            <form>
                <input type='text' onChange={this.inputChange} placeholder='email'></input>
                <input type='password' onChange={this.inputChange}  placeholder='password'></input>
                <button type="button" onClick={this.handleSubmit}>login</button>


            </form>




        )
    }
}

export default Userlogin