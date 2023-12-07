import {Component} from 'react'

import './index.css'

import Amount from '../DenominationItem'

const denominationsList = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
]

class CashWithdrawal extends Component {
  state = {balance: 2000, denomination: denominationsList}

  AmountButton = id => {
    const {balance, denomination} = this.state
    const amountItem = denomination.filter(each => each.id === id)
    const listItem = amountItem[0]
    const {value} = listItem
    this.setState(prevState => ({balance: prevState.balance - value}))
    console.log(this.state)
  }

  render() {
    const {balance} = this.state
    return (
      <div className="mainContainer">
        <div className="bgContainer">
          <div className="nameContainer">
            <div className="letterContainer">
              <p className="letter">R</p>
            </div>
            <h1 className="heading">Rajkumar</h1>
          </div>
          <div className="balanceContainer">
            <p className="balanceHeading">Your Balance</p>
            <div className="rupeesContainer">
              <p className="rupees">{balance}</p>
              <p className="para">In Rupees</p>
            </div>
          </div>
          <div className="withDrawContainer">
            <p className="withDraw">Withdraw</p>
            <p className="withDrawPara">CHOOSE SUM (IN RUPEES)</p>
            <ul className="unordered">
              {denominationsList.map(eachItem => (
                <Amount
                  amountItem={eachItem}
                  AmountButton={this.AmountButton}
                  key={eachItem.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
