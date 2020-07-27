import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Login = lazy(() => import('./view/login/Login'));
const Intro = lazy(() => import('./view/intro/Intro'));


const Cadastro = lazy(() => import('./view/cadastro/Cadastro'));



const Routes = () => (
    <Router>
        <Suspense fallback={<div></div>}>
            <Switch>
                <Route path="/intro" component={Intro}/>
                <Route path="/register" component={Cadastro}/>
                <Route path="/login" component={Login}/>
                <Route path="/" component={Login}/>

            </Switch>
        </Suspense>
    </Router>
)


export default Routes