import React from 'react';

import './OutstandingTaskCount.css';

function OutstandingTaskCount() {
  return (
    <div className="OutstandingTaskCount">
      <header className = "OutstandingTaskCount">
      <button type="button" class="btn btn-primary">Number of outstanding things... <span class="badge badge-light">4</span>
            </button>
      </header>
    </div>
  );
}

export default OutstandingTaskCount;