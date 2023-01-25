import React, { useRef, useState } from "react";
import ReviewForm from "./ReviewForm";
import { json, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
  const [revValue, setRevValue] = useState();
  const params = useParams();
  const movieId = params.movieId;

  const revTextHandler = (revText) => {
    setRevValue(revText);
  };

  const handleReviewSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reviewBody: revValue,
          imdbId: params.movieId,
        }),
      });
      const responsedata = await response.json();
      const updatedReviews = [...reviews, { body: responsedata.body }];
      setReviews(updatedReviews);
      // setRevValue();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovieData(movieId);
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h3>Reviews</h3>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <img src={movie?.poster} alt="" />
        </Col>
        <Col>
          {
            <>
              <Row>
                <Col>
                  <ReviewForm
                    handleSubmit={handleReviewSubmit}
                    revTextHandler={revTextHandler}
                    labelText="Write a Review?"
                    revValue={revValue}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
            </>
          }
          {reviews?.map((r) => {
            return (
              <div key={r.id}>
                <Row>
                  <Col>{r.body}</Col>
                </Row>
                <Row>
                  <Col>
                    <hr />
                  </Col>
                </Row>
              </div>
            );
          })}
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
