import ContentLoader from "react-content-loader";

export const SceletonLoader = ({ count = 6 }) => (
  <>
    {Array(count)
      .fill()
      .map((_, index) => (
        <div key={index} className="sceleton-wraper">
          <ContentLoader 
            speed={2}
            viewBox="0 0 400 600"
            backgroundColor="#f2f9f7"
            foregroundColor="#6cb9ab"
          >
            <rect x="0" y="0" width="100%" height="70%" />
            <rect x="24" y="calc(70% + 30px)" width="80%" height="30px" />
            <rect x="24" y="calc(70% + 80px)" width="40%" height="25px" />
            </ContentLoader>
        </div>
      ))}
  </>
);
