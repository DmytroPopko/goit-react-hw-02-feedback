import React from 'react';

const SectionTitle = ({ title, children }) => (
  <>
    <h2>{title}</h2>
    <div>{children}</div>
  </>
);

export default SectionTitle;
