import Videoclips from './components/Videoclips/Videoclips';
import Audio from './components/Audio/Audio';
import Carusel from './components/Carusel/Carusel';
import CDs from './components/CDs/CDs';

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
]
  