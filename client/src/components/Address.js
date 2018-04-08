import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const Address = (props) => {

  return (
    <div className="forms">
      <Form>
          <Form.Input fluid label='Address' placeholder='123 Farty Lane' />
          <Form.Input fluid placeholder='Line 2 Address' />
        <Form.Group>
          <Form.Input fluid label='City' placeholder='San Francisco' width={8} />
          <Form.Input fluid label='State' placeholder='CA' width={3} />
          <Form.Input fluid label='Zip' placeholder='94123' width={4} />
        </Form.Group>
        <Button primary="true" className="next" onClick={()=>props.changeView(props.nextItem)}>Next</Button>
      </Form>
    </div>
  )
}

export default Address;
