let  Display = ({val}) => {
    const displayStyle = {
        width: '50%',
        height: '50px',
        fontSize: '1.5rem',
        textAlign: 'right',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
    };

    return (
        <input type="text" style={displayStyle} readOnly value={val} />
    );
};

export default Display;