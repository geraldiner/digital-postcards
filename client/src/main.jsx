import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './index.css'
import {
  Root,
  loader as rootLoader,
  action as rootAction
} from './routes/root';
import Error from './error';
import {
  Contact,
  loader as contactLoader
} from './routes/contact';
import {
  Edit,
  action as editAction
} from './routes/edit';
import {
  action as deleteAction,
} from './routes/delete';
import Index from './routes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader
      },
      {
        path: "contacts/:contactId/edit",
        element: <Edit />,
        loader: contactLoader,
        action: editAction
      },
      {
        path: "contacts/:contactId/delete",
        action: deleteAction
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
