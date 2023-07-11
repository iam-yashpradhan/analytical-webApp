/* eslint-disable */

import React, { lazy, Suspense, useState } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from 'recharts';
import { Main } from '../styled';
import DoughnutChart from '../../components/charts/DoughnutChart';
import ChartJs from '../charts/ChartJs';
import { Google3dPieChart } from '../../components/charts/google-chart';
import gCharts from '../../demoData/google-charts.json';
import rechartData from '../../demoData/recharts.json'

const { chartjsDonutChart } = ChartJs;
const { pieChartData } = gCharts;
const { data, positiveAndNegative } = rechartData;



function Planner() {
    const [state, setState] = useState({
        responsive: 0,
      });
      const { responsive } = state;

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

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Current Scenario" routes={PageRoutes} />

      <Main>
        <Row gutter={25}>
          <Col md={12} xs={24}>
            <Cards title="Donut Chart" size="large">
              <DoughnutChart {...chartjsDonutChart} />
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
              />
            </Cards>
          </Col>
        </Row>
        <Row gutter={25}>
        <Col md={12} xs={24}>

        </Col>
        <Col md={12} xs={24}>
            <Cards title="STACKED BAR CHART" size="large" more={false}>
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
                <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
              </BarChart>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default Planner;
