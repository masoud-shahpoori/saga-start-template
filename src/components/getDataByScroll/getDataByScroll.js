import React, { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

export default function GetDataByScroll() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingPaging, setIsLoadingPaging] = useState(true);
  const [resultsDetail, setResultsDetail] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const observer = useRef();

  const lastElement = useCallback(
    (node) => {
      if (isLoadingPaging) {
        return;
      }
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((intieres) => {
        if (intieres[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoadingPaging, hasMore]
  );

  const fetchData = useCallback(() => {
    setIsLoadingPaging(true);
    axios.get(``).then((response) => {
      // setTokenDetail(response.data[0]);
      // setResultsDetail(resultsDetail.concat(response.data[0].details));
      // setTimeout(() => {
      //   if (isLoading) {
      //     setIsLoading(false);
      //   }
      // }, 500);
      // if (response.data.next !== null) {
      //   setHasMore(true);
      // } else {
      //   setHasMore(false);
      // }
    });
  }, [page]);

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div>
      {resultsDetail.map((item, index) => {
        if (Object.keys(resultsDetail).length === index + 1) {
          return <tr ref={lastElement}></tr>;
        } else {
          return <tr></tr>;
        }
      })}
    </div>
  );
}
