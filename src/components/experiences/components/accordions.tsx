import React from 'react';

type AccordionProps = {
  title: string;
  company: string;
  date: string;
  description: string;
  imageSrc: string;
  isOpen: boolean;
  onClick: () => void;
};

const Accordion: React.FC<AccordionProps> = ({
  title,
  company,
  date,
  description,
  imageSrc,
  isOpen,
  onClick,
}) => {
  return (
    <div className="border border-gray-300 rounded p-4 mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-4">
          <img src={imageSrc} alt="Company Logo" className="w-12 h-12" />
          <div>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm">{company}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-sm">{date}</p>
          <button onClick={onClick}>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M13.172 10l3.414-3.414a1 1 0 10-1.414-1.414L12 8.586l-3.172-3.172a1 1 0 00-1.414 1.414L10.828 10 7.414 13.414a1 1 0 001.414 1.414L12 11.414l3.172 3.172a1 1 0 001.414-1.414L13.172 10z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 19a9 9 0 100-18 9 9 0 000 18zM8 9a1 1 0 00-1 1v1a1 1 0 102 0V10a1 1 0 00-1-1zm4 0a1 1 0 10-2 0v1a1 1 0 102 0V10z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && <p className="text-sm">{description}</p>}
    </div>
  );
};

export default Accordion;
