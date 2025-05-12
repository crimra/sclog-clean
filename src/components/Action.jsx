import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'Total', value: 25, color: '#F70C0D', logo: '/assets/Total.svg' },
  { name: 'Puma', value: 25, color: '#102E60', logo: '/assets/Puma.svg' },
  { name: 'X-Oil', value: 25, color: '#FFC000', logo: '/assets/x-oil.svg' },
  { name: 'GPL', value: 12.5, color: '#00B050', logo: '/assets/GPL.svg' },
  { name: 'SNPC', value: 12.5, color: '#FFFF00', logo: '/assets/SNPC.svg' },
];

const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const RADIAN = Math.PI / 180;
  const labelRadius = outerRadius + 50;
  const textRadius = innerRadius + (outerRadius - innerRadius) * 0.5;

  const xLogo = cx + labelRadius * Math.cos(-midAngle * RADIAN);
  const yLogo = cy + labelRadius * Math.sin(-midAngle * RADIAN);

  const xText = cx + textRadius * Math.cos(-midAngle * RADIAN);
  const yText = cy + textRadius * Math.sin(-midAngle * RADIAN);

  // Ajuster la taille du logo en fonction du nom
  const logoSize = data[index].name === 'Puma' || data[index].name === 'X-Oil' ? 100 : 50;
  const boxSize = 40;

  return (
    <g>
      {/* Pourcentage avec blur */}
      <foreignObject
        x={xText - boxSize / 2}
        y={yText - boxSize / 2}
        width={boxSize}
        height={boxSize}
      >
        <div xmlns="http://www.w3.org/1999/xhtml" className="custom-label">
          {data[index].value}%
        </div>
      </foreignObject>

      {/* Logo positionné autour */}
      <image
        href={data[index].logo}
        x={xLogo - logoSize / 2}
        y={yLogo - logoSize / 2}
        width={logoSize}
        height={logoSize}
      />
    </g>
  );
};

const Action = () => {
  return (
    <div className="action">
      <p className="title2">Actionnariat SCLOG</p>
      <p>
        La Société Commune de Logistique, SCLOG, est une société anonyme dont
        l’actionnariat est composé comme suit :
      </p>

      <div className="chart">
        <PieChart width={500} height={500} aria-label="Répartition de l'actionnariat SCLOG">
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={180}
            labelLine={false}
            label={CustomLabel}
            isAnimationActive={true} // Active l'animation
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Action;
