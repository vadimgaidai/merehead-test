import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import { card, avatar, name } from './user.module.scss'

const User = ({ to, firstName, lastName, image }) => (
  <NavLink to={`user/${to}`} className={card}>
    <img className={avatar} src={image} alt={firstName} />
    <h3 className={name}>
      {firstName} {lastName}
    </h3>
  </NavLink>
)

User.propTypes = {
  to: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  image: PropTypes.string,
}

export default User
