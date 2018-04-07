import React from 'react';
import { Button,Form } from 'semantic-ui-react';

const CreditCard = (props)=> {

  return (<div className="forms">
            <Form>
              <Form.Input fluid label='Credit Card #' placeholder='1234 2222 4567 4321' />
              <Form.Group>
                <Form.Input fluid label='Expiry Date' placeholder='08/2020' width={4} />
                <Form.Input fluid label='CVV' placeholder='123' width={3} />
                <Form.Input fluid label='Zip' placeholder='94123' width={4} />
              </Form.Group>
              <Button primary="true" className="next">Next</Button>
            </Form>
          </div>)
}

export default CreditCard;
