import React from 'react';

import Home from "./pages/home"
import Posts from "./pages/posts";
import Photo from './pages/photo';
import Contacts from './pages/contacts';

export const routes = [
    {
        path: '/18-react-router/posts',
        comonents: <Posts/>
    },
    {
        path: '/18-react-router/photo',
        comonents: <Photo/>
    },
    {
        path: '/18-react-router/contacts-book',
        comonents: <Contacts/>
    },
    {
        path: '/18-react-router/',
        comonents: <Home/>,
        exact: true
    },
    {
        path: '*',
        comonents: () => (<div> 404 </div>)
    }
]