import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const User = ({ to, name }) => <NavLink to={`user/${to}`}>{name}</NavLink>

User.propTypes = {
  to: PropTypes.string,
  name: PropTypes.string,
}

export default User
