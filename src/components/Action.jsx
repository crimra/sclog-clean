import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { useTranslation } from 'react-i18next';

const Action = () => {
  const { t } = useTranslation();

  const data = [
    { name: t('action.total'), value: 25, color: '#F70C0D', logo: '/assets/Total.svg' },
    { name: t('action.snpc'), value: 25, color: '#102E60', logo: '/assets/SNPC.svg' },
    { name: t('action.gpl'), value: 25, color: '#FFC000', logo: '/assets/GPL.svg' },
    { name: t('action.xoil'), value: 12.5, color: '#FFFF00', logo: '/assets/x-oil.svg' },
    { name: t('action.puma'), value: 12.5, color: '#00B050', logo: '/assets/Puma.svg' },
  ];

  const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const RADIAN = Math.PI / 180;
    const labelRadius = outerRadius + 50;
    const textRadius = innerRadius + (outerRadius - innerRadius) * 0.5;

    const xLogo = cx + labelRadius * Math.cos(-midAngle * RADIAN);
    const yLogo = cy + labelRadius * Math.sin(-midAngle * RADIAN);

    const xText = cx + textRadius * Math.cos(-midAngle * RADIAN);
    const yText = cy + textRadius * Math.sin(-midAngle * RADIAN);

    const logoSize = 48; // taille fixe pour tous les logos (ajuste selon ton besoin)
    const boxSize = 40;

    return (
      <g>
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

  return (
    <div className="action">
      <p className="title2 animated">{t('action.title')}</p>
      <p>{t('action.intro')}</p>

      <div className="chart">
        <PieChart width={500} height={500} aria-label={t('action.title')}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={180}
            labelLine={false}
            label={CustomLabel}
            isAnimationActive={true}
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
