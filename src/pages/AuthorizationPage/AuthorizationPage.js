import { useState } from 'react'
import { registration, login } from '../../service/authorization.js'
import s from './RegistrationPage.module.css'

const RegistrationPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const registerUser = async () => {
    await registration({ email, password })
  }

  const loginUser = async () => {
    await login({ email, password }).then((data) => {
      if (data) {
        setEmail('')
        setPassword('')
        setIsLoggedIn(true)
      }
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  const onChange = (e) => {
    switch (e.currentTarget.id) {
      case 'email':
        setEmail(e.target.value)
        break

      case 'password':
        setPassword(e.target.value)
        break

      default:
        break
    }
  }

  return (
    <div>
      <div className={s.box}>
        <p>Authorization form</p>
        <form onSubmit={onSubmit} className={s.form}>
          <div className={s.flex}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" value={email} onChange={onChange} />
          </div>
          <div className={s.flex}>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              value={password}
              onChange={onChange}
            />
          </div>
        </form>
        <div className={s.btn_group}>
          <button onClick={registerUser} className={s.btn}>
            Registration
          </button>
          <button onClick={loginUser} className={s.btn}>
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default RegistrationPage
