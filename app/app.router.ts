import { ControlMipComponent } from './pages/controlMip/controlMip.component';
import { SearchMip } from './pages/searchMip/searchMip.component';

export const routes = [
    { path: '', component: SearchMip },
    { path: 'search', component: SearchMip},
    { path: 'control', component: ControlMipComponent }
];

export const navigatableComponents = [
    SearchMip,
    ControlMipComponent
];