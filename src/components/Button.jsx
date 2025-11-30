function Button({ text, disabled, onClick }) {
    return (
        <button disabled={disabled} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;