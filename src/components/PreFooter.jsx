import React from 'react';
import { ArrowRight } from '@phosphor-icons/react';
import Button from './Button';
import './PreFooter.css';

const PreFooter = ({ onCotizarClick }) => {
  const handleCotizar = () => {
    if (onCotizarClick) {
      onCotizarClick();
    } else {
      window.location.href = 'https://assist-365.com/products';
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1366px] prefooter-container h-[340px] flex flex-col items-center justify-end pb-8">
        <div className="w-full max-w-[358px] lg:max-w-[998px] rounded-3xl bg-white bg-opacity-85 py-4 lg:py-8 px-4 lg:px-10 flex flex-col lg:flex-row items-center lg:justify-between">
          <img
            src="https://assistcdn.s3.us-west-1.amazonaws.com/assets/site/logo.svg"
            alt="Assist 365 Logo"
            className="mb-4 lg:mb-0"
          />

          <h2 className="text-2xl lg:text-4xl font-semibold text-[#0059BA] mb-4 lg:mb-0 text-center lg:text-left px-4 lg:px-0">
            En tu viaje, <strong>a tu lado.</strong>
          </h2>

          <Button
            variant="default"
            color="primary"
            icon={<ArrowRight size={20} weight="bold" />}
            iconPosition="right"
            size="large"
            classes="w-full lg:w-auto flex justify-start mt-4 lg:mt-0"
            onClick={handleCotizar}
          >
            Cotizá tu asistencia
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
