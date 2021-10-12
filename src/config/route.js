import HowtoPayment from '../components/howtoBuy/HowtoPayment';
import AddBookStock from '../pages/AddBookStock';
import AllSeries from '../pages/AllSeries';
import Book from '../pages/Book';
import EditBookStock from '../pages/EditBookStock';
import Home from '../pages/Home';
import LightNovel from '../pages/LightNovel';
import Login from '../pages/Login';
import Manga from '../pages/Manga';
import NoticeOfPayment from '../pages/NoticeOfPayment';
import Register from '../pages/Register';
import UpdateStock from '../pages/UpdateStock';
import MyAccount from '../pages/MyAccount';
import MyAddress from '../pages/MyAddress';
import CustomerOrder from '../pages/CustomerOrder';
import ShoppingCart from '../pages/ShoppingCart';
import HowToBuy from '../pages/HowToBuy';
const route = {
  admin: {
    route: [
      {
        path: '/',
        component: Home,
      },
      {
        path: '/all-series',
        component: AllSeries,
      },
      {
        path: '/manga',
        component: Manga,
      },
      {
        path: '/light-novel',
        component: LightNovel,
      },
      {
        path: '/how-to-buy',
        component: HowToBuy,
      },
      {
        path: '/register',
        component: Register,
      },
      {
        path: '/login',
        component: Login,
      },
      {
        path: '/book/:bookId',
        component: Book,
      },
      {
        path: '/notice-of-payment',
        component: NoticeOfPayment,
      },
      {
        path: '/update-stock',
        component: UpdateStock,
      },
      {
        path: '/add-book-stock',
        component: AddBookStock,
      },
      {
        path: '/edit-book-stock/:bookId',
        component: EditBookStock,
      },
      {
        path: '/myaccount',
        component: MyAccount,
      },
      {
        path: '/myaccount/address',
        component: MyAddress,
      },
      {
        path: '/myaccount/myorder',
        component: CustomerOrder,
      },
      {
        path: '/cart',
        component: ShoppingCart,
      },
    ],
    redirect: '/',
  },
  user: {
    route: [
      {
        path: '/',
        component: Home,
      },
      {
        path: '/all-series',
        component: AllSeries,
      },
      {
        path: '/manga',
        component: Manga,
      },
      {
        path: '/light-novel',
        component: LightNovel,
      },
      {
        path: '/how-to-buy',
        component: HowToBuy,
      },
      {
        path: '/register',
        component: Register,
      },
      {
        path: '/login',
        component: Login,
      },
      {
        path: '/book/:bookId',
        component: Book,
      },
      {
        path: '/notice-of-payment',
        component: NoticeOfPayment,
      },
      {
        path: '/myaccount',
        component: MyAccount,
      },
      {
        path: '/myaccount/address',
        component: MyAddress,
      },
      {
        path: '/myaccount/myorder',
        component: CustomerOrder,
      },
      {
        path: '/cart',
        component: ShoppingCart,
      },
    ],
    redirect: '/',
  },
};

export default route;
