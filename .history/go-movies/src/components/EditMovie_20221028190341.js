import React, { Component, Fragment } from "react";
import "./EditMovie.css";
import Input from "./form-components/Input";
import TextArea from "./form-components/TextArea";
import Select from "./form-components/Select";

export default class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        id: 0,
        title: "",
        release_date: "",
        runtime: "",
        mpaa_rating: "",
        rating: "",
        description: "",
      },
      mpaaOptions: [
        { id: "G", value: "G" },
        { id: "PG", value: "PG" },
        { id: "PG13", value: "PG13" },
        { id: "R", value: "R" },
        { id: "NC17", value: "NC17" },
      ],
      isLoaded: false,
      error: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    const data = new FormData(evt.target);
    const payload = Object.fromEntries(data.entries());
    console.log(payload);

    const requestOptions = {
      method: "POST",
      body: JSON.stringify(payload),
    };

    fetch("http://localhost:4000/v1/admin/editmovie", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  handleChange = (evt) => {
    let value = evt.target.value;
    let name = evt.target.name;
    this.setState((prevState) => ({
      movie: {
        ...prevState.movie,
        [name]: value,
      },
    }));
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    if (id > 0) {
      fetch("http://localhost:4000/v1/movie/" + id)
        .then((response) => {
          if (response.status !== "200") {
            let err = Error;
            err.Message = "Invalid response code: " + response.status;
            this.setState({ error: err });
          }
          return response.json();
        })
        .then((json) => {
          const releaseDate = new Date(json.movie.release_date);

          this.setState(
            {
              movie: {
                id: id,
                title: json.movie.title,
                release_date: releaseDate.toISOString().split("T")[0],
                runtime: json.movie.runtime,
                mpaa_rating: json.movie.mpaa_rating,
                rating: json.movie.rating,
                description: json.movie.description,
              },
              isLoaded: true,
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error,
              });
            }
          );
        });
    } else {
      this.setState({ isLoaded: true });
    }
  }

  render() {
    let { movie, isLoaded, error } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <p>Loading...</p>;
    } else {
      return (
        <Fragment>
          <h2>Add/Edit Movie</h2>
          <hr />
          <form onSubmit={this.handleSubmit}>
            <input
              type="hidden"
              name="id"
              id="id"
              value={movie.id}
              onChange={this.handleChange}
            />

            <Input
              title={"Title"}
              type={"text"}
              name={"title"}
              value={movie.title}
              handleChange={this.handleChange}
            />

            <Input
              title={"Release Date"}
              type={"date"}
              name={"release_date"}
              value={movie.release_date}
              handleChange={this.handleChange}
            />

            <Input
              title={"Runtime"}
              type={"text"}
              name={"runtime"}
              value={movie.runtime}
              handleChange={this.handleChange}
            />

            <Select
              title={"MPAA Rating"}
              name={"mpaa_rating"}
              options={this.state.mpaaOptions}
              value={movie.mpaa_rating}
              handleChange={this.handleChange}
              placeholder={"Choose..."}
            />

            <Input
              title={"Rating"}
              type={"text"}
              name={"rating"}
              value={movie.rating}
              handleChange={this.handleChange}
            />

            <TextArea
              title={"Description"}
              name={"description"}
              value={movie.description}
              rows={"3"}
              handleChange={this.handleChange}
            />

            <hr />

            <button className="btn btn-primary">Save</button>
          </form>

          <div className="mt-3">
            <pre>{JSON.stringify(this.state, null, 3)}</pre>
          </div>
        </Fragment>
      );
    }
  }
}
