import React, { useState } from "react";
import Button from "../../Component/Button";
import { RangeInput, TextInput, Input } from "../../Component/Input";
import RadioGroup from "../../Component/RadioButton/RadioGroup";
import {
  checkEmpty,
  checkPattern,
  checkMin,
  checkMax,
} from "../../utils/common";

const OverlayContent = (props) => {
  const { onFormSubmit } = props;
  const [formData, setFormData] = useState({
    shift: "Part-Time (9.00 am - 5.00 pm IST)",
  });
  const [focus, setFocus] = useState(null);
  const [filled, toggleFilled] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState(false);

  const onFormDataChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
    onInputBlur(e);
  };

  const onInputBlur = (e) => {
    const { name, value } = e.target;
    setFocus(name);
    let msg = null;
    switch (name) {
      case "title":
        msg = checkPattern(
          value,
          /^[a-zA-Z\s]+$/,
          "Special characters are not allowed",
        );
        setError(msg);
        break;
      case "companyName":
        msg = checkPattern(
          value,
          /^[a-zA-Z\s]+$/,
          "Special characters are not allowed",
        );
        setError(msg);
        break;
      case "industry":
        msg = checkPattern(
          value,
          /^[a-zA-Z\s]+$/,
          "Special characters are not allowed",
        );
        setError(msg);
        break;
      case "location":
        msg = checkPattern(
          value,
          /^[a-zA-Z,\s]+$/,
          "Special character comma(,) only allowed",
        );
        setError(msg);
        break;
      case "remoteType":
        msg = checkPattern(
          value,
          /^[a-zA-Z-\s]+$/,
          "Special character hyphen(-) only allowed",
        );
        setError(msg);
        break;
      case "experienceMin":
        msg = checkMin(value, formData["experienceMin"]);
        setError(msg);
        break;
      case "experienceMax":
        msg = checkMax(formData["experienceMin"], value);
        setError(msg);
        break;
      case "salaryMin":
        msg = checkMin(value, formData["salaryMax"]);
        setError(msg);
        break;
      case "salaryMax":
        msg = checkMax(formData["salaryMin"], value);
        setError(msg);
        break;
      case "totalEmployee":
        msg = checkPattern(
          value,
          /^[a-zA-Z-\s]+$/,
          "Special character hyphen(-) only allowed",
        );
        setError(msg);
        break;
      case "applyType":
        msg = checkEmpty(formData["applyType"]);
        setError(msg);
        break;
      default:
    }
  };

  const onSubmit = () => {
    if (error) return;
    onInputBlur({ target: { name: "applyType" } });
    if (!error && filled) {
      setSubmit(filled);
      onFormSubmit({ ...formData });
    } else {
      toggleFilled(!filled);
    }
  };

  const radioProps = [
    {
      type: "radio",
      name: "applyType",
      id: "quickApply",
      value: "quick",
      label: "Quick apply",
      autoFocus: formData["applyType"] === "quick",
      checked: false,
      onChange: onFormDataChange,
    },
    {
      type: "radio",
      name: "applyType",
      id: "externalApply",
      value: "external",
      label: "External apply",
      autoFocus: formData["applyType"] === "external",
      checked: false,
      onChange: onFormDataChange,
    },
  ];

  const Header = () => {
    return (
      <div className='flex items-start justify-between'>
        <h1 className='text-xl font-medium leading-6 text-black-900'>
          Create a job
        </h1>
        <h2 className='text-base font-medium leading-6 text-black-900'>{`Step ${
          filled ? 2 : 1
        }`}</h2>
      </div>
    );
  };

  const BasicInfo = () => {
    return (
      <div>
        <TextInput
          id={"title"}
          name={"title"}
          label={"Job title"}
          required
          placeholder={"ex. UX UI Designer"}
          value={formData["title"]}
          focus={focus}
          autoFocus={focus === "title"}
          error={error}
          onChange={onFormDataChange}
          onBlur={onInputBlur}
        />
        <TextInput
          id={"companyName"}
          name={"companyName"}
          label={"Company Name"}
          required
          placeholder={"ex. Google"}
          value={formData["companyName"]}
          error={error}
          focus={focus}
          autoFocus={focus === "companyName"}
          onChange={onFormDataChange}
          onBlur={onInputBlur}
        />
        <TextInput
          id={"industry"}
          name={"industry"}
          label={"Industry"}
          required
          placeholder={"ex. Information technology"}
          value={formData["industry"]}
          error={error}
          focus={focus}
          autoFocus={focus === "industry"}
          onChange={onFormDataChange}
          onBlur={onInputBlur}
        />
        <div className='flex flex-column item-start justify-start'>
          <div className='w-full mr-4'>
            <TextInput
              id={"location"}
              name={"location"}
              label={"Location"}
              placeholder={"ex. Chennai"}
              value={formData["location"]}
              error={error}
              focus={focus}
              autoFocus={focus === "location"}
              onChange={onFormDataChange}
              onBlur={onInputBlur}
            />
          </div>
          <div className='w-full'>
            <TextInput
              id={"remoteType"}
              name={"remoteType"}
              label={"Remote type"}
              placeholder={"ex. In-office"}
              value={formData["remoteType"]}
              error={error}
              focus={focus}
              autoFocus={focus === "remoteType"}
              onChange={onFormDataChange}
              onBlur={onInputBlur}
            />
          </div>
        </div>
      </div>
    );
  };

  const AdvancedInfo = () => {
    return (
      <div>
        <RangeInput
          id={"experience"}
          label={"Experience"}
          minProps={{
            id: "experienceMin",
            name: "experienceMin",
            type: "number",
            placeholder: "Minimum",
            min: 0,
            autoFocus: focus === "experienceMin",
            value: formData["experienceMin"],
            error: error,
            focus: focus,
            onChange: onFormDataChange,
            onBlur: onInputBlur,
          }}
          maxProps={{
            id: "experienceMax",
            name: "experienceMax",
            type: "number",
            placeholder: "Maximum",
            min: 0,
            autoFocus: focus === "experienceMax",
            value: formData["experienceMax"],
            error: error,
            focus: focus,
            onChange: onFormDataChange,
            onBlur: onInputBlur,
          }}
        />
        <RangeInput
          id={"salary"}
          label={"Salary"}
          minProps={{
            id: "salaryMin",
            name: "salaryMin",
            type: "number",
            placeholder: "Minimum",
            min: 0,
            autoFocus: focus === "salaryMin",
            value: formData["salaryMin"],
            error: error,
            focus: focus,
            onChange: onFormDataChange,
            onBlur: onInputBlur,
          }}
          maxProps={{
            id: "salaryMax",
            name: "salaryMax",
            type: "number",
            placeholder: "Maximum",
            min: 0,
            autoFocus: focus === "salaryMax",
            value: formData["salaryMax"],
            error: error,
            focus: focus,
            onChange: onFormDataChange,
            onBlur: onInputBlur,
          }}
        />
        <TextInput
          id={"totalEmployee"}
          name={"totalEmployee"}
          type={"text"}
          label={"Total employee"}
          placeholder={"ex. 100"}
          autoFocus={focus === "totalEmployee"}
          value={formData["totalEmployee"]}
          error={error}
          focus={focus}
          onChange={onFormDataChange}
          onBlur={onInputBlur}
        />
        <RadioGroup
          id={"applyType"}
          name={"applyType"}
          label={"Apply type"}
          radioProps={radioProps}
        />
      </div>
    );
  };

  return (
    <div className='p-8'>
      <Header />
      <div className='mt-6'>
        <form onSubmit={onSubmit}>
          {filled ? <AdvancedInfo /> : <BasicInfo />}
          <div className='flex items-center justify-end'>
            <Button
              type='button'
              variant='contained'
              disabled={submit}
              onClick={() => onSubmit()}
            >
              {filled ? "Save" : "Next"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OverlayContent;
