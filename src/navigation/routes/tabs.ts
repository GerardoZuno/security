import Home from '../../views/home';
import Profile from '../../views/profile';
import Notice from '../../views/notice';
import {sos, user, blog} from '../../assets/icons';

export interface Tabs {
  name: string;
  component: any;
  icon: any;
}

export const tabs: Tabs[] = [
  {
    name: 'Perfil',
    component: Profile,
    icon: user,
  },
  {
    name: 'Inicio',
    component: Home,
    icon: sos,
  },
  {
    name: 'Noticias',
    component: Notice,
    icon: blog,
  },
];
