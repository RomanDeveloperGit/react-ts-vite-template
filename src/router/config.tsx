import { createBrowserRouter } from 'react-router-dom';

const ROUTER = createBrowserRouter([
  {
    path: '',
    element: <div>Main</div>,
  },
  {
    path: '*',
    element: <div>Other</div>,
  },
]);

export default ROUTER;
