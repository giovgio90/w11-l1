import { Container, Row, Col, Form, Button, Alert, Card, Placeholder } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { searchJobs } from "../redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import Job from "./Job";
import { useState } from "react";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(searchJobs(query));
  };

  const jobs = useSelector((state) => state.searchResults.jobs);
  const loading = useSelector((state) => state.searchResults.loading);
  const error = useSelector((state) => state.searchResults.error);

  return (
    <Container>
      <Row>
        <Col xs={10} className="d-flex flex-wrap align-items-center mx-auto my-3">
          <h1 className="display-1 me-auto">Remote Jobs Search</h1>
          <Button variant="outline-danger" onClick={() => navigate("/favourites")}>
            Go to Favourites
          </Button>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="Search company..." />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {loading && (
            <Card className="mt-3" style={{ width: "900px", height: "60px" }}>
              <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                  <Placeholder xs={6} />
                </Placeholder>
              </Card.Body>
            </Card>
          )}
          {error && (
            <Alert className="mt-3" variant="danger">
              Caricamento delle compagnie non riuscito!
            </Alert>
          )}
          {!loading && !error && jobs.map((jobData) => <Job key={jobData._id} data={jobData} />)}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
