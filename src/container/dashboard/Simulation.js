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

const {chartjsDonutChart} = ChartJs;
const { pieChartData } = gCharts;
const { data, dataRPI } = rechartData;



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

      const [state, setstate] = useState({
        key: 0,
      });
      const callback = (key) => {
        setstate({ ...state, key });
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
              <Collapse onChange={callback} >
                <Panel header={
                    <div>
                        <Row gutter={25}>
                            <Col md={4}>
                                <h4>Heinz</h4>
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
                                value='30'
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
                                value='30'
                                onChange={handleChange} disabled
                                />
                            </Col>
                        </Row>   
                    </div>
                } key="1">
                  <Collapse defaultActiveKey="1">
                    <Panel header={
                        <div>
                        <Row gutter={25}>
                            <Col md={4}>
                                <h4>Heinz</h4>
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
                                value='30'
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
                                value='30'
                                onChange={handleChange} disabled
                                />
                            </Col>
                        </Row>   
                    </div>
                    } key="1">
                    <div>
                        <Row gutter={25}>
                            <Col md={4}>
                                <h4>Heinz</h4>
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
                                value='30'
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
                                value='30'
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
              <Collapse onChange={callback}>
                <Panel header="Kotlin" key="2">
                  <Collapse defaultActiveKey="2">
                    <Panel header="This is panel nest panel" key="2">
                    <div className="slider-with-input__single">
                        <h3>With Decimal</h3>
                        <Slider input min={0} max={1} step={0.01} />
                    </div>
                    </Panel>
                  </Collapse>
                </Panel>
               
              </Collapse>
            </Cards>
            </Col>
            <Col md={10}>
                <Cards title="Simulations">

                </Cards>
            </Col>

        </Row>
      </Main>
    </>
  );
}

export default Simulation;
