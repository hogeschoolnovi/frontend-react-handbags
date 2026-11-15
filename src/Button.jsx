function Button({ label, onClick, disabled }) {
    return (
        <button onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
}

export default Button;
