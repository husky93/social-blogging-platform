import React from 'react';
import Button from '../../components/Button';
import Spinner from '../../components/Spinner';

interface BottomUIProps {
  handleSave: React.MouseEventHandler<HTMLButtonElement>;
  handleSubmit: React.MouseEventHandler<HTMLButtonElement>;
  submitting: boolean;
}

export const BottomUI: React.FC<BottomUIProps> = ({
  handleSubmit,
  handleSave,
  submitting,
}) => {
  return (
    <div className="flex gap-4">
      {submitting ? (
        <Spinner />
      ) : (
        <>
          <Button
            text="Submit Post"
            variant="primary"
            handleClick={handleSubmit}
          />
          <Button
            text="Save Draft"
            variant="secondary"
            handleClick={handleSave}
          />
        </>
      )}
    </div>
  );
};

export default BottomUI;
