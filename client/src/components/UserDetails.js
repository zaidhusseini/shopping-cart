import React from 'react';
import { Button,Form } from 'semantic-ui-react';

const UserDetails = (props)=> {

  return (<div className="forms">
            <Form>
              <Form.Input fluid label='First Name' placeholder='e.g. Jane' />
              <Form.Input fluid label='Last Name' placeholder='e.g. Doe' />
              <Form.Input fluid label='E-mail' placeholder='John@Fartstacart.com' />
              <Form.Input fluid label='Enter Password' type='password' placeholder='Enter Password'/>
              <Button primary="true" className="next" onClick={()=>props.changeView('address')}>Next</Button>
            </Form>
          </div>)
}

export default UserDetails;
