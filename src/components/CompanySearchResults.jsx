import { useEffect } from "react";
import { Container, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
import Job from "./Job";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchCompanyJobs } from "../redux/actions/action";

const CompanySearchResults = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(searchCompanyJobs(params.company));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, params.company]);

  const loading = useSelector((state) => state.searchResults.loading);
  const error = useSelector((state) => state.searchResults.error);
  const jobs = useSelector((state) => state.searchResults.jobs);

  return (
    <Container>
      <Row>
        <Col xs={10} className="d-flex align-items-center mx-auto my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          <Button variant="outline-danger" onClick={() => navigate("/favourites")}>
            Back to Favourites
          </Button>
        </Col>
        <Col xs={10} className="mx-auto my-3">
          {loading && <Spinner animation="border" />}
          {error && <Alert variant="danger">Errore nel caricamento dei lavori</Alert>}
          {!loading && !error && jobs.map((jobData) => <Job key={jobData._id} data={jobData} />)}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
