import './App.css';
import Header from './components/layout/header/Header';
import Main from './components/layout/Main';
import Menu from './components/layout/Menu';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Footer from './components/layout/footer/Footer';
import Content from './components/layout/Content';

import { useContext } from 'react';
import { AuthContext } from './context/authContext';
import route from './config/route';
function App() {
  const { user, setUser } = useContext(AuthContext);
  const role = user?.isAdmin ? 'admin' : 'user';

  return (
    <Main>
      <Header />
      <Menu />
      <Content>
        <Switch>
          {route[role].route.map(item => (
            <Route key={item.path} exact path={item.path} component={item.component} />
          ))}
          <Redirect to={route[role].redirect} />
        </Switch>
      </Content>
      <Footer />
    </Main>
  );
}

export default App;
