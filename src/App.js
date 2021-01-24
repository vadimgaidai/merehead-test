import ScrollToTop from 'react-router-scroll-top'
import { Route, Switch, withRouter } from 'react-router-dom'

import Users from './views/Users'
import User from './views/User'
import CreateUser from './views/CreateUser'
import NotFound from './views/NotFound'

const App = () => (
  <ScrollToTop>
    <Switch>
      <Route path="/" component={Users} exact />
      <Route path="/user/:id" component={User} />
      <Route path="/create-user" component={CreateUser} />
      <Route component={NotFound} />
    </Switch>
  </ScrollToTop>
)

export default withRouter(App)
