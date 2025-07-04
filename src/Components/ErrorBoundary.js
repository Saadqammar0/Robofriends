import {Component} from "react";

class ErrorBoundary extends Component {
constructor(props) {
    super(props);
    this.state = { hasError: false };
  }     
componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.error("ErrorBoundary caught an error:", error, info);
  }
  render(){
if(this.state.hasError) {
      return <h1 className='tc'>Oops. That is not good</h1>;
    }
    else {
      return this.props.children;
    }
  }
}
  export default ErrorBoundary;




