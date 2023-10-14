function ColorList({HandleColorButton, DisplayStyle})
{
    return (
        <div className="color-list" style={DisplayStyle}>
            <div className="row">
                <button id="black" className="clr-btn" onClick={() => {HandleColorButton("black")}}></button>
                <button id="brown" className="clr-btn" onClick={() => {HandleColorButton("brown")}}></button>
                <button id="red" className="clr-btn" onClick={() => {HandleColorButton("red")}}></button>
                <button id="orange" className="clr-btn" onClick={() => {HandleColorButton("orange")}}></button>
                <button id="yellow" className="clr-btn" onClick={() => {HandleColorButton("yellow")}}></button>
            </div>
            <div className="row">
                <button id="white" className="clr-btn" onClick={() => {HandleColorButton("white")}}></button>
                <button id="green" className="clr-btn" onClick={() => {HandleColorButton("green")}}></button>
                <button id="blue" className="clr-btn" onClick={() => {HandleColorButton("blue")}}></button>
                <button id="indigo" className="clr-btn" onClick={() => {HandleColorButton("indigo")}}></button>
                <button id="violet" className="clr-btn" onClick={() => {HandleColorButton("violet")}}></button>
            </div>
        </div>
    )
}

export default ColorList;