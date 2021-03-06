export const StyledJsx = () => {
  return (
    <>
      <div className="contener">
        <p className="title">StyledJSX</p>
        <button className="button">perfect!</button>
      </div>

      <style jsx="true">
        {`
          .contener {
            border: solid 2px #e8d3d1;
            border-radius: 20px;
            padding: 8px;
            margin: 8px;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }

          .title {
            margin: 0;
            color: #c8b3b1;
          }

          .button {
            background-color: #f8e3e1;
            border: none;
            padding: 8px;
            border-radius: 8px;
          }
        `}
      </style>
    </>
  );
};
