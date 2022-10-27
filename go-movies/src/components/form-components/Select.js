const Select = (props) => {
  return (
    <div className="mb-3">
      <label htmlFor="mpaa_rating" className="form-label">
        {" "}
        {props.title}{" "}
      </label>
      <select
        name={props.name}
        className="form-select"
        value={props.value}
        onChange={this.handleChange}
      >
        <option value="">{props.placeholder}</option>
        {props.option.map((option) => {
          return (
            <option
              className="form-select"
              key={option.id}
              value={option.id}
              label={option.value}
            >
              {option.value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
