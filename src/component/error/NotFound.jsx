import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <>
      <Container className="text-center py-5">
        <h1 className="display-1 fw-bold mb-3">404</h1>
        <h3 className="mb-3">Page Not Found</h3>
        <p className="lead mb-4">
          The page you’re looking for doesn’t seem to exist.
        </p>
        <Link to="/" className="btn btn-primary">
          Home
        </Link>
      </Container>
    </>
  );
}

export default NotFound;
