import React from "react";

//interface
interface LoadingLayoutProps {
  children: React.ReactNode;
  isLoading: boolean;
  hasCard?: boolean;
  repetitionsNumber?: number;
  loadingClass?: string;
  Card?: React.ComponentType<{}>;
}

const LoadingLayout: React.FC<LoadingLayoutProps> = ({
  isLoading,
  children,
  hasCard,
  loadingClass,
  Card,
  repetitionsNumber,
}) => {
  return (
    <>
      {isLoading ? (
        hasCard ? (
          Card !== undefined &&
          //this is lazy loading
          Array.from(Array(repetitionsNumber), (item, index) => {
            return <Card key={index} />;
          })
        ) : (
          <div
            className={`w-full flex items-center justify-center ${loadingClass}`}
          >
            <div className="loader scale-125">
              <svg viewBox="0 0 80 80">
                <circle id="test" cx="40" cy="40" r="32"></circle>
              </svg>
            </div>
          </div>
        )
      ) : (
        children
      )}
    </>
  );
};

export default LoadingLayout;
