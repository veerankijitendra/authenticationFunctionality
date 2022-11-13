import {Link, withRouter} from 'react-router-dom'

const Header = () => (
  <>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">about</Link>
    </li>
  </>
)

export default withRouter(Header)
