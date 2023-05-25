import { For, Show, createEffect } from "solid-js";
import { limit, offset, setLimit, setOffset } from "../pages/Home";

const Pagination = ({ item }) => {
  return (
    <>
      <Show when={offset() >= limit()}>
        <button
          class="btn btn-primary spacing"
          onclick={() => {
            setOffset(offset() - limit());
          }}
        >
          Prev
        </button>
      </Show>
      <Show when={offset() < item().length}>
        <button
          class="btn btn-primary"
          onclick={() => {
            setOffset(offset() + limit());
          }}
        >
          Next
        </button>
      </Show>
    </>
  );
};

export default Pagination;
