import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import { card } from './user.module.scss'

const User = ({ to, name }) => (
  <NavLink to={`user/${to}`} className={card}>
    {name}
  </NavLink>
)

User.propTypes = {
  to: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.string,
}

export default User
