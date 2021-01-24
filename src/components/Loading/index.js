import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { Loader } from 'react-feather'

import { content, icon } from './loading.module.scss'

const Loading = ({ children, size = 30, loading: isLoading }) => (
  <SwitchTransition>
    <CSSTransition
      key={isLoading}
      classNames="fade"
      timeout={500}
      unmountOnExit
    >
      {isLoading ? (
        <div className={content}>
          <Loader size={size} className={icon} />
        </div>
      ) : (
        <>{children}</>
      )}
    </CSSTransition>
  </SwitchTransition>
)

Loading.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default Loading
