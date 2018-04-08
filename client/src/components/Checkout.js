import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const Checkout = (props) => {

  return (<div>
            <Button animated='fade' onClick={()=>props.changeView(props.nextItem)}>
              <Button.Content primary="true" hidden>Checkout</Button.Content>
              <Button.Content primary="true" visible>
                <Icon name='shop' />
              </Button.Content>
            </Button>
          </div>)

}

export default Checkout;