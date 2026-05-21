import React from 'react';
import PropTypes from 'prop-types';

const BlurBlob = ({ position, size }) => {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className="absolute pointer-events-none"
      style={{ top, left, width, height, transform: 'translate(-50%, -50%)' }}
    >
      <div className="w-full h-full rounded-full opacity-10 blur-3xl animate-blob"
        style={{ background: 'radial-gradient(circle, #64ffda, #0ea5e9)' }}
      />
    </div>
  );
};

BlurBlob.propTypes = {
  position: PropTypes.shape({ top: PropTypes.string, left: PropTypes.string }),
  size: PropTypes.shape({ width: PropTypes.string, height: PropTypes.string }),
};

export default BlurBlob;