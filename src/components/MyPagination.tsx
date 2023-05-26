import { Col, Container, Form, Pagination, Row } from "solid-bootstrap";
import { For, Show, createEffect } from "solid-js";
import { limit, offset, setLimit, setOffset } from "../pages/Home";
import styles from "./Pagination.module.css";

const MyPagination = ({ item }) => {
  return (
    <>
      <Container>
        <Row>
          <Col class={styles.pagination} md={8}>
            {/* <Pagination.First />
            <Pagination.Prev /> */}
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
            {/* <Pagination.Next />
            <Pagination.Last /> */}
          </Col>
          <Col class={styles.label} md={2}>
            <label class={styles.label} for="perPage">
              Items Per Page:
            </label>
          </Col>
          <Col class={styles.pagination} md={1}>
            <Form.Select
              id="perPage"
              value={limit()}
              onchange={(event) => {
                setLimit(+event.target.value);
              }}
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </Form.Select>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyPagination;
