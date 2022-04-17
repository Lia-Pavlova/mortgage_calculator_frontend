import { useState } from 'react'
import { registration, login } from '../../service/authorization.js'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import VpnKeyIcon from '@mui/icons-material/VpnKey'
import {
  Container,
  StyledTextField,
  StyledButton,
  StyledPaper,
} from './AuthorizationForm.styled.jsx'
// import s from './HomePage.module.css'

const HomePage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordShow, setPasswordShow] = useState(false)

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
    <Container>
      <StyledPaper elevation={5} className="paper">
        <h2>Authorization form</h2>
        <form onSubmit={onSubmit}>
          <StyledTextField
            required
            label="Email"
            autoComplete="email"
            autoFocus
            variant="standard"
            size="small"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl sx={{ marginTop: '10px' }} variant="standard">
            <InputLabel htmlFor="password" type="password">
              Password
            </InputLabel>
            <Input
              type="password"
              id="password"
              autoComplete="off"
              value={password}
              onChange={onChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setPasswordShow(!passwordShow)}
                    onMouseDown={(e) => {
                      e.preventDefault()
                    }}
                  >
                    {passwordShow ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <StyledButton
            type="submit"
            loadingPosition="center"
            startIcon={<VpnKeyIcon />}
            variant="contained"
            onClick={registerUser}
          >
            Registration
          </StyledButton>
          <StyledButton
            type="submit"
            loadingPosition="center"
            startIcon={<VpnKeyIcon />}
            variant="contained"
            onClick={loginUser}
          >
            Login
          </StyledButton>
        </form>
      </StyledPaper>
    </Container>
  )
}

export default HomePage
