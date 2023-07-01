import routesConfig from '~/config/routes';

import { headerOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '../pages/Search';

const publicRoutes = [
  {
    path: routesConfig.home,
    component: Home,
  },

  {
    path: routesConfig.following,
    component: Following,
  },

  { path: routesConfig.rofile, component: Profile },

  {
    path: routesConfig.Upload,
    component: Upload,
    layout: headerOnly,
  },

  {
    path: '/search',
    component: Search,
    layout: null,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
