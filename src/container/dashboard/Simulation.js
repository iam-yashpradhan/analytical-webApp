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
  


  const {Item} =  Menu
  const pieChartColors = ['#6f42c1', '#8f62d6', '#af82ea', '#ce9df7', '#ecb8ff'];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Simulation" routes={PageRoutes} />

      <Main>

      </Main>
    </>
  );
}

export default Planner;
