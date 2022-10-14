import React from "react";
import { Button, Form, Modal } from "react-bootstrap";


const TaskModal = ({
  showModal,
  setShowModal,
  title,
  desc,
  setTitle,
  setDesc,
  handleSaveTask
}) => {
  return (
    <div>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        className="task_modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Save Your Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add your title here"
                autoFocus
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-1"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Describe your work done"
                autoFocus
                value={desc}
                onChange={(e)=>setDesc(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveTask}>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TaskModal;
