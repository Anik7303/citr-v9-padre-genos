import { Link } from "@tanstack/react-router";
import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    // if (this.state.hasError) return this.props.fallback;
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Uh oh!</h2>
          <p>There was an error with this page!</p>
          <p>
            <Link to="/">Click here</Link> to go back to home page.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
