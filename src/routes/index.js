import config from '~/config';

import { headerOnly } from '~/layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '../pages/Search';
import Live from '~/pages/Live';

const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
  },

  {
    path: config.routes.following,
    component: Following,
  },
  { path: config.routes.live, component: Live },

  { path: config.routes.profile, component: Profile },

  {
    path: config.routes.Upload,
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
