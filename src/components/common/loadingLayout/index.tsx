import React from "react";

//interface
interface LoadingLayoutProps {
  children: React.ReactNode;
  isLoading: boolean;
}

const LoadingLayout: React.FC<LoadingLayoutProps> = ({
  isLoading,
  children,
}) => {
  return (
    <>
      {isLoading ? (
        <div className="w-full flex items-center justify-center">
          <div className="loader scale-125">
            <svg viewBox="0 0 80 80">
              <circle id="test" cx="40" cy="40" r="32"></circle>
            </svg>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default LoadingLayout;
