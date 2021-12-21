import { useEffect, useState } from 'react'
import rightEmptyStar from '../../styles/images/empty_star_right.png'
import leftEmptyStar from '../../styles/images/empty_star_left.png'
import rightFilledStar from '../../styles/images/filled_star_right.png'
import leftFilledStar from '../../styles/images/filled_star_left.png'
import { SaveRating } from '../../store/actions/TVShowActions'
import { connect } from 'react-redux'

const mapStateToProps = ({ TVState }) => {
  return {
    TVState
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    saveRating: (title, rating) => dispatch(SaveRating(title, rating))
  }
}

const Rating = (props) => {
  const title = props.title
  const prevRatings = props.TVState.showRatings
  const seleted = 'selected'
  const not = ''
  const [rated, toggleRated] = useState(false)
  const [rating, setRating] = useState({
    0: [not, not],
    1: [not, not],
    2: [not, not],
    3: [not, not],
    4: [not, not]
  })

  function ratingIsSelected(index) {
    if (rated === false) {
      for (let i = 0; i <= index; i++) {
        setRating({
          ...rating,
          [i]: Object.values(rating)[i].fill(seleted)
        })
      }
    }
  }
  function ratingIsSelectedLeft(index) {
    if (rated === false) {
      setRating({ ...rating, [index]: [seleted, not] })
    }
  }
  function ratingIsNot(index) {
    if (rated === false) {
      for (let i = 0; i <= index; i++) {
        setRating({
          ...rating,
          [i]: Object.values(rating)[i].fill(not)
        })
      }
    }
  }
  function ratingIsNotLeft(index) {
    if (rated === false) {
      setRating({ ...rating, [index]: [not, not] })
    }
  }

  function onMouseOverRight(i) {
    ratingIsSelected(i)
  }
  function onMouseOverLeft(i) {
    if (i === 0) {
      ratingIsSelectedLeft(i)
    } else {
      const newIndex = i - 1
      ratingIsSelected(newIndex)
      ratingIsSelectedLeft(i)
    }
  }
  function onMouseOutRight(i) {
    ratingIsNot(i)
  }
  function onMouseOutLeft(i) {
    if (i === 0) {
      ratingIsNotLeft(i)
    } else {
      const newIndex = i - 1
      ratingIsNot(newIndex)
      ratingIsNotLeft(i)
    }
  }

  function deleteDisplay() {
    for (let i = 0; i <= 4; i++) {
      setRating({
        ...rating,
        [i]: Object.values(rating)[i].fill(not)
      })
    }
  }
  function ratedFalse() {
    deleteDisplay()
    toggleRated(false)
  }

  function saveRateLeft(i) {
    const userRating = i * 2 + 1
    props.saveRating(title, userRating)
  }
  function saveRateRight(i) {
    const userRating = (i + 1) * 2
    props.saveRating(title, userRating)
  }
  function onClickLeft(i) {
    saveRateLeft(i)
    toggleRated(true)
  }
  function onClickRight(i) {
    saveRateRight(i)
    toggleRated(true)
  }

  function callRating() {
    if (title in prevRatings) {
      const userRating = prevRatings[title]
      if (userRating % 2 === 0) {
        const index = userRating / 2 - 1
        onMouseOverRight(index)
        toggleRated(true)
      } else {
        const index = (userRating - 1) / 2
        onMouseOverLeft(index)
        toggleRated(true)
      }
    }
  }
  useEffect(() => {
    callRating()
  }, [])

  return (
    <div className="selectionRating">
      <b>Your Rating:</b>

      {Object.values(rating).map((rate, i) => {
        return (
          <div className="starContain" key={i}>
            <div
              className={`left ${rate[0]}`}
              onMouseOver={() => onMouseOverLeft(i)}
              onMouseOut={() => onMouseOutLeft(i)}
              onClick={() => onClickLeft(i)}
            >
              <img src={leftFilledStar} alt="star" className="star filled" />
              <img src={leftEmptyStar} alt="star" className="star empty" />
            </div>
            <div
              className={`right ${rate[1]}`}
              onMouseOver={() => onMouseOverRight(i)}
              onMouseOut={() => onMouseOutRight(i)}
              onClick={() => onClickRight(i)}
            >
              <img src={rightFilledStar} alt="star" className="star filled" />
              <img src={rightEmptyStar} alt="star" className="star empty" />
            </div>
          </div>
        )
      })}
      <button id="deleteRating" onClick={() => ratedFalse()}>
        Delete
      </button>
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Rating)
