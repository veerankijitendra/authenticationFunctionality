import Cookies from 'js-cookie'
import Header from '../Header'

const About = props => {
  const logout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <>
      <Header />
      <h1>About Route</h1>
      <button type="button" onClick={logout}>
        logout
      </button>
    </>
  )
}

export default About
