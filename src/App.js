
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const RevenueTable = () => {
    const revenueData = [
        { label: 'Выручка', day: 3434, yesterday: 4343, thisweek: 150330, details: [{ time: '09:00', value: 400 }, { time: '09:00', value: 400 }, { time: '09:00', value: 400 }, { time: '12:00', value: 800 }, { time: '15:00', value: 300 }] },
        { label: 'Наличные', day: 150, yesterday: 100, thisweek: 500, details: [{ time: '09:00', value: 400 }, { time: '12:00', value: 800 }, { time: '15:00', value: 300 }] },
        { label: 'Безналичный расчёт', day: 3434, yesterday: 4343, thisweek: 15330, details: [{ time: '09:00', value: 400 }, { time: '09:00', value: 400 }, { time: '09:00', value: 400 }, { time: '12:00', value: 800 }, { time: '15:00', value: 300 }] },
        { label: 'Кредитные карты', day: 3434, yesterday: 4343, thisweek: 50330, details: [{ time: '09:00', value: 400 }, { time: '12:00', value: 800 }, { time: '15:00', value: 300 }] },
        { label: 'Средний чек', day: 3434, yesterday: 4343, thisweek: 15033, details: [{ time: '09:00', value: 400 }, { time: '09:00', value: 400 }, { time: '09:00', value: 400 }, { time: '12:00', value: 800 }, { time: '15:00', value: 300 }] },
        { label: 'Средний гость', day: 3434, yesterday: 4343, thisweek: 15030, details: [{ time: '09:00', value: 400 }, { time: '12:00', value: 800 }, { time: '15:00', value: 300 }] },
        { label: 'Удаления из чека (после оплаты)', day: 3434, yesterday: 343, thisweek: 150330, details: [{ time: '09:00', value: 400 }, { time: '12:00', value: 800 }, { time: '15:00', value: 300 }] },
        { label: 'Удаления из чека (до оплаты)', day: 34, yesterday: 433, thisweek: 150330, details: [{ time: '09:00', value: 400 }, { time: '12:00', value: 800 }, { time: '09:00', value: 400 }, { time: '09:00', value: 400 }, { time: '15:00', value: 300 }] },
        { label: 'Количество чеков', day: 3434, yesterday: 4343, thisweek: 150330, details: [{ time: '09:00', value: 300 }, { time: '12:00', value: 600 }, { time: '15:00', value: 300 }] },
        { label: 'Количество гостей', day: 4, yesterday: 4343, thisweek: 1500, details: [{ time: '09:00', value: 1500 }, { time: '09:00', value: 400 }, { time: '09:00', value: 400 }, { time: '12:00', value: 2500 }, { time: '15:00', value: 4000 }] },
    ];

    const [expandedRow, setExpandedRow] = useState(null);

    const handleRowClick = (index) => {
        setExpandedRow(expandedRow === index ? null : index);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Выручка</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ccc', padding: '10px' }}>Показатель</th>
                        <th style={{ border: '1px solid #ccc', padding: '10px' }}>Текущий день</th>
                        <th style={{ border: '1px solid #ccc', padding: '10px' }}>Вчера</th>
                        <th style={{ border: '1px solid #ccc', padding: '10px' }}>Этот день недели</th>
                    </tr>
                </thead>
                <tbody>
                    {revenueData.map((item, index) => (
                        <React.Fragment key={index}>
                            <tr onClick={() => handleRowClick(index)} style={{ cursor: 'pointer' }}>
                                <td style={{ border: '1px solid #ccc', padding: '10px' }}>{item.label}</td>
                                <td style={{ border: '1px solid #ccc', padding: '10px' }}>{item.day}</td>
                                <td style={{ border: '1px solid #ccc', padding: '10px' }}>{item.yesterday}</td>
                                <td style={{ border: '1px solid #ccc', padding: '10px' }}>${item.thisweek}</td>
                            </tr>
                            {expandedRow === index && (
                                <tr>
                                    <td colSpan={2} style={{ border: '1px solid #ccc', padding: '10px' }}>
                                        <LineChart width={500} height={300} data={item.details}>
                                            <XAxis dataKey="time" />
                                            <YAxis />
                                            <Tooltip />
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <Line type="monotone" dataKey="value" stroke="#8884d8" />
                                        </LineChart>
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

function App() {
    return (
        <div>
            <RevenueTable />
        </div>
    );
}

export default App;
