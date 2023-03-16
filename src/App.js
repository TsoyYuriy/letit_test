import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="App">
			<Routes>
				<Route element={<Layout/>}>
					<Route path='/' element={<Home/>}/>
				</Route>
			</Routes>
    </div>
  );
}

export default App;
