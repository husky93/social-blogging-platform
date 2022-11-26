import React from 'react';

const Card = React.lazy(() => import('../Card'));

interface AboutFormProps {
  educationValue: string;
  jobValue: string;
  handleInputChange: React.ChangeEventHandler<HTMLInputElement>;
}

const AboutForm: React.FC<AboutFormProps> = ({
  handleInputChange,
  jobValue,
  educationValue,
}) => {
  return (
    <Card customClasses="p-4 my-6">
      <h2 className="mb-4 text-xl font-bold text-gray-900">About</h2>
      <div className="flex flex-col gap-2 my-2">
        <label
          htmlFor="education"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Education:
        </label>
        <input
          value={educationValue}
          onChange={handleInputChange}
          id="education"
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
        />
      </div>
      <div className="flex flex-col gap-2 my-2">
        <label
          htmlFor="job"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Job Title:
        </label>
        <input
          value={jobValue}
          onChange={handleInputChange}
          id="job"
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
        />
      </div>
    </Card>
  );
};

export default AboutForm;
