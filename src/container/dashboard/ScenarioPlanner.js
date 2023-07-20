/* eslint-disable */

import React, { lazy, Suspense, useState, useLayoutEffect } from 'react'; 
import { useSelector } from 'react-redux';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Row, Col, Skeleton, Table, Menu } from 'antd';
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

const {chartjsDonutChart} = ChartJs;
const { pieChartData } = gCharts;
const { data, dataRPI } = rechartData;



function Planner() {
  
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

  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'first',
      breadcrumbName: 'Planner',
    },
  ];
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
      name: 'MS%',
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
      title: 'Current' ,
      children: [
     { 
      title: 'My Brand',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Total Category Value',
      dataIndex: 'age',
      key: 'age',
    }
    ],
    colSpan: 2,
    },
    {
      title: 'As in Proj.' ,
      children: [
     { 
      title: 'My Brand',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Total Category Value',
      dataIndex: 'age',
      key: 'age',
    }
    ], 
    colSpan: 2,
    },
  ];

  const {Item} =  Menu
  const pieChartColors = ['#6f42c1', '#8f62d6', '#af82ea', '#ce9df7', '#ecb8ff'];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Current Scenario" routes={PageRoutes} />

      <Main>
        <Cards title="Channel">
              <Menu mode="horizontal">
                <Item key="chnl-1" icon={<MailOutlined />}>
                  Hypermarkets
                </Item>
                <Menu.Item key="chnl-2" icon={<MailOutlined />}>
                  Supermarkets
                </Menu.Item>
                <Menu.Item key="chnl-3" icon={<MailOutlined />}>
                  Discounters
                </Menu.Item>
                <Menu.Item key="chnl-4" icon={<MailOutlined />}>
                  Traditional Trade
                </Menu.Item>
                
              </Menu>
        </Cards>
        <Row gutter={25}>
          <Col md={10} xs={24}>
          <Cards title="Consumer Surplus Factor (CSF)" size="large" more={false}>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                width={responsive - (5 * responsive) / 100}
                height={responsive / 2}
                data={data}
                margin={{
                  top: 20,
                  right: window.innerWidth <= 375 ? 30 : 40,
                  left: window.innerWidth <= 375 ? -18 : 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="csf" stackId="stack" fill="#8f62d6" barSize={15}/>
                <Bar dataKey="mcv" stackId="stack" fill="#82ca9d" />
                <Bar dataKey="price" stackId="stack" fill="#ffc658" />
                {/* <Bar dataKey="uv" stackId="a" fill="#82ca9d" /> */}
              </BarChart>
              </ResponsiveContainer>
            </Cards>
          </Col>
          <Col md={14} xs={24}>
            {/* <Cards title="Market Share" size="large">
              <DoughnutChart {...chartjsDonutChart} />
            </Cards> */}
            <Cards title="Market Share" size="large">
              <Row gutter={25}>

                <Col md={12} xs={24}>
                  <Google3dPieChart
                    data={pieChartData}
                    width="100%"
                    height="300px"
                    title="Current"
                    chartArea="100%"
                    colors={pieChartColors}
                    
                  />
                </Col>
                <Col md={12} xs={24}>
                  <Google3dPieChart
                    data={pieChartData}
                    width="100%"
                    height="300px"
                    title="As in Projection"
                    chartArea="100%"
                    colors={pieChartColors}
                  />
                </Col>
              </Row>
          </Cards>
            {/* <Cards title="Market Share" size="large">
              <DoughnutChart {...chartjsDonutChart} />
            </Cards> */}
            
          </Col>
          
        </Row>
        <Row gutter={25}>
        <Col md={24} xs={24}>
          <Cards title="Metrics">
            <Table className="table-responsive" pagination={false} dataSource={dataSource} columns={columns} />
          </Cards>
        </Col>
        
        </Row>
        <Row gutter={25}>
          <Col md={14} xs={24}>
          <Cards title="Volume Share" size="large" more={false}>
          <ResponsiveContainer width="100%" height={300}>
          <Google3dPieChart
                    data={pieChartData}
                    width="100%"
                    height="300px"
                    title=""
                    chartArea="100%"
                    colors={pieChartColors}
                    
                  />
          </ResponsiveContainer>
          
          </Cards>
          </Col>
          <Col md={10} xs={24}>
            <Cards title="Relative Price Index (RPI)" size="large" more={false}>
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
                  <Bar dataKey="rpi" stackId="a" fill="#8f62d6" barSize={20}/>
                  {/* <Bar dataKey="uv" stackId="a" fill="#82ca9d" /> */}
                </BarChart>
                </ResponsiveContainer>
              </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default Planner;
