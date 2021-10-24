import React from "react";
function WithLoading(Component) {
  return function WihLoadingComponent({ loading, data }) {
    if (!loading) return <Component data={data} />;
    return <p>Be Hold, fetching data may take some time :)</p>;
  };
}
export default WithLoading;
