import Videoclips from './components/Videoclips/Videoclips';
import Audio from './components/Audio/Audio';
import Carusel from './components/Carusel/Carusel';
import CDs from './components/CDs/CDs';
import Contacts from './components/Contacts/Contacts';
import Performance from './components/Performance/Performance';
import Blog from './components/Blog/Blog';

export default [
    {
      path: '/',
      exact: true,
      component: Carusel,
    },
{
    path: '/video',
    exact: true,
    component: Videoclips,
  },
  {
    path: '/audio',
    exact: true,
    component: Audio,
  }, 
  {
    path: '/cds',
    exact: true,
    component: CDs,
  },
  {
    path: '/contacts',
    exact: true,
    component: Contacts,
  },
  {
    path: '/performance',
    exact: true,
    component: Performance,
  }, 
  {
    path: '/blog',
    exact: true,
    component: Blog,
  }, 
]
  