/* eslint-disable */

import React, { lazy, Suspense, useState, useLayoutEffect } from 'react'; 
import { useSelector } from 'react-redux';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Row, Col, Skeleton, Table, Menu, Collapse } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Label, Legend, ReferenceLine, ResponsiveContainer, LabelList} from 'recharts';
import { Main } from '../styled';
import DoughnutChart from '../../components/charts/DoughnutChart';
import ChartJs from '../../container/charts/ChartJs';
import { Google3dPieChart } from '../../components/charts/google-chart';
import gCharts from '../../demoData/google-charts.json';
import rechartData from '../../demoData/recharts.json'
import config from '../../config/config';
import {Slider} from '../../components/slider/slider';


const { pieChartData } = gCharts;

const barChartData = [
  {
    "name": "Heinz",
    "ms": 4.7,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Kotlin",
    "ms": -3.3,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Private Label",
    "ms": -2.9,
    "pv": 3908,
    "amt": 2000
  },
]

const pieChartColors = ['#6f42c1', '#8f62d6', '#af82ea', '#ce9df7', '#ecb8ff'];


function Simulation() {
    const PageRoutes = [
        {
          path: 'index',
          breadcrumbName: 'Dashboard',
        },
        {
          path: 'first',
          breadcrumbName: 'Simulation',
        },
      ];

      const [state, setState] = useState({
        responsive: 0, 
      });
      const { responsive } = state;
      useLayoutEffect(() => {
        function updateSize() {
          const element = document.querySelector('.recharts-wrapper');
          const width =
            element !== null
              ? element.closest('.ant-card-body').clientWidth
              : document.querySelector('.ant-card-body').clientWidth;
          setState({ responsive: width });
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
      }, []);
      const [newState, setNewState] = useState({
        key:0,
      })
      const callback = (key) => {
        setNewState({ ...newState, key });
      };  

  const {Item} =  Menu
  const { Panel } = Collapse;
  const pieChartColors = ['#6f42c1', '#8f62d6', '#af82ea', '#ce9df7', '#ecb8ff'];
  
  const customPanelStyle = {
    border: "1px solid #80808033",
    borderRadius: "6px",
    width: "100%",
    paddingLeft: "15px",
  }
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    let inputValue = e.target.value;
    if (!inputValue.endsWith("%")) {
        inputValue += "%";
    }
    setValue(e.target.inputValue);
  };
  
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Simulation" routes={PageRoutes} />

      <Main>
        <Row gutter={25}>
            <Col md={14}>
              <Cards title="Brands">
                <Row gutter={25} style={{marginBottom: '12.5px'}}>
                              <Col md={5}>
                                  
                              </Col>
                          
                              <Col md={4}>
                              <h4>Current Price</h4>
                              </Col>
                              <Col md={4}>
                              <h4>Proposed Price</h4>
                              </Col>
                              <Col md={3}>
                                  <h4>NSV to GM</h4>
                              </Col>
                              <Col md={3}>
                                <h4>RSV to NSV</h4>
                              </Col>
                              <Col md={5}>
                                <h4>% Price Change</h4>
                              </Col>
                </Row>
                <Collapse onChange={callback} >
                  <Panel header={
                      <div>
                          <Row gutter={25}>
                              <Col md={4}>
                                  <h4>Heinz</h4>
                              </Col>
                          
                              <Col md={4}>
                                
                              </Col>
                              <Col md={4}>
                                
                              </Col>
                              <Col md={4}>
                                  
                              </Col>
                              <Col md={4}>
                                
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='0'
                                  onChange={handleChange} disabled
                                  />
                              </Col>
                          </Row>   
                      </div>
                  } key="1">
                    <Collapse defaultActiveKey="2">
                      <Panel header={
                          <div>
                          <Row gutter={25}>
                              <Col md={4}>
                                  <h4>Standard</h4>
                              </Col>
                          
                              <Col md={4}>
                                
                              </Col>
                              <Col md={4}>
                                  
                              </Col>
                              <Col md={4}>
                                  
                              </Col>
                              <Col md={4}>
                                
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='0'
                                  onChange={handleChange} disabled
                                  />
                              </Col>
                          </Row>   
                      </div>
                      } key="2">
                      <div>
                          <Row gutter={25}>
                              <Col md={4}>
                                  <h4>Small</h4>
                              </Col>
                          
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} disabled
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} disabled
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='0'
                                  onChange={handleChange} 
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} 
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  
                                  onChange={handleChange} 
                                  />
                              </Col>
                          </Row>   
                          <Row gutter={25}>
                              <Col md={4}>
                                  <h4>Medium</h4>
                              </Col>
                          
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} disabled
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} disabled
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='0'
                                  onChange={handleChange} 
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} 
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  
                                  onChange={handleChange} 
                                  />
                              </Col>
                          </Row>  
                          <Row gutter={25}>
                              <Col md={4}>
                                  <h4>Large</h4>
                              </Col>
                          
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} disabled
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} disabled
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='0'
                                  onChange={handleChange} 
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} 
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  
                                  onChange={handleChange} 
                                  />
                              </Col>
                          </Row>  
                      </div>
                      </Panel>
                    </Collapse><br></br>
                    <Collapse defaultActiveKey="3">
                      <Panel header={
                          <div>
                          <Row gutter={25}>
                              <Col md={4}>
                                  <h4>Healthy</h4>
                              </Col>
                          
                              <Col md={4}>
                                
                              </Col>
                              <Col md={4}>
                                  
                              </Col>
                              <Col md={4}>
                                  
                              </Col>
                              <Col md={4}>
                                
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='0'
                                  onChange={handleChange} disabled
                                  />
                              </Col>
                          </Row>   
                      </div>
                      } key="3">
                      <div>
                          <Row gutter={25}>
                              <Col md={4}>
                                  <h4>Small</h4>
                              </Col>
                          
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} disabled
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} disabled
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='0'
                                  onChange={handleChange} 
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} 
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='0'
                                  onChange={handleChange} 
                                  />
                              </Col>
                          </Row>   
                          <Row gutter={25}>
                              <Col md={4}>
                                  <h4>Medium</h4>
                              </Col>
                          
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} disabled
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} disabled
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='0'
                                  onChange={handleChange} 
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} 
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='0'
                                  onChange={handleChange} 
                                  />
                              </Col>
                          </Row>  
                          <Row gutter={25}>
                              <Col md={4}>
                                  <h4>Large</h4>
                              </Col>
                          
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} disabled
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} disabled
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='0'
                                  onChange={handleChange} 
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} 
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='0'
                                  onChange={handleChange} 
                                  />
                              </Col>
                          </Row>  
                      </div>
                      </Panel>
                    </Collapse>
                  </Panel>
                
                </Collapse>
                <br></br>
                <Collapse onChange={callback} >
                  <Panel header={
                      <div>
                          <Row gutter={25}>
                              <Col md={4}>
                                  <h4>Kotlin</h4>
                              </Col>
                          
                              <Col md={4}>
                                
                              </Col>
                              <Col md={4}>
                                
                              </Col>
                              <Col md={4}>
                                  
                              </Col>
                              <Col md={4}>
                                
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='0'
                                  onChange={handleChange} disabled
                                  />
                              </Col>
                          </Row>   
                      </div>
                  } key="4">
                    <Collapse defaultActiveKey="5">
                      <Panel header={
                          <div>
                          <Row gutter={25}>
                              <Col md={4}>
                                  <h4>Healthy</h4>
                              </Col>
                          
                              <Col md={4}>
                                  {/* <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} disabled
                                  /> */}
                              </Col>
                              <Col md={4}>
                                  {/* <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} disabled
                                  /> */}
                              </Col>
                              <Col md={4}>
                                  {/* <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='0'
                                  onChange={handleChange} 
                                  /> */}
                              </Col>
                              <Col md={4}>
                                  {/* <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} 
                                  /> */}
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='0'
                                  onChange={handleChange} disabled
                                  />
                              </Col>
                          </Row>   
                      </div>
                      } key="5">
                      <div>
                          <Row gutter={25}>
                              <Col md={4}>
                                  <h4>Small</h4>
                              </Col>
                          
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} disabled
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} disabled
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='0'
                                  onChange={handleChange} 
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} 
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='0'
                                  onChange={handleChange} 
                                  />
                              </Col>
                          </Row>   
                          <Row gutter={25}>
                              <Col md={4}>
                                  <h4>Medium</h4>
                              </Col>
                          
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} disabled
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} disabled
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='0'
                                  onChange={handleChange} 
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} 
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='0'
                                  onChange={handleChange} 
                                  />
                              </Col>
                          </Row>  
                          <Row gutter={25}>
                              <Col md={4}>
                                  <h4>Large</h4>
                              </Col>
                          
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} disabled
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} disabled
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='0'
                                  onChange={handleChange} 
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} 
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='0'
                                  onChange={handleChange} 
                                  />
                              </Col>
                          </Row>  
                      </div>
                      </Panel>
                    </Collapse>
                  </Panel>
                
                </Collapse>
                <br></br>
                <Collapse onChange={callback} >
                  <Panel header={
                      <div>
                          <Row gutter={25}>
                              <Col md={4}>
                                  <h4>Private Label</h4>
                              </Col>
                          
                              <Col md={4}>
                                
                              </Col>
                              <Col md={4}>
                                
                              </Col>
                              <Col md={4}>
                                  
                              </Col>
                              <Col md={4}>
                                
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='0'
                                  onChange={handleChange} disabled
                                  />
                              </Col>
                          </Row>   
                      </div>
                  } key="6">
                    <Collapse defaultActiveKey="7">
                      <Panel header={
                          <div>
                          <Row gutter={25}>
                              <Col md={4}>
                                  <h4>Healthy</h4>
                              </Col>
                          
                              <Col md={4}>
                                  {/* <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} disabled
                                  /> */}
                              </Col>
                              <Col md={4}>
                                  {/* <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} disabled
                                  /> */}
                              </Col>
                              <Col md={4}>
                                  {/* <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='0'
                                  onChange={handleChange} 
                                  /> */}
                              </Col>
                              <Col md={4}>
                                  {/* <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} 
                                  /> */}
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='0'
                                  onChange={handleChange} disabled
                                  />
                              </Col>
                          </Row>   
                      </div>
                      } key="7">
                      <div>
                          <Row gutter={25}>
                              <Col md={4}>
                                  <h4>Small</h4>
                              </Col>
                          
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} disabled
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} disabled
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='0'
                                  onChange={handleChange} 
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} 
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='0'
                                  onChange={handleChange} 
                                  />
                              </Col>
                          </Row>   
                          <Row gutter={25}>
                              <Col md={4}>
                                  <h4>Medium</h4>
                              </Col>
                          
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} disabled
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} disabled
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='0'
                                  onChange={handleChange} 
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} 
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='0'
                                  onChange={handleChange} 
                                  />
                              </Col>
                          </Row>  
                          <Row gutter={25}>
                              <Col md={4}>
                                  <h4>Large</h4>
                              </Col>
                          
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} disabled
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} disabled
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='0'
                                  onChange={handleChange} 
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='8.44'
                                  onChange={handleChange} 
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value='0'
                                  onChange={handleChange} 
                                  />
                              </Col>
                          </Row>  
                      </div>
                      </Panel>
                    </Collapse>
                  </Panel>
                
                </Collapse>
                
              </Cards>
            </Col>
            <Col md={10}>
                <Cards title="Simulations">
                  <Row gutter={25}>
                    <Col md={12}>
                    <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      width={responsive - (5 * responsive) / 100}
                      height={responsive / 2}
                      layout='vertical'
                      data={barChartData}
                      margin={{
                        top: 20,
                        right: window.innerWidth <= 375 ? 0 : 40,
                        left: window.innerWidth <= 375 ? -18 : 0,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="ms" type='number' hide={true}/>
                      <YAxis dataKey="name" type='category' hide={true}/>
                      <Tooltip />
                      <Legend/>
                      <ReferenceLine y={0} stroke="#000" />
                      {/* <Bar dataKey="pv" fill="#8884d8" /> */}
                      <Bar dataKey="ms" name='Market Share' fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                    </Col>
                    <Col md={12}>
                    <Google3dPieChart
                    data={pieChartData}
                    width="100%"
                    height="300px"
                    title="Simulation"
                    chartArea="100%"
                    colors={pieChartColors}
                    
                  />
                    </Col>
                  </Row>
                  
                </Cards>
            </Col>
        </Row>
      </Main>
    </>
  );
}

export default Simulation;
