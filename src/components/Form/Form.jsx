import { useState } from "react";
import Form from "react-bootstrap/Form";

function HornForm(props) {

  return (
    <Form>
      <div key={`default-radio`} className="mb-3">
        <Form.Check // prettier-ignore
          name="filterPickBtn"
          type={"radio"}
          id={1}
          label={` 1 Horn`}
          onClick={() => {
            props.handleFilter(1);
          }}
        />

        <Form.Check
          name="filterPickBtn"
          type={"radio"}
          label={` 2 Horns`}
          id={2}
          onClick={() => {
            props.handleFilter(2);
          }}
        />

        <Form.Check // prettier-ignore
          name="filterPickBtn"
          type={"radio"}
          id={3}
          label={"3 Horns"}
          onClick={() => {
            props.handleFilter(3);
          }}
        />

        <Form.Check // prettier-ignore
          name="filterPickBtn"
          type={"radio"}
          id={100}
          label={"100 Horns"}
          onClick={() => {
            props.handleFilter(100);
          }}
        />
      </div>
    </Form>
  );
}

export default HornForm;
