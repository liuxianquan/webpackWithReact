import React from 'react';
import { Link, HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';


export default class Home extends React.Component {
    render() {
        return (
            <div>
                <a>回到home</a>
                <Link to="/detail" >跳转到详情</Link>
            </div>
        )
    }
}