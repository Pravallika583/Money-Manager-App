// Write your code here
import './index.css'
import {Component} from 'react'

class MoneyDetails extends Component {
  render() {
    const {balanceAmount, incomeAmount, expensesAmount} = this.props
    return (
      <ul className="money-details-container">
        <li className="balance-container type">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="image"
          />
          <div className="transaction-type">
            <p className="type-text">Your Balance</p>
            <div className="amount">
              <p>Rs</p>
              <p data-testid="balanceAmount">{balanceAmount}</p>
            </div>
          </div>
        </li>
        <li className="income-container type">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="image"
          />
          <div className="transaction-type">
            <p className="type-text">Your Income</p>
            <div  className="amount">
            <p>Rs</p>
            <p data-testid="incomeAmount">{incomeAmount}</p>
            </div>
          </div>
        </li>
        <li className="expenses-container type">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="image"
          />
          <div className="transaction-type">
            <p className="type-text">Your Expenses</p>
            <div  className="amount">
            <p>Rs</p>
            <p data-testid="expensesAmount">{expensesAmount}</p>
            </div>
          </div>
        </li>
      </ul>
    )
  }
}

export default MoneyDetails
