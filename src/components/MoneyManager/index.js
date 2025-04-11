import {Component} from 'react'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import {v4 as uuid} from 'uuid'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    balanceAmount: 0,
    incomeAmount: 0,
    expensesAmount: 0,
    titleInput: '',
    amountInput: '',
    typeOption: 'INCOME',
    transactionHistory: [],
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeTypeOption = event => {
    this.setState({typeOption: event.target.value})
  }

  // addTransaction = event => {
  //   event.preventDefault()
  //   const {titleInput, amountInput, typeOption} = this.state
  //   const typeObject = transactionTypeOptions.find(
  //     each => each.optionId === typeOption,
  //   )
  //   const newTransaction = {
  //     id: uuid(),
  //     title: titleInput,
  //     amount: amountInput,
  //     type: typeObject.displayText,
  //   }
  //   const amount = parseInt(amountInput)
  //   if (typeOption === 'INCOME') {
  //     this.setState(prevState => ({
  //       incomeAmount: prevState.incomeAmount + amount,
  //       balanceAmount: prevState.balanceAmount + amount,
  //     }))
  //   } else if (typeOption === 'EXPENSES') {
  //     this.setState(prevState => ({
  //       expensesAmount: prevState.expensesAmount + amount,
  //       balanceAmount: prevState.balanceAmount - amount,
  //     }))
  //   }
  //   this.setState(prevState => ({
  //     transactionHistory: [...prevState.transactionHistory, newTransaction],
  //     titleInput: '',
  //     amountInput: '',
  //     typeOption: 'INCOME',
  //   }))
  // }

  addTransaction = event => {
  event.preventDefault()

  const {titleInput, amountInput, typeOption} = this.state
  const typeObject = transactionTypeOptions.find(
    each => each.optionId === typeOption
  )

  const newTransaction = {
    id: uuid(),
    title: titleInput,
    amount: amountInput,
    type: typeObject.displayText,
  }

  const amount = parseInt(amountInput)

  this.setState(prevState => {
    let incomeAmount = prevState.incomeAmount
    let expensesAmount = prevState.expensesAmount
    let balanceAmount = prevState.balanceAmount

    if (typeOption === 'INCOME') {
      incomeAmount += amount
      balanceAmount += amount
    } else if (typeOption === 'EXPENSES') {
      expensesAmount += amount
      balanceAmount -= amount
    }

    return {
      incomeAmount,
      expensesAmount,
      balanceAmount,
      transactionHistory: [...prevState.transactionHistory, newTransaction],
      titleInput: '',
      amountInput: '',
      typeOption: 'INCOME',
    }
  })
}


  removeTransaction = transaction => {
    const {transactionHistory} = this.state
    const {id} = transaction
    const updatedTransactions = transactionHistory.filter(
      each => each.id !== id,
    )
    const deletedTransaction = transactionHistory.find(each => each.id === id)
    const {amount, type} = deletedTransaction
    const removeAmount = parseInt(amount)
    const optionObject = transactionTypeOptions.find(
      each => each.displayText === type,
    )
    const typeOption = optionObject.optionId
    if (typeOption === 'INCOME') {
      this.setState(prevState => ({
        incomeAmount: prevState.incomeAmount - removeAmount,
        balanceAmount: prevState.balanceAmount - removeAmount,
         transactionHistory: updatedTransactions
      }))
    } else if (typeOption === 'EXPENSES') {
      this.setState(prevState => ({
        expensesAmount: prevState.expensesAmount - removeAmount,
        balanceAmount: prevState.balanceAmount + removeAmount,
         transactionHistory: updatedTransactions
      }))
    }
  }

  render() {
    const {
      titleInput,
      amountInput,
      typeOption,
      balanceAmount,
      incomeAmount,
      expensesAmount,
      transactionHistory,
    } = this.state
    console.log(transactionHistory)
    return (
      <div className="bg-container">
        <div className="money-manager">
          <h1 className="name">Hi, Money Buddy</h1>
          <p className="text">
            Welcome back to your <span className="desc">Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          balanceAmount={balanceAmount}
          incomeAmount={incomeAmount}
          expensesAmount={expensesAmount}
        />
        <div className="transaction-history">
          <div className="transaction-container">
            <h1 className="heading">Add Transaction</h1>
            <form onSubmit={this.addTransaction}>
              <div className="">
                <label htmlFor="title">TITLE</label> <br />
                <input
                  id="title"
                  type="text"
                  placeholder="TITLE"
                  onChange={this.onChangeTitle}
                  value={titleInput}
                />
              </div>
              <div>
                <label htmlFor="amount">AMOUNT</label> <br />
                <input
                  id="amount"
                  type="text"
                  placeholder="AMOUNT"
                  onChange={this.onChangeAmount}
                  value={amountInput}
                />
              </div>
              <div>
                <label htmlFor="type">TYPE</label> <br />
                <select
                  id="type"
                  onChange={this.onChangeTypeOption}
                  value={typeOption}
                >
                  {transactionTypeOptions.map(eachType => (
                    <option key={eachType.optionId} value={eachType.optionId}>
                      {eachType.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <button className="add-button" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            <h1 className="history-text">History</h1>

            <div className="history-header">
              <p className="history-column">Title</p>
              <p className="history-column">Amount</p>
              <p className="history-column">Type</p>
              <p className="history-column">{}</p>
            </div>

            <ul className="history-body">
              {transactionHistory.map(each => (
                <TransactionItem
                  key={each.id}
                  transaction={each}
                  removeTransaction={() => this.removeTransaction(each)}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
