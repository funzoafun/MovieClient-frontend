import { Form, Button } from "react-bootstrap";

const ReviewForm = ({ handleSubmit, revTextHandler, revValue, labelText }) => {
  const reviewTextHanlder = (event) => {
    revTextHandler(event.target.value);
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>{labelText}</Form.Label>
        <Form.Control
          onChange={reviewTextHanlder}
          as="textarea"
          rows={3}
          defaultValue={revValue}
        />
      </Form.Group>
      <Button variant="outline-info" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default ReviewForm;
