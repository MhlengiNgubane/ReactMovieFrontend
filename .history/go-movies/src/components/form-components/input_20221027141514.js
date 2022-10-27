const Input = (props) => {
  return (
    <div className="mb-3">
      <label htmlFor={props.name} className="form-label">
        {props.titl}
      </label>
      <input
        type="text"
        className="form-control"
        id="title"
        name="title"
        value={movie.title}
        onChange={this.handleChange}
      />
    </div>
  );
};
