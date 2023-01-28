import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';

import ROUTER from './config';

const Router: FC = () => <RouterProvider router={ROUTER} />;

export default Router;
