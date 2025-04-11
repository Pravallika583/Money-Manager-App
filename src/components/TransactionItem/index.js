import './index.css'
import {Component} from 'react'

class TransactionItem extends Component {
  render() {
    const {transaction} = this.props
    return (
      <li className="transaction-item">
        <p className="history-column">{transaction.title}</p>
        <p className="history-column">Rs {transaction.amount}</p>
        <p className="history-column">{transaction.type}</p>
        <div className="history-column">
          <button className="delete-button" data-testid="delete">
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
              alt="delete"
              className="delete-image"
            />
          </button>
        </div>
      </li>
    )
  }
}

export default TransactionItem
