// Write your code here.
import './index.css'

const Thumbnailitem = props => {
  const {single, buttonId, isActive} = props
  const {id, imageUrl, thumbnailUrl, thumbnailAltText, imageAltText} = single

  const clickBtn = () => {
    buttonId({id, imageAltText, imageUrl})
  }

  const styling = isActive ? '' : 'disable'

  return (
    <li>
      <button type="button" onClick={clickBtn} className={styling}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default Thumbnailitem
