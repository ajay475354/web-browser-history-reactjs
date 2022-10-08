import './index.css'

const HistoryItem = props => {
  const {each, deleteItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = each

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="item-container">
      <div className="details">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="history-image" />
        <p className="history-title">{title}</p>
        <p className="history-domainUrl">{domainUrl}</p>
      </div>

      <div className="history-delate-container">
        <button
          type="button"
          className="delete-button"
          onClick={onDelete}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
