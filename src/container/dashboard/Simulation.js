/* eslint-disable */

import React, { lazy, Suspense, useState, useLayoutEffect } from 'react'; 
import { useSelector } from 'react-redux';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Row, Col, Skeleton, Table, Menu, Collapse } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Label, Legend, ReferenceLine, ResponsiveContainer, LabelList} from 'recharts';
import { Main } from '../styled';
import UilLayers from '@iconscout/react-unicons/icons/uil-layers';
import DoughnutChart from '../../components/charts/DoughnutChart';
import ChartJs from '../../container/charts/ChartJs';
import { Google3dPieChart } from '../../components/charts/google-chart';
import gCharts from '../../demoData/google-charts.json';
import rechartData from '../../demoData/recharts.json';
import modelData from '../../demoData/modelData.json';
import {ReloadOutlined} from '@ant-design/icons';
import { Button, BtnGroup } from '../../components/buttons/buttons';
import config from '../../config/config';
import {Slider} from '../../components/slider/slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate, faShareNodes } from '@fortawesome/free-solid-svg-icons';




const { pieChartData } = gCharts;
const { data, dataRPI } = rechartData;

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

      // Calculations, Computations
      const [value1, setValue1] = useState(0)
      const [value2, setValue2] = useState('')

      // const handleChange1 = (event) => {
      //   const newValue = parseFloat(event.target.value);
      //   setValue1(newValue);
      //   setValue2(newValue + 5); // Add 5 to the value and update value2
      // };

      const handleChange2 = (event) => {
        const newValue = parseFloat(event.target.value);
        setValue2(newValue);
        setValue1(newValue + 5); // Subtract 5 from the value and update value1
      };

  const hzRegSm = (modelData.brand[0].variant[0].ppg[0].values[0].sales)/
    (modelData.brand[0].variant[0].ppg[0].values[0].volume)
  const [hzRegMd, hzRegLg, hzRegXlg] = [5.3, 4.4, 3.7]

      const [pc1, setPc1] = useState(0);
      const [pc2, setPc2] = useState(hzRegSm);
      const [pc3, setPc3] = useState(0);
      const [pc4, setPc4] = useState(hzRegMd);
      const [pc5, setPc5] = useState(0);
      const [pc6, setPc6] = useState(hzRegLg);
      const [pc7, setPc7] = useState(0);
      const [pc8, setPc8] = useState(hzRegXlg);
      const [avg,setAvg] = useState((pc2+pc4+pc6+pc8)/4);


  const priceChange = (event,type) =>{
        const change = parseFloat(event.target.value);
        if(type=='small'){
          const val=hzRegSm + (change/100)*hzRegSm;
          setPc1(change);
          setPc2(val);
          const avg=(val+pc4+pc6+pc8)/4;
          setAvg(avg);
        }else if(type=='medium'){
          const val=hzRegMd + (change/100)*hzRegMd;
          setPc3(change);
          setPc4(val);
          const avg=(pc2+val+pc6+pc8)/4;
          setAvg(avg);
        }
        else if(type=='large'){
          const val=hzRegLg + (change/100)*hzRegLg;
          setPc5(change);
          setPc6(val);
          const avg=(pc2+pc4+val+pc8)/4;
          setAvg(avg);
        }
        else{
          const val=hzRegXlg + (change/100)*hzRegXlg;
          setPc7(change);
          setPc8(val);
          const avg=(pc2+pc4+pc6+val)/4;
          setAvg(avg);
        }
      }

      const handleResetPrice = () => {
        setPc1(0);
        setPc2(0); // Reset both input fields to initial values
      };

      
  const {Item} =  Menu
  const { Panel } = Collapse;
  const pieChartColors = ['#6f42c1', '#8f62d6', '#af82ea', '#ce9df7', '#ecb8ff'];
  
  const dataSource = [
    {
      key: '1',
      name: 'Volume',
      age: 32,
      address: '32',
    },
    
    {
      key: '2',
      name: 'NSV',
      age: 42,
      address: '32',
    },
    {
      key: '3',
      name: 'NSV/Vol',
      age: 42,
      address: '32',
    },
    {
      key: '4',
      name: 'GM %',
      age: 42,
      address: '32',
    },
    {
      key: '5',
      name: 'MS %',
      age: 42,
      address: '32',
    },
  ];

  const columns = [
    {
      title: 'Metrics',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Heinz' ,
      children: [
     { 
      title: 'Value',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Delta %',
      dataIndex: 'age',
      key: 'age',
    }
    ],
    colSpan: 2,
    },
    {
      title: 'Total Category' ,
      children: [
     { 
      title: 'Value',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Delta %',
      dataIndex: 'age',
      key: 'age',
    }
    ], 
    colSpan: 2,
    },
  ];


  const customPanelStyle = {
    border: "1px solid #80808033",
    borderRadius: "6px",
    width: "100%",
    paddingLeft: "15px",
  }
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    let inputValue = e.target.value;
    if (!inputValue.endsWith("%")) {
        inputValue += "%";
    }
    setValue(e.target.inputValue);
  };

  const iconColor = {
    color: 'white',
  }

  const hzRegSmCSF = (modelData.brand[0].variant[0].ppg[0].values[0].mcv/hzRegSm) 
  console.log(hzRegSmCSF)

  console.log((modelData.brand[0].variant[0].ppg[0].values[0].sales)/
  (modelData.brand[0].variant[0].ppg[0].values[0].volume));



  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Simulation" routes={PageRoutes} />

      <Main>
        <Row gutter={25}>
            <Col md={14}>
                
                <p></p>
            <Cards title={
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ margin: 0, fontSize: '18px',fontWeight: 600 }}>Brands</h4>
                  <Button size="default" type="primary" onClick={handleResetPrice}>
                  <FontAwesomeIcon icon={faArrowsRotate} />
                    <span style={{fontSize: '15px',color: 'white'}}>Reset Price</span>
                  </Button>
                </div>
              }>
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
                                  <h4>{modelData.brand[0].name}</h4>
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
                                  onChange={() => {}}
                                  value={value1} disabled
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
                                  <h4>{modelData.brand[0].variant[0].type}</h4>
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
                                  value={avg}
                                  onChange={handleChange} disabled
                                  />
                              </Col>
                          </Row>   
                      </div>
                      } key="2">
                      <div>
                          <Row gutter={25}>
                              <Col md={4}>
                                  <h4>{modelData.brand[0].variant[0].ppg[0].type}</h4> {/* HR Small*/}
                              </Col>
                          
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value= {hzRegSm}
                                  onChange={handleChange} disabled
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value={pc2}
                                  onChange={() => {}} disabled
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
                                  step="0.1" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value={pc1}
                                  onChange={()=>priceChange(event,modelData.brand[0].variant[0].ppg[0].type)}
                                  />
                              </Col>
                          </Row>   
                          <Row gutter={25}>
                              <Col md={4}>
                                  <h4>{modelData.brand[0].variant[0].ppg[1].type}</h4> {/* HR Medium*/}
                              </Col>
                          
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value={hzRegMd}
                                  onChange={handleChange} disabled
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                    value={pc4}
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
                                    value={pc3}
                                  onChange={() => priceChange(event,modelData.brand[0].variant[0].ppg[1].type)}
                                  />
                              </Col>
                          </Row>  
                          <Row gutter={25}>
                              <Col md={4}>
                                  <h4>{modelData.brand[0].variant[0].ppg[2].type}</h4> {/* HR Large*/}
                              </Col>
                          
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value={hzRegLg}
                                  onChange={handleChange} disabled
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value={pc6}
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
                                    value={pc5}
                                  onChange={() => priceChange(event,modelData.brand[0].variant[0].ppg[2].type)}
                                  />
                              </Col>
                          </Row>  
                          <Row gutter={25}>
                              <Col md={4}>
                                  <h4>{modelData.brand[0].variant[0].ppg[3].type}</h4> {/* HR XLarge*/}
                              </Col>
                          
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value={hzRegXlg}
                                  onChange={handleChange} disabled
                                  />
                              </Col>
                              <Col md={4}>
                                  <input style={customPanelStyle}
                                  type="number"
                                  step="0.01" // Set the step attribute to control decimal precision (in this case, 2 decimal places)
                                  value={pc8}
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
                                  value={pc7}
                                  onChange={() => priceChange(event,modelData.brand[0].variant[0].ppg[3].type)}
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
                                  <h4>{modelData.brand[0].variant[1].type}</h4>
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
                                  <h4>{modelData.brand[0].variant[1].ppg[0].type}</h4>
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
                                  value={value2}
                                  onChange={handleChange2}
                                  />
                              </Col>
                          </Row>   
                          <Row gutter={25}>
                              <Col md={4}>
                                  <h4>{modelData.brand[0].variant[1].ppg[1].type}</h4>
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
                                  <h4>{modelData.brand[0].variant[1].ppg[2].type}</h4>
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
                    </Collapse>
                  </Panel>
                
                </Collapse>
                <br></br>
                <Collapse onChange={callback} >
                  <Panel header={
                      <div>
                          <Row gutter={25}>
                              <Col md={4}>
                                  <h4>{modelData.brand[1].name}</h4>
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
                                  <h4>{modelData.brand[1].variant[0].type}</h4>
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
                                  <h4>{modelData.brand[1].variant[0].ppg[0].type}</h4>
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
                                  <h4>{modelData.brand[1].variant[0].ppg[1].type}</h4>
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
                                  <h4>{modelData.brand[1].variant[0].ppg[2].type}</h4>
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
                                  <h4>{modelData.brand[2].name}</h4>
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
                                  <h4>{modelData.brand[2].variant[0].type}</h4>
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
                                  <h4>{modelData.brand[2].variant[0].ppg[0].type}</h4>
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
                <Cards title={
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4 style={{ margin: 0, fontSize: '18px',fontWeight: 600 }}>Simulations</h4>
                    <Button size="default" type="primary">
                    <FontAwesomeIcon icon={faShareNodes} />
                      {/* <span style={{fontSize: '15px',color: 'white'}}>Reset Price</span> */}
                    </Button></div>
                }>
                  <Row gutter={25}>
                    <Col md={12}>
                    <ResponsiveContainer width="100%" height={250}>
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
                      <Bar dataKey="ms" name='Market Share' fill="#82ca9d" barSize={10} />
                    </BarChart>
                  </ResponsiveContainer>
                    </Col>
                    <Col md={12}>
                    <Google3dPieChart
                    data={pieChartData}
                    width="100%"
                    height="250px"
                    title="Simulation"
                    chartArea="100%"
                    colors={pieChartColors}
                    
                  />
                    </Col>
                  </Row>
                  
                </Cards>
              <Row gutter={25}>
                <Col md={24} xs={24}>
                  <Cards title="Metrics">
                    <Table className="table-responsive" pagination={false} dataSource={dataSource} columns={columns} />
                  </Cards>
                </Col>
              </Row>
              <Row gutter={25}>
          <Col md={12} xs={24}>
          <Cards title="CSF" size="large" more={false}>
          <ResponsiveContainer width="100%" height={300}>
          <BarChart
                  width={responsive - (5 * responsive) / 100}
                  height={responsive / 2}
                  data={dataRPI}
                  layout='vertical'
                  margin={{
                    top: 20,
                    right: window.innerWidth <= 375 ? 30 : 40,
                    left: window.innerWidth <= 375 ? -18 : 0,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey='rpi' type="number">
                  {/* <Label value= 'RPI' offset={0} position="insideBottom" /> */}
                  </XAxis>
                  <YAxis dataKey='name' type="category"/>
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="rpi" name= 'CSF' stackId="a" fill="#8f62d6" barSize={20}/>
                  {/* <Bar dataKey="uv" stackId="a" fill="#82ca9d" /> */}
                </BarChart>
          </ResponsiveContainer>
          
          </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="Proposed RPI" size="large" more={false}>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                  width={responsive - (5 * responsive) / 100}
                  height={responsive / 2}
                  data={dataRPI}
                  layout='vertical'
                  margin={{
                    top: 20,
                    right: window.innerWidth <= 375 ? 30 : 40,
                    left: window.innerWidth <= 375 ? -18 : 0,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey='rpi' type="number">
                  {/* <Label value= 'RPI' offset={0} position="insideBottom" /> */}
                  </XAxis>
                  <YAxis dataKey='name' type="category"/>
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="rpi" name ='RPI' stackId="a" fill="#8f62d6" barSize={20}/>
                  {/* <Bar dataKey="uv" stackId="a" fill="#82ca9d" /> */}
                </BarChart>
                </ResponsiveContainer>
              </Cards>
          </Col>
        </Row>
            </Col>
        </Row>

        
      </Main>
    </>
  );
}

export default Simulation;
