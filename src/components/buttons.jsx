let Buttons = ({clickme}) => {
    let buttonStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '10px',
        width: '50%',
        marginTop: '10px'
    };

    let btnStyle = {
        padding: '10px',
        fontSize: '16px',
        cursor: 'pointer'
    };
    let buttonName=["1","2","3","+","4","5","6","-","7","8","9","*","0","C","=","/"]

    return (
        <>
            <div className="buttons" style={buttonStyle}>
                {buttonName.map((item) => (
                    <button className="btn" style={btnStyle} key={item} onClick={() => clickme(item)}>
                        {item} 
                    </button>
                ))}
            </div>
        </>
    );
};

export default Buttons;