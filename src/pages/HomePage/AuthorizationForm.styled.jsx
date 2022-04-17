import styled from '@emotion/styled'
import LoadingButton from '@mui/lab/LoadingButton'
import TextField from '@mui/material/TextField'
import { Paper } from '@mui/material'

export const Container = styled.div`
  box-sizing: border-box;
  margin: 60px auto;
  width: 400px;
`

export const StyledPaper = styled(Paper)`
  padding: 10px;
  border-radius: 20px;
  box-shadow: -1px 3px 10px rgba(59, 22, 4, 0.76);
  background-color: #058ef76e;
  h2 {
    margin: 20px 0 0;
    text-align: center;
    color: rgba(0, 63, 100, 0.8);
    text-shadow: 1px 1px 3px rgba(59, 22, 4, 0.76);
    font-family: Dancing, cursive;
  }
  form {
    display: flex;
    flex-direction: column;
    padding: 30px;
  }
`

export const StyledTextField = styled(TextField)`
  width: 100%;
  &:not(:first-of-type) {
    margin-top: 12px;
  }
`

export const StyledButton = styled(LoadingButton)`
  margin: 20px auto 0;
  width: 150px;
  border-radius: 0.5em;
  border: solid 1px #777f8b46;
  color: rgba(0, 63, 100, 0.8);
  background: linear-gradient(
    to right,
    #058ef79a 0%,
    #058ef7 50%,
    #058ef79a 100%
  );
  background-size: 200%;
  background-position: 100%;
  // box-shadow: 3px 3px 6px #cbced1, -1px -1px 6px #cbced1;
  transition: all 0.7s;
  &:hover {
    // color: #fcfcfc;
    background: linear-gradient(
      to right,
      #058ef79a 0%,
      #058ef7 50%,
      #058ef79a 100%
    );
    background-size: 200%;
    background-position: 0px;
    box-shadow: none;
    border: solid 1px #fcfcfc;
  }
`
