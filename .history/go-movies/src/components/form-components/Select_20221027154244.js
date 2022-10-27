const Select = (props) => {
    return (
        <div className="mb-3">
            <label htmlFor="mpaa_rating" className="form-label">
              MPAA Rating
            </label>
            <select
              name="mpaa_rating"
              className="form-select"
              value={movie.mpaa_rating}
              onChange={this.handleChange}
            

        </div>
    );
};

export default Select;