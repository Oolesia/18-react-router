import React from 'react';

import Home from "./pages/home"
import Posts from "./pages/posts";
import Photo from './pages/photo';
import Contacts from './pages/contacts';

export const routes = [
    {
        path: '/posts',
        comonents: <Posts/>
    },
    {
        path: '/photo',
        comonents: <Photo/>
    },
    {
        path: '/contacts-book',
        comonents: <Contacts/>
    },
    {
        path: '/',
        comonents: <Home/>,
        exact: true
    },
    {
        path: '*',
        comonents: () => (<div> 404 </div>)
    }
]