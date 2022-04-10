const ColorPicker = (props, setColor) => {
    return (
        <div className="color-picker" onChange={props.onChange}>

                        <input type="radio" name="color" id="banana" />
                        <label htmlFor="banana" className="banana" />

                        <input type="radio" name="color" id="pink" />
                        <label htmlFor="pink" className="pink" />

                        <input type="radio" name="color" id="aqua" />
                        <label htmlFor="aqua" className="aqua" />

                        <input type="radio" name="color" id="lavender" />
                        <label htmlFor="lavender" className="lavender" />
                    </div>
    )
}

export default ColorPicker