import './index.css'

const Amount = props => {
  const {amountItem, AmountButton} = props
  const {id, value} = amountItem
  const buttonClick = () => {
    AmountButton(id)
  }
  return (
    <li className="list">
      <button className="button" onClick={buttonClick}>
        {value}
      </button>
    </li>
  )
}
export default Amount
