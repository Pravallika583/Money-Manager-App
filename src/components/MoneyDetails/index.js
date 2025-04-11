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
            <p className="amount">Rs {balanceAmount}</p>
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
            <p className="amount">Rs {incomeAmount}</p>
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
            <p className="amount">Rs {expensesAmount}</p>
          </div>
        </li>
      </ul>
    )
  }
}

export default MoneyDetails
