import { createEffect, createSignal, For } from "solid-js";
import { sharps } from "../App";
import Pagination from "../components/Pagination";
import SharpCard from "../components/SharpCard";
import styles from "./Home.module.css";
const [offset, setOffset] = createSignal(0);
const [limit, setLimit] = createSignal(10);

const Home = () => {
  createEffect(() => {
    console.log("Offset:", offset());
    console.log("Limit:", limit());
    console.log("Sliced Home:", sharps().slice(offset(), offset() + limit()));
  });
  return (
    <div>
      <h2>List of SHARP Projects</h2>
      <div class={styles.pagination}>
        <Pagination item={sharps} />
      </div>
      <For each={sharps().slice(offset(), offset() + limit())}>
        {(sharp) => <SharpCard sharp={sharp} />}
      </For>
      <div class={styles.pagination}>
        <Pagination item={sharps} />
      </div>
    </div>
  );
};

export { offset, limit, setOffset, setLimit };

export default Home;
