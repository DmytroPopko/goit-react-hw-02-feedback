import React from 'react';
import Value from '../Value';

const Statistics = ({
  value: { good, neutral, bad, total, positivePercentage },
}) => (
  <div>
    <Value valueName={'Good'} value={good} />
    <Value valueName={'Neutral'} value={neutral} />
    <Value valueName={'Bad'} value={bad} />
    <Value valueName={'Total'} value={total} />
    <Value
      valueName={'Positive feedback'}
      value={isNaN(positivePercentage) ? 0 : positivePercentage}
    />
  </div>
);

export default Statistics;
