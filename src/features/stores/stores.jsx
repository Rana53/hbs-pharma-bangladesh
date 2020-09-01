import React, {Component} from 'react';
import { Button} from 'react-bootstrap';


class Stores extends Component {
  render (){
    return(
      <div className="text-center m-4 border border-primary">
        <a href='/store/add-product'>
          <Button 
            variant="success" 
            className="btn"
            size="lg"
            >
            Add New Product
          </Button>
        </a>
        <hr/>
        <Button
          variant="success" 
          className="btn"
          size="lg"
          >
          View Existing Product</Button>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
      
    )
  }
}
export default Stores;