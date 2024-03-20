import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import UserList from "../component/UserList";
import SkeletonList from "../component/Skeleton";
import SortButtons from "../component/SortButtons";

const API_URL = process.env.REACT_APP_API_KEY;

function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filteredData, setFilteredData] = useState(null);
  const [previousSortValue, setPreviousSortValue] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleFilter = () => {
    const filteredData = data.filter((follower) => {
      const joinDate = new Date(follower.join_date * 1000);
      return joinDate >= new Date(startDate) && joinDate <= new Date(endDate);
    });
    setFilteredData(filteredData);
  };

  const handleRemove = (uid) => {
    const updatedData = data.filter((follower) => follower.uid !== uid);
    setData(updatedData);

    if (filteredData !== null) {
      const updatedFilteredData = filteredData.filter(
        (follower) => follower.uid !== uid
      );
      setFilteredData(updatedFilteredData);
    }
  };

  const handleSort = (criteria) => {
    setPreviousSortValue(criteria);
    const sortedData = (filteredData || data).slice();
    sortedData.sort((a, b) => {
      if (previousSortValue === criteria) {
        setPreviousSortValue(null);
        return b.twubric[criteria] - a.twubric[criteria];
      }

      return a.twubric[criteria] - b.twubric[criteria];
    });
    setFilteredData(sortedData);
    setSortBy(criteria);
  };

  const displayedData = filteredData || data;

  return (
    <div className="container">
      <h1 className="text-center">Twubric page</h1>

      <SortButtons
        sortBy={sortBy}
        previousSortValue={previousSortValue}
        handleSort={handleSort}
      />

      <div className="row">
        <div className="col-md-4 mb-3">
          <label htmlFor="startDate" className="form-label">Starting Date</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={handleStartDateChange}
            className="form-control"
          />
        </div>

        <div className="col-md-4 mb-3">
          <label htmlFor="endDate" className="form-label">Ending Date</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={handleEndDateChange}
            className="form-control"
          />
        </div>

        <div className="col-md-4 mb-3 d-flex align-items-end">
          <button
            className="btn btn-primary"
            onClick={handleFilter}
          >
            Apply Filter
          </button>
        </div>
      </div>


      <div className="followers-grid">

        {loading ?
          (Array.from({ length: 10 }).map((_, index) => (
            <SkeletonList key={index} />
          ))

          ) : (
            <>
              {displayedData.map((follower) => (
                <UserList
                  key={follower.uid}
                  follower={follower}
                  onRemove={handleRemove}
                />
              ))}
            </>
          )}

      </div>
    </div>
  );
}

export default Home;
