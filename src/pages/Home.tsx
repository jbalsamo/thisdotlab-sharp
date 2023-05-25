import { createSignal, For } from "solid-js";
import { sharps } from "../App";
import SharpCard from "../components/SharpCard";

const [offset, setOffset] = createSignal(0);
const [limit, setLimit] = createSignal(10);

const Home = () => {
  return (
    <div>
      <h2>List of Awesome Pets</h2>
      <For each={sharps().slice(offset(), limit())}>
        {(sharp) => <SharpCard sharp={sharp} />}
      </For>
    </div>
  );
};

export { offset, limit };

export default Home;
