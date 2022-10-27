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
                <option 
                className="form-select"
                key={}
            </select>

        </div>
    );
};

export default Select;