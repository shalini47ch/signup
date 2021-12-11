import React from "react";
import Modal from "./components/Modal/Modal";
import "./App.css";
import { CSSTransition } from "react-transition-group";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);//since this will be outside the scope
  }
  componentDidMount() {
    this.setState({
      mounted: true,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      mounted: false,
    });
  
  }
  render() {
    var child;
    if (this.state.mounted === true) {
      //meaning if the component is rendered on the screen then render the Modal
      child = <Modal onSubmit={this.handleSubmit} />;
    }

    return (
      
      <div className="main-content">
        
          <CSSTransition
            transitionName="transition-group"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            <>
            {child}
            </>
          </CSSTransition>
        
      </div>
    
    );
  }
}
export default App;
