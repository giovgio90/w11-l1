import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { addToFavouriteAction2, removeFromFavourite } from "../redux/actions/action";

const Job = ({ data }) => {
  const favourites = useSelector((state) => state.favourite.list);
  const dispatch = useDispatch();

  const isFav = favourites.includes(data.company_name);

  return (
    <Row className="mx-0 mt-3 py-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col className="text-end">
        {isFav ? (
          <HeartFill color="red" size={22} onClick={() => dispatch(removeFromFavourite(data))} />
        ) : (
          <Heart color="red" size={22} onClick={() => dispatch(addToFavouriteAction2(data))} />
        )}
      </Col>
    </Row>
  );
};

export default Job;
