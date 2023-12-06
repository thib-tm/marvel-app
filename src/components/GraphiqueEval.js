import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend } from 'recharts';
import PropTypes from 'prop-types';

const MyRadarChart = ({ data }) => {
    const colors = ["#8884d8", "#82ca9d"]; 

    return (
        <RadarChart outerRadius={90} width={730} height={250} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 8]} />
            {data.length > 0 && Object.keys(data[0]).filter(key => key !== 'subject').map((key, index) => (
                <Radar key={index} name={key} dataKey={key} stroke={colors[index % colors.length]} fill={colors[index % colors.length]} fillOpacity={0.2} />
            ))}
            <Legend />
        </RadarChart>
    );
}

MyRadarChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        subject: PropTypes.string,
    })),
};

export default MyRadarChart;