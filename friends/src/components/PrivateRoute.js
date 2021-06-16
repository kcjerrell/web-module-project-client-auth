import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { hasToken } from '../util/axiosWithAuth';

const PrivateRoute = ({ component: Component, ...rest }) => {
	return <Route {...rest} render={(props) => {
		if (hasToken()) {
			return (<Component {...props} />);
		} else {
			return <Redirect to="/login" />
		}
	}} />
}

export default PrivateRoute;
