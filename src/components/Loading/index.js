import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { Loader } from 'react-feather'

import { icon } from './loading.module.scss'

const Loading = ({ children, loading: isLoading }) => (
  <SwitchTransition>
    <CSSTransition
      key={isLoading}
      classNames="fade"
      timeout={500}
      unmountOnExit
    >
      {isLoading ? <Loader size={30} className={icon} /> : <>{children}</>}
    </CSSTransition>
  </SwitchTransition>
)

Loading.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool,
}

export default Loading
