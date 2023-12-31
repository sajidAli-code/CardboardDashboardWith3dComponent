import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import SideBar from './components/Sidebar';
import sidebar_menu from './constants/sidebar-menu';

import './App.css';
import Orders from './pages/Orders/index.jsx';
import Product from './components/Product/Product';
import Edit from './components/Product/EditFrom/Edit';
import OrderDetail from './pages/Orders/OrderDetails';
import CostAttributes from './components/Costs/CostAttributes';
import CostChange from './components/Costs/CostChange';
import MaterialAttributes from './components/MaterialDetail/MaterialAttributes';
import MaterialCostChange from './components/MaterialDetail/MaterialCostChange';
import ManagePrice from './pages/ManagePrice';

function App () {
  return(
    <Router>
      <div className='dashboard-container'>
        <SideBar menu={sidebar_menu} />
          
          <div className='dashboard-body'>
              <Routes>
                  <Route path="*" element={<div></div>} />
                  {/* <Route exact path="/" element={<CostAttributes/>} /> */}
                  <Route exact path="/" element={<ManagePrice/>}/>
                  <Route exact path="/orders" element={< Orders/>} />
                  <Route exact path="/products" element={<Product/>} />
                  <Route path='/update/:id' element={<Edit/>}></Route>
                  <Route path='/orderDetails/:id' element={<OrderDetail/>}></Route>
                  <Route path='update-Cost-Price/:id' element={<CostChange/>}></Route>
                  <Route path='update-material-Cost-Price/:id' element={<MaterialCostChange/>}></Route>
                  <Route exact path="/profile" element={<div></div>} />
              </Routes>
          </div>
      </div>
    </Router>
  )
}

export default App;