import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {

  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error boundary caught an error, file it to TrackJS : ", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this Listing. {""}
          <Link to="/">Click to go back to HomePage</Link>
        </h2>
      )
    }

    // Pass without doing anything
    return this.props.children;
  }
}

export default ErrorBoundary;