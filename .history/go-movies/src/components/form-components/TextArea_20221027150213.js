const TextArea = (props) => {
    return (
    <label htmlFor={props.name} className="form-label">
        {props.title}
    </label>
      <textarea
        type={props.type}
        className="form-control"
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
    );
}

export default TextArea;