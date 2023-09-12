import React from 'react';
import {
    Bar,
    BarChart,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    PieChart,
    Pie,
    Cell,
} from 'recharts';
import styles from './dashboard.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

const ChartMonth = () => {
    const data = [
        { name: 'Ngày 1', doanhThu: 1000 },
        { name: 'Ngày 2', doanhThu: 1200 },
        { name: 'Ngày 3', doanhThu: 1300 },
        { name: 'Ngày 4', doanhThu: 1100 },
        { name: 'Ngày 5', doanhThu: 1500 },
    ];

    return (
        <div>
            <h2>Biểu đồ doanh thu trong tháng qua</h2>
            <LineChart width={1150} height={300} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="doanhThu" stroke="#8884d8" />
            </LineChart>
        </div>
    );
};

const PieSell = () => {
    const dataPieChart = [
        { name: 'Trà sữa', value: 30 },
        { name: 'Cà phê', value: 50 },
        { name: 'Sinh tố', value: 20 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

    const renderLegend = ({ payload }) => (
        <ul>
            {payload.map((entry, index) => (
                <li key={`item-${index}`} style={{ color: entry.color }}>
                    {entry.value}
                </li>
            ))}
        </ul>
    );

    return (
        <div>
            <PieChart width={400} height={300}>
                <Pie
                    data={dataPieChart}
                    cx={200}
                    cy={150}
                    innerRadius={0}
                    outerRadius={100}
                    fill="#8884d8"
                    paddingAngle={1}
                    dataKey="value"
                >
                    {dataPieChart.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend
                    iconType="circle"
                    layout="vertical"
                    verticalAlign="middle"
                    align="right"
                    content={renderLegend}
                />
            </PieChart>
        </div>
    );
};

const ColumnSell = () => {
    const dataBarChart = [
        { name: 'Cà phê', quantity: 100 },
        { name: 'Trà sữa', quantity: 80 },
        { name: 'Sinh tố', quantity: 60 },
    ];
    return (
        <BarChart width={400} height={300} data={dataBarChart}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Bar dataKey="quantity" fill="#8884d8" />
        </BarChart>
    );
};

const App = () => {
    return (
        <div>
            <ChartMonth />
            <div className={cx('dashboard_data_products')}>
                <ColumnSell />
                <PieSell />
            </div>
        </div>
    );
};

export default App;
