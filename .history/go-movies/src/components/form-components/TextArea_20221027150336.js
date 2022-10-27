const TextArea = (props) => {
    return (
    <label htmlFor={props.name} className="form-label">
        {props.title}
    </label>
      <textarea
        className="form-control"
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        rows={props.rows}
    );
};

export default TextArea;