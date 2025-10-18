function ValidationErrorsList({ error }) {
    return (
        <div className="alert">
            <ul>
                {error.map((err, index) =>
                    err.includes('"password"') ? (
                        <li key={index} className="my-3 alert alert-danger">
                            Password must be at least 3 characters long and contain only letters and
                            numbers
                        </li>
                    ) : (
                        <li key={index} className="my-3 alert alert-danger">
                            {err}
                        </li>
                    ),
                )}
            </ul>
        </div>
    );
}

export default ValidationErrorsList;
