import React, { useEffect, useState } from 'react';
import {PieChart, ResponsiveContainer, Pie, Cell, Legend, Label} from 'recharts';

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);

  useEffect(() => { 
    setData(() => getData()); 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [events]);

  const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];

  const getData = () => {
    let data = genres.map( g => {
      const name = g;
      const value = events.filter( e => e.summary.split(' ').includes(g)).length;
      return { name, value }
    });

    data = data.filter( d => d.value > 0)
    data.sort( (a, b) => b.value - a.value);
    return data;
  }

  const colors = ['#E2D36B', '#96D7C6', '#5AA7A7', '#99A348', '#BAC94A', '#F7EC75']


  return (
    <div className="h-100 d-flex flex-column align-items-center pb-sm-5">
      <div className="w-100 d-flex pt-5 ps-4">
        <span className="fs-4 fw-bold">Event Breakdown</span>
      </div>
      <ResponsiveContainer height={400}> 
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx={'50%'}
            cy={'50%'}
            innerRadius={60}
            outerRadius={80}
            fill="#e2d36b"
            paddingAngle={10}
            dataKey="value"
            // labelLine={false}
            label={ ({ percent }) => `${(percent * 100).toFixed(0)}%` }
            
          >
            <Label value={`Total: ${events.length}`} offset={0} position="center" fill={colors[0]} />
            {
              getData().map( (d, i) => (
                <Cell key={`cell-${i}`} fill={colors[i]} stroke={colors[i]} />
              ))
            }
          </Pie>
          <Legend verticalAlign="bottom" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default EventGenre;