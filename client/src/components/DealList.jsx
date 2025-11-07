import React from 'react';
import DealCard from './DealCard';

function DealList({ deals }) {
  if (!deals.length) return <p style={{ color: '#666' }}>No deals yet.</p>;

  return (
    <div className="deal-list">
      {deals.map((d) => (
        <DealCard key={d._id} deal={d} />
      ))}
    </div>
  );
}

export default DealList;
