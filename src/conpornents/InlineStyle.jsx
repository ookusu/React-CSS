export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #e8d3d1",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const titleStyle = {
    margin: "0",
    color: "#c8b3b1"
  };
  const buttonStyle = {
    backgroundColor: "#f8e3e1",
    border: "none",
    padding: "8px",
    borderRadius: "8px"
  };
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>INLINESTYLE</p>
      <button style={buttonStyle}>perfect!</button>
    </div>
  );
};
