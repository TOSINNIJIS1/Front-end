import React from 'react';



class Login extends React.Component {


    state = {
        userInfo: {
            email: '',
            password: ''
        }
    }


    onHandle = e => {
        this.setState({
        userInfo: { ...this.state.userInfo,
            [e.target.name]: e.target.value }
        })
    }


    onSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        // axios.post(``)
        // .then(res => console.log(res))
        // .catch(err => console.log(err))
    }

    render() {

        return (
            <div>
                <form className='formContainer' onSubmit={this.onSubmit}>
                    <label> Email:  </label>
                    <input 
                    type='text' 
                    name='email'  
                    onChange={this.onHandle}
                    />

                    <label> Password: </label>
                    <input 
                    type='password'
                    name='password'
                    onChange={this.onHandle}

                    />

                    <button> Sign In </button>

                </form>

            </div>
        )
    }
}

export default Login