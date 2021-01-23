import ScrollToTop from 'react-router-scroll-top'
import { Route, Switch, withRouter } from 'react-router-dom'

import Users from './views/Users'
import User from './views/User'

const App = () => (
  <ScrollToTop>
    <Switch>
      <Route path="/" component={Users} exact />
      <Route path="/user/:id" component={User} />
    </Switch>
  </ScrollToTop>
)

export default withRouter(App)
