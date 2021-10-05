import './App.css';
import Header from './components/layout/header/Header';
import Main from './components/layout/Main';
import Menu from './components/layout/Menu';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/layout/footer/Footer';
import Content from './components/layout/Content';
import Home from './pages/Home';
import Manga from './pages/Manga';
import AllSeries from './pages/AllSeries';
import LightNovel from './pages/LightNovel';
import HowToBuy from './pages/HowToBuy';
import Login from './pages/Login';
import Register from './pages/Register';
import NoticeOfPayment from './pages/NoticeOfPayment';
import Book from './pages/Book';
import UpdateStock from './pages/UpdateStock';
import AddBookStock from './pages/AddBookStock';
import EditBookStock from './pages/EditBookStock';
import MyAccount from './pages/MyAccount';
import ShoppingCart from './pages/ShoppingCart';
import MyAddress from './pages/MyAddress';
import CustomerOrder from './pages/CustomerOrder';
import { AuthContextProvider } from './context/authContext';
function App() {
  return (
    <Main>
      <Header />
      <Menu />
      <Content>
        <Switch>
          <Route exact path="/cart" component={ShoppingCart} />
          <Route exact path="/myaccount/myorder" component={CustomerOrder} />
          <Route exact path="/myaccount/address" component={MyAddress} />
          <Route exact path="/myaccount" component={MyAccount} />
          <Route exact path="/edit-book-stock" component={EditBookStock} />
          <Route exact path="/add-book-stock" component={AddBookStock} />
          <Route exact path="/update-stock" component={UpdateStock} />
          <Route exact path="/notice-of-payment" component={NoticeOfPayment} />
          <Route exact path="/book" component={Book} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/how-to-buy" component={HowToBuy} />
          <Route exact path="/light-novel" component={LightNovel} />
          <Route exact path="/manga" component={Manga} />
          <Route exact path="/all-series" component={AllSeries} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Content>
      <Footer />
    </Main>
  );
}

export default App;
