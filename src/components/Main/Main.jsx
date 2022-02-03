import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getRepos } from "../Actions/repos";
import Sort from "../Sort/Sort";
import Users from "../Users/Users";

function Main() {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repos.items);
  const isFetchError = useSelector((state) => state.repos.isFetchError);
  const isFetching = useSelector((state) => state.repos.isFetching);

  const [cityRepos, setCityRepos] = useState({});
  const [companyRepos, setCompanyRepos] = useState({});
  const [sort, setSort] = useState("");

  useEffect(() => {
    dispatch(getRepos());
  }, []);

  const sortCities = () => {
    const a = repos.sort(function (a, b) {
      let textA = a.address.city.toUpperCase();
      let textB = b.address.city.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
    setSort("city");
    setCityRepos(a);
  };

  const sortCompany = () => {
    const a = repos.sort(function (a, b) {
      let textA = a.company.name.toUpperCase();
      let textB = b.company.name.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
    setSort("company");
    setCompanyRepos(a);
  };

  const sortData = () => {
    if (sort === "company") {
      return companyRepos;
    }
    if (sort === "city") {
      return cityRepos;
    } else {
      return repos;
    }
  };

  return (
    <div className="main">
      {isFetchError && alert("Произошла ошибка! Попробуйте обновить страницу!")}
      <Sort sortCities={sortCities} sortCompany={sortCompany} />
      {isFetching === false ? (
        <Users repos={sortData()} />
      ) : (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
}

export default Main;
