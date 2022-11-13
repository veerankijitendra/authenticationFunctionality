import Cookies from 'js-cookie'

const Login = props => {
  const login = () => {
    const jwtToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y'
    const {history} = props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }
  return (
    <>
      <h1>Please Login</h1>
      <button type="button" onClick={login}>
        Login with Sample Creds
      </button>
    </>
  )
}

export default Login
