const Select = (props) => {
    return (
        <div className="mb-3">
            <label htmlFor="mpaa_rating" className="form-label">
              {" "}
              {props.title}{" "}
            </label>
            <select
              name={props.}
              className="form-select"
              value={movie.mpaa_rating}
              onChange={this.handleChange}
            >

            </select>

        </div>
    );
};

export default Select;