import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import './App.scss';
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';
import About from './views/About';
import Projects from './views/Projects';

function App() {
	return (
		<BrowserRouter>
			<PageHeader />

			<Switch>
				<Route exact path="/about" component={About} />
				<Route exact path="/projects" component={Projects} />
				<Route render={() => <Redirect to="/about" />} />
			</Switch>

			<PageFooter />
		</BrowserRouter>
	);
}

export default App;
