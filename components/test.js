import * as React from "react";
import {
  useFirstMountState,
  useUpdate,
  useRendersCount,
  createGlobalState,
} from "react-use";
import { useGlobalValue, useSecondGlobalValue } from "../pages/index";

const Demo = () => {
  const [value] = useGlobalValue();
  const [secondValue] = useSecondGlobalValue();
  const isFirstMount = useFirstMountState();
  const update = useUpdate();
  const rendersCount = useRendersCount();
  return (
    <div>
      <span>value :{value}</span>
      <span>secodn value : {secondValue}</span>
      <span>Renders count: {rendersCount}</span>
      <span>This component is just mounted: {isFirstMount ? "YES" : "NO"}</span>
      <br />
      <button onClick={update}>re-render</button>
    </div>
  );
};
export default Demo;
