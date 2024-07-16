import App from './App';
import Index from './pages/Index';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Movies from './pages/Movies';
import TvSeries from './pages/TvSeries';
import Bookmarked from './pages/Bookmarked';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        element: <Login />,
        path: '/login'
      },
      {
        element: <SignUp />,
        path: '/signup'
      },
      {
        element: <Movies />,
        path: '/movies'
      },
      {
        element: <TvSeries />,
        path: '/tvseries'
      },
      {
        element: <Bookmarked />,
        path: '/bookmarked'
      }
    ]
  }
];

export default routes;