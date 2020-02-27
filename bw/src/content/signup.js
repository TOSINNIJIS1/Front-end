import React from 'react'


class SignUp extends React.Component {

    state = {
        info : {
            name: '',
            phone: '',
            email: '',
            password: '',
            confirmPassword: '',
            location: ''
        }
    }


    onHandle = e => {
        this.setState({
            info : {
                ...this.state.info, [e.target.name]: e.target.value
            }
        })
    }

    onSubmit = e => {
        e.preventDefault()
        const {password, confirmPassword} = this.state.info;

        if (password !== confirmPassword) {
            alert('Re-enter Password')
        } else {
            // axios.post(``)
            // .then(res => console.log(res))
            // .catch(err => console.log(err))
        }

        

    }



    render(){
        return(
            <div>
                <form className='formContainer' onSubmit={this.onSubmit}>
                    <label>Full Name</label>
                    <input 
                    type='text'
                    name='name'
                    onChange={this.onHandle}
                    maxLength={8}
                    />

                    <label>Phone</label>
                    <input 
                    type='number'
                    name='phone'
                    onChange={this.onHandle}
                    />

                    <label>Email</label>
                    <input 
                    type='email'
                    name='email'
                    onChange={this.onHandle}
                    />

                    <label>Password</label>
                    <input 
                    type='password'
                    name='password'
                    onChange={this.onHandle}
                    />

                    <label> Re-enter Password</label>
                    <input 
                    type='password'
                    name='confirmPassword'
                    onChange={this.onHandle}
                    />

                    <label>Location</label>
                    <input 
                    type='text'
                    name='location'
                    onChange={this.onHandle}
                    />

                    <button>Sign Up</button>

                </form>

                
            </div>
        )
    }
}

export default SignUp