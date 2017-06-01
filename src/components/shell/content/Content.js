import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../../routes/home/Home';
import Services from '../../routes/services/Services';
import Products from '../../routes/products/Products';
import Contact from '../../routes/contact/Contact';
import Calendar from '../../routes/calendar/Calendar';
import About from '../../routes/about/About';
import Login from '../../routes/login/Login';

class Content extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/services" component={Services} />
                    <Route path="/products" component={Products} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/calendar" component={Calendar} />
                    <Route path="/about" component={About} />
                    <Route path="/services" component={Services} />
                    <Route path="/login" component={Login} />
                    <Route path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Content;