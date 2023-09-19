import './size-select.scss'

const SizeSelect = ({selectedSize, setSelectedSize}) => {

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
      };


    return ( 
        <div className="size-select">
            <span>Size</span>
            <div className="size-select--options">
              <div className="row">
                <div className="size-select--option">
                  <input
                    type="radio"
                    value="small"
                    id="small"
                    name="size"
                    checked={selectedSize === "small"}
                    onChange={handleSizeChange}
                  />
                  <label htmlFor="small">small</label>
                </div>
                <div className="size-select--option">
                  <input
                    type="radio"
                    value="medium"
                    id="medium"
                    name="size"
                    checked={selectedSize === "medium"}
                    onChange={handleSizeChange}
                  />
                  <label htmlFor="medium">medium</label>
                </div>
                <div className="size-select--option">
                  <input
                    type="radio"
                    value="large"
                    id="large"
                    name="size"
                    checked={selectedSize === "large"}
                    onChange={handleSizeChange}
                  />
                  <label htmlFor="large">large</label>
                </div>
              </div>
              <div className="row">
                <div className="size-select--option">
                  <input
                    type="radio"
                    value="deluxe"
                    id="deluxe"
                    name="size"
                    checked={selectedSize === "deluxe"}
                    onChange={handleSizeChange}
                  />
                  <label htmlFor="deluxe">deluxe</label>
                </div>
                <div className="size-select--option">
                  <input
                    type="radio"
                    value="luxe"
                    id="luxe"
                    name="size"
                    checked={selectedSize === "luxe"}
                    onChange={handleSizeChange}
                  />
                  <label htmlFor="luxe">luxe</label>
                </div>
              </div>
            </div>
        </div>
     );
}
 
export default SizeSelect;