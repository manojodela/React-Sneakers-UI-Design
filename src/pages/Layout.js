import React from 'react';
import MainNav from '../components/MainNav';

const Layout = (props) => {
    return <> <MainNav />
        <main>{props.children}</main>
    </>
};

export default Layout;