function Btn({ value, isCallingApi }) {
    return (
        <button type="submit" className="btn btn-info mt-3">
            {value}
            {isCallingApi ? <i className="fa fa-spinner fa-spin"></i> : ''}
        </button>
    );
}

export default Btn;
