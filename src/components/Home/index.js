import Cookies from 'js-cookie'
import Header from '../Header'

const Home = props => {
  const logout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <>
      <Header />
      <h1>Home Route</h1>
      <button type="button" onClick={logout}>
        logout
      </button>
    </>
  )
}

export default Home
