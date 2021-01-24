import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import { card } from './user.module.scss'

const User = ({ to }) => (
  <NavLink to={`user/${to}`} className={card}>
    {to}
  </NavLink>
)

User.propTypes = {
  to: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default User
