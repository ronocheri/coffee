import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import NewspaperPage from './components/NewspaperPage';
import ArticlePage from './components/ArticlePage';
import Members from './components/Members';

import Layout from './components/Layout';

function App() {
  return (

    <Layout>
    <Switch>
      <Route path='/' exact>
        <HomePage/>
      </Route>
      <Route path='/issues'>
        <NewspaperPage/>
      </Route>
      <Route path='/article'>
        <ArticlePage/>
      </Route>
      <Route path='/members'>
        <Members/>
      </Route> 
    </Switch>
    <Footer/>
    </Layout>
 
  );
}

export default App;
