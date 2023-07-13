/* eslint-disable */

import React, { lazy, Suspense, useState, useLayoutEffect } from 'react'; 
import { useSelector } from 'react-redux';
import { Row, Col, Skeleton, Table } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Label, Legend, ReferenceLine } from 'recharts';
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
      title: 'Current',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'My Brand',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Total Category Value',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Current Scenario" routes={PageRoutes} />

      <Main>
        <Row gutter={25}>
          <Col md={12} xs={24}>
            {/* <Cards title="Market Share" size="large">
              <DoughnutChart {...chartjsDonutChart} />
            </Cards> */}
            <Cards title="Market Share Potential" size="large">
              <Google3dPieChart
                data={pieChartData}
                width="100%"
                height="300px"
                title="Brand Wise"
                chartArea="100%"
                colors = {['#6f42c1', '#8f62d6', '#af82ea', '#ce9df7', '#ecb8ff']}
                
              />
            </Cards>

          </Col>
          <Col md={12} xs={24}>
            <Cards title="Market Share Potential" size="large">
              <Google3dPieChart
                data={pieChartData}
                width="100%"
                height="300px"
                title="Brand Wise"
                chartArea="100%"
                colors = {['#6f42c1', '#8f62d6', '#af82ea', '#ce9df7', '#ecb8ff']}
              />
            </Cards>
          </Col>
        </Row>
        <Row gutter={25}>
        <Col md={12} xs={24}>
          <Cards title="Metrics">
            <Table className="table-responsive" pagination={false} dataSource={dataSource} columns={columns} />
          </Cards>
        </Col>
        <Col md={12} xs={24}>
          <Cards title="Metrics">
            <Table className="table-responsive" pagination={false} dataSource={dataSource} columns={columns} />
          </Cards>
        </Col>
        </Row>
        <Row gutter={25}>
        <Col md={12} xs={24}>
            <Cards title="Consumer Surplus Factor (CSF)" size="large" more={false}>
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
                {/* <Legend /> */}
                <Bar dataKey="csf" stackId="a" fill="#8f62d6" />
                {/* <Bar dataKey="uv" stackId="a" fill="#82ca9d" /> */}
              </BarChart>
            </Cards>
          </Col>
          <Col md={12} xs={24}>
          <Cards title="Relative Price Index (RPI)" size="large" more={false}>
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
                <Bar dataKey="rpi" stackId="a" fill="#8f62d6" />
                {/* <Bar dataKey="uv" stackId="a" fill="#82ca9d" /> */}
              </BarChart>
          </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default Planner;
