import { createEffect, createSignal, For } from "solid-js";
import SharpCard from "../components/SharpCard";

const [cuteSharps, setCuteSharps] = createSignal([]);

const LikedSharps = () => {
  createEffect(() => {
    console.log(cuteSharps());
  });
  return (
    <div>
      <For each={cuteSharps()}>{(sharp) => <SharpCard sharp={sharp} />}</For>
    </div>
  );
};
export { cuteSharps, setCuteSharps };
export default LikedSharps;
