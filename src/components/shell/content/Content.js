import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../routes/home/Home';
import Services from '../../routes/services/Services';
import Products from '../../routes/products/ProductsContainer';
import Cart from '../../routes/cart/CartContainer';
import Contact from '../../routes/contact/Contact';
import Calendar from '../../routes/calendar/Calendar';
import User from '../../routes/user/User';
import UserForm from '../../routes/user/UserForm';
import AnimalContainer from '../../routes/animal/AnimalContainer';
import AdminContainer from '../../routes/admin/AdminContainer';

class Content extends Component {
    render() {
        return (
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/services" component={Services} />
                <Route path="/products" component={Products} />
                <Route path="/contact" component={Contact} />
                <Route path="/calendar" component={Calendar} />
                <Route path="/services" component={Services} />
                <Route path="/user" component={User} />
                <Route path="/cart" component={Cart} />
                <Route path="/pet" component={AnimalContainer} />
                <Route path="/admin" component={AdminContainer} />
                <Route path="/logon" component={UserForm} />
                <Route path="/" component={Home} />
            </Switch>
        );
    }
}

export default Content;