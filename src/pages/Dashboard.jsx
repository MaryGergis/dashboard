import React, { useState, useEffect } from 'react';
import { getCustomers, getInventory, getOrders } from "../API";
import {  Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import LineChart from './LineChart';
import DashboardChart from './BarChart';
import PieChart from './PieChart';

const Dashboard = () => {

    const [orders, setOrders] = useState(0);
    const [ setInventory] = useState(0);
    const [customers, setCustomers] = useState(0);
    const [ setRevenue] = useState(0);
  
    useEffect(() => {
      getOrders().then((res) => {
        setOrders(res.total);
        setRevenue(res.discountedTotal);
      });
      getInventory().then((res) => {
        setInventory(res.total);
      });
      getCustomers().then((res) => {
        setCustomers(res.total);
      });
    }, []);

    return (
        <div>
            <h1>Dashboard Page</h1>
            <Row className="mt-5">
                <Col xs={6} sm={6} md={4} lg={2}>
                    <div className="card  align-items-center mt-3" >
                        <div className="card-body ">
                            <div className='d-flex '>
                                <img src={require('../images/users.png')} alt="users" className='me-3' />
                                <h5 className="card-title"> Users </h5>
                            </div>

                            <h6 className='text-center '> {customers} </h6>
                        </div>
                    </div>
                </Col>
                
                <Col xs={6} sm={6} md={4} lg={2}>
                    <div className="card align-items-center mt-3" >
                        <div className="card-body">
                            <div className='d-flex'>
                                <img src={require('../images/calls.png')} alt="calls" className='me-3' />
                                <h5 className="card-title"> Calls </h5>
                            </div>                        
                            <h6 className='text-center '> {orders}</h6>                    
                        </div>
                    </div>
                </Col>

                <Col xs={6} sm={6} md={4} lg={2}>
                    <div className="card align-items-center mt-3" >
                        <div className="card-body">
                            <div className='d-flex'>
                                <img src={require('../images/blind.png')} alt="blind" className='me-3' />
                                <h5 className="card-title"> Blind </h5>
                            </div>                        
                            <h6 className='text-center '> 55 </h6>
                        </div>
                    </div>
                </Col>

                <Col xs={6} sm={6} md={4} lg={2}>
                    <div className="card align-items-center mt-3" >
                        <div className="card-body">
                            <div className='d-flex'>
                                <img src={require('../images/deaf.png')} alt="deaf" className='me-3' />
                                <h5 className="card-title"> Deaf </h5>
                            </div>                     
                            <h6 className='text-center '> 30 </h6>
                        </div>
                    </div>
                </Col>

                <Col xs={6} sm={6} md={4} lg={2}>
                    <div className="card align-items-center mt-3" >
                        <div className="card-body">
                            <div className='d-flex'>
                                <img src={require('../images/dump.png')} alt="dump" className='me-3' />
                                <h5 className="card-title"> Dump </h5>
                            </div>                
                            <h6 className='text-center '> 15 </h6>    
                        </div>
                    </div>
                </Col>
            </Row>

                    {/* display charts */}  
                    <Row >
                        <Col xs={12} sm={9} md={4} lg={6} >
                           <LineChart/>
                        </Col>
                            
                        <Col xs={12} sm={9} md={4} lg={6} >
                            <DashboardChart/> 
                        </Col>
                            
                    </Row>

                    <PieChart/>

       </div>
    );
};

export default Dashboard;



