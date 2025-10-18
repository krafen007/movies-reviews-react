function InputField({ id, label, type = 'text', onChange }) {
    return (
        <div className="my-3">
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <input type={type} className="form-control" id={id} name={id} onChange={onChange} />
        </div>
    );
}

export default InputField;
