import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class UserDetails extends Component {

  render() {
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='First name' placeholder='e.g. Fart' />
          <Form.Input fluid label='Last name' placeholder='e.g. McFarty' />
          <Form.Input fluid label='E-mail' placeholder='farts@Fartsacart.com' />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default UserDetails;
