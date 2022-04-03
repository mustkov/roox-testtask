import React, { useState, useEffect } from "react";
import Sort from "../Sort/Sort";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNewData } from "../../reducers/reposReducer";

function Profile(props) {
  const currentRepos = props.location.propsSearch;

  if (!props.location.propsSearch) return <Redirect to="/" />;

  const dispatch = useDispatch();

  const [value, setValue] = useState(null);
  const [editState, setEditState] = useState(false);
  const [forms, setForms] = useState({
    Name: currentRepos.name,
    "User name": currentRepos.username,
    "E-mail": currentRepos.email,
    Street: currentRepos.address.street,
    City: currentRepos.address.city,
    "Zip code": currentRepos.address.zipcode,
    Phone: currentRepos.phone,
    Website: currentRepos.website,
    Comment: "",
  });
  const [valid, setValid] = useState(true);

  useEffect(() => {
    dispatch(setNewData(forms));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const edit = (newData, form) => {
    const newState = { ...forms };
    newState[form] = newData;
    setForms(newState);
  };

  const dispatchJSON = () => {
    console.log(JSON.stringify(forms));
    setEditState(false);
  };

  const validation = (name, form, index) => {
    const emailVal =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const nameVal =
      /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
    const usernameVal = /^[a-zA-Z\-]+$/;
    const phoneVal = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    const websiteVal =
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;

    if (form == "E-mail") {
      if (!emailVal.test(String(name).toLowerCase())) {
        setValid(false);
        document.getElementById(index).classList.add("color_non_validate");
      } else {
        setValid(true);
        document.getElementById(index).classList.remove("color_non_validate");
      }
    }
    if (form == "Name") {
      if (!nameVal.test(String(name).toLowerCase())) {
        setValid(false);
        document.getElementById(index).classList.add("color_non_validate");
      } else {
        setValid(true);
        document.getElementById(index).classList.remove("color_non_validate");
      }
    }
    if (form == "User name") {
      if (!usernameVal.test(String(name).toLowerCase())) {
        setValid(false);
        document.getElementById(index).classList.add("color_non_validate");
      } else {
        setValid(true);
        document.getElementById(index).classList.remove("color_non_validate");
      }
    }
    if (form == "Phone") {
      if (!phoneVal.test(String(name).toLowerCase())) {
        setValid(false);
        document.getElementById(index).classList.add("color_non_validate");
      } else {
        setValid(true);
        document.getElementById(index).classList.remove("color_non_validate");
      }
    }
    if (form == "Website") {
      if (!websiteVal.test(String(name).toLowerCase())) {
        setValid(false);
        document.getElementById(index).classList.add("color_non_validate");
      } else {
        setValid(true);
        document.getElementById(index).classList.remove("color_non_validate");
      }
    }
  };

  function Forms() {
    return Object.keys(forms).map((form, index) => (
      <form
        onSubmit={handleSubmit}
        className="profile_form"
        key={`${form}_${index}`}
      >
        <label htmlFor={index} className="profile_form__label">
          {form}
        </label>
        <input
          required={form === "Comment" ? false : true}
          type="text"
          className={
            editState
              ? "profile_form__input form-control browser-default"
              : "profile_form__input edit form-control browser-default"
          }
          id={index}
          defaultValue={forms[form]}
          onChange={(e) => {
            setValue(e.target.value);
            edit(e.target.value, form);
            validation(e.target.value, form, index);
          }}
          disabled={editState ? false : true}
        />
      </form>
    ));
  }

  return (
    <div className="main container">
      <Sort />
      <div className="profile profile_container">
        <div className="profile_header">
          <h2>Профиль пользователя</h2>
          <a
            onClick={() => setEditState(!editState)}
            className="profile_button_edit waves-effect waves-light btn"
          >
            Редактировать
          </a>
        </div>
        <div className="profile_block">{Forms()}</div>
        <button
          disabled={editState && valid === true ? false : true}
          onClick={dispatchJSON}
          className="profile_button_sent waves-effect waves-light btn"
        >
          отправить
        </button>
      </div>
    </div>
  );
}

export default Profile;
