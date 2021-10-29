import cssmoduels from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={cssmoduels.contener}>
      <p className={cssmoduels.title}>CSSMODULES</p>
      <button className={cssmoduels.button}>perfect!</button>
    </div>
  );
};
