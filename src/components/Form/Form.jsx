import Form from 'react-bootstrap/Form';

function HornForm(props) {



  return (
    <Form>
      {['radio'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check // prettier-ignore
            type={type}
            id={1}
            label={` 1 Horn`}
            onClick={()=>{props.handleFilter(1)}}
          />

          <Form.Check
            type={type}
            label={` 2 Horns`}
            id={2}
            onClick={()=>{props.handleFilter(2)}}
          />

          <Form.Check // prettier-ignore
            type={type}
            id={` 3 Horns`}
            label={3}
            onClick={()=>{props.handleFilter(3)}}
          />

          <Form.Check // prettier-ignore
            type={type}
            id={` 100 Horns`}
            label={100}
            onClick={()=>{props.handleFilter(100)}}
          />
        </div>
      ))}
    </Form>
  );
}

export default HornForm;