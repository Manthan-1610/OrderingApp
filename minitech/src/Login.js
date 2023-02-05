import {useState} from 'react'
import { Link } from 'react-router-dom'
import './forms.css'
import {signInWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {auth} from './firebase'
import {useNavigate} from 'react-router-dom'
import {useAuthValue} from './AuthContext'


function Login(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 
  const [error, setError] = useState('')
  const {setTimeActive} = useAuthValue()
  const navigate = useNavigate()

  const login = e => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      if(!auth.currentUser.emailVerified) {
        //alert("You dont have an Account!")
        sendEmailVerification(auth.currentUser)
        .then(() => {
          setTimeActive(true)
          navigate('/Main')
        })
      .catch(err => alert(err.message))
    }else{
      navigate('/')
    }
    })
    .catch(err => setError(err.message))
  }

  return(
  <div className='a1'>
  
  
   <div>
    <div className='center' style={{
      marginLeft: '40%',
    }}>
      <div className='auth' >
        <h1 color='#282828'>Log in</h1>
        {error && <div className='auth__error'>{error}</div>}
        <form onSubmit={login} name='login_form' className='f1'>
          <input className='i1' 
            type='email' 
            value={email}
            required
            placeholder="Enter your email"
            autoComplete='true'
            onChange={e => setEmail(e.target.value)}/>

          <input className='i1' 
            type='password'
            value={password}
            required
            placeholder='Enter your password'
            onChange={e => setPassword(e.target.value)}/>

          <button className='i2' type='submit' >Login</button>
          <p style={{fontSize:15}}>
          Don't have and account? 
          <Link to='/register'>Create one here</Link>
        </p>
        </form>
        
      </div>
    </div>
    </div>
    </div>
  )
}

export default Login