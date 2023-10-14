function PickButton({ButtonStyle, ColorListDisplay})
{
    return (
        <div className="pick-btn">
            <button className="btn" style={ButtonStyle} onClick={ColorListDisplay}>Pick a Color</button>
        </div>
    )
}

export default PickButton;