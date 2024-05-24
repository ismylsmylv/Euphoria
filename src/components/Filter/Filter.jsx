import { useState } from "react"
import "../Filter/Filter.scss"
import purple from "../../assets/img/purple.png"
import black from "../../assets/img/black.png"
import red from "../../assets/img/red.png"
import orange from "../../assets/img/orange.png"
import navy from "../../assets/img/navy.png"
import white from "../../assets/img/white.png"
import broom from "../../assets/img/broom.png"
import green from "../../assets/img/green.png"
import yellow from "../../assets/img/yellow.png"
import grey from "../../assets/img/grey.png"
import pink from "../../assets/img/pink.png"
import blue from "../../assets/img/blue.png"

import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchProducts, filterByCategory } from "../../redux/slice/ProductsSlice"

function Filter() {
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const dispatch = useDispatch()

  const collapse = (e) => {
    const currentDiv = e.target
    const nextDiv = currentDiv.nextElementSibling
    const icon = currentDiv.querySelector(".fa-chevron-down")

    if (nextDiv && nextDiv.tagName.toLowerCase() === "div") {
      if (nextDiv.style.display === "none") {
        nextDiv.style.display = ""
        icon.classList.remove("rotate")
      } else {
        nextDiv.style.display = "none"
        icon.classList.add("rotate")
      }
    }
  }

  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(100)

  const handleMinChange = (event) => {
    const value = parseInt(event.target.value)
    setMinValue(value)
  }

  const handleMaxChange = (event) => {
    const value = parseInt(event.target.value)
    setMaxValue(value)
  }

  const handleFilterByCategory = (category) => {
    dispatch(filterByCategory(category))
    console.log(" wrong")
  }
  return (
    <div id="filter">
      <div className="main-header">
        <h4>Filter</h4> <i className="fa-solid fa-sliders"></i>
      </div>
      <ul className="tops">
        <li onClick={handleFilterByCategory("Tops")}>
          Tops <i className="fa-solid fa-chevron-right"></i>
        </li>
        <li>
          Plain T-shirts <i className="fa-solid fa-chevron-right"></i>
        </li>
        <li>
          Kurti <i className="fa-solid fa-chevron-right"></i>
        </li>
        <li>
          Boxers <i className="fa-solid fa-chevron-right"></i>
        </li>
        <li>
          Full sleeve T-shirts <i className="fa-solid fa-chevron-right"></i>
        </li>
        <li>
          Joggers <i className="fa-solid fa-chevron-right"></i>
        </li>
        <li>
          Payjamas <i className="fa-solid fa-chevron-right"></i>
        </li>
        <li>
          Jeans <i className="fa-solid fa-chevron-right"></i>
        </li>
      </ul>
      <div onClick={collapse} className="header">
        <h4>Price</h4> <i className="fa-solid fa-chevron-down"></i>
      </div>
      <div className="range-input">
        <div className="min">
          <input
            type="range"
            value={minValue}
            min={0}
            max={100}
            onChange={handleMinChange}
          />
          <input
            className="number-input"
            type="number"
            value={minValue}
            min={0}
            max={100}
            onChange={handleMinChange}
          />
        </div>
        <div className="max">
          <input
            type="range"
            value={maxValue}
            min={0}
            max={100}
            onChange={handleMaxChange}
          />
          <input
            className="number-input"
            type="number"
            value={maxValue}
            min={0}
            max={100}
            onChange={handleMaxChange}
          />
        </div>
      </div>
      <div onClick={collapse} className="header">
        <h4>Colors</h4> <i className="fa-solid fa-chevron-down"></i>
      </div>
      <div className="colors-collapse">
        <ul className="color-choices">
          <li className="c-choice">
            <img src={purple} alt="" />
            <p>purple</p>
          </li>
          <li className="c-choice">
            <img src={black} alt="" />
            <p>black</p>
          </li>
          <li className="c-choice">
            <img src={red} alt="" />
            <p>red</p>
          </li>
          <li className="c-choice">
            <img src={orange} alt="" />
            <p>orange</p>
          </li>
          <li className="c-choice">
            <img src={navy} alt="" />
            <p>navy</p>
          </li>
          <li className="c-choice">
            <img src={white} alt="" />
            <p>white</p>
          </li>
          <li className="c-choice">
            <img src={broom} alt="" />
            <p>broom</p>
          </li>
          <li className="c-choice">
            <img src={green} alt="" />
            <p>green</p>
          </li>
          <li className="c-choice">
            <img src={yellow} alt="" />
            <p>yellow</p>
          </li>
          <li className="c-choice">
            <img src={grey} alt="" />
            <p>grey</p>
          </li>
          <li className="c-choice">
            <img src={pink} alt="" />
            <p>pink</p>
          </li>
          <li className="c-choice">
            <img src={blue} alt="" />
            <p>blue</p>
          </li>
        </ul>
      </div>
      <div onClick={collapse} className="header">
        <h4>Size</h4> <i className="fa-solid fa-chevron-down"></i>
      </div>
      <div className="size-collapse">
        <ul className="sizes">
          <li className="size">XXS</li>
          <li className="size">XS</li>
          <li className="size">S</li>
          <li className="size">M</li>
          <li className="size">L</li>
          <li className="size">XL</li>
          <li className="size">2XL</li>
          <li className="size">3XL</li>
          <li className="size">4XL</li>
        </ul>
      </div>
      <div onClick={collapse} className="header">
        <h4>Dress Style</h4> <i className="fa-solid fa-chevron-down"></i>
      </div>
      <div className="dress-collapse">
        <ul className="dress-style">
          <li>
            Classic <i className="fa-solid fa-chevron-right"></i>
          </li>
          <li>
            Casual <i className="fa-solid fa-chevron-right"></i>
          </li>
          <li>
            Business <i className="fa-solid fa-chevron-right"></i>
          </li>
          <li>
            Sport <i className="fa-solid fa-chevron-right"></i>
          </li>
          <li>
            Elegant <i className="fa-solid fa-chevron-right"></i>
          </li>
          <li>
            Formal (evening) <i className="fas fa-chevron-right"></i>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Filter
