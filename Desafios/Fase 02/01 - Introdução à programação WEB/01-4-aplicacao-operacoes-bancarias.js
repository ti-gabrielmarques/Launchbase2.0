const user = {
    name: "Gabriel",
    transactions: [],
    balance: 0
  };

const transaction = {
    type: "credit",
    value: 50.5
}

function createTransaction(transaction) {
    user.transactions.push(transaction);

    if(transaction.type == "credit")
        user.balance += transaction.value;
    
    if(transaction.type == "debit")
        user.balance -= transaction.value;
}

function getHigherTransactionByType(transactionType) {
    let higherTransaction = 0;
    let transactionIndex;

    for (let index = 0; index < user.transactions.length; index++) {
        if(user.transactions[index].type == transactionType && user.transactions[index].value > higherTransaction) {
            higherTransaction = user.transactions[index].value;
            transactionIndex = index;
        }
    }

    return user.transactions[transactionIndex];
}

function getAverageTransactionValue() {
    let transactionSumValue = 0;

    user.transactions.forEach(transaction => {
        transactionSumValue += transaction.value;
    });

    return transactionSumValue / user.transactions.length;
}

function getTransactionsCount() {
    let creditTransactions = 0;
    let debitTransactions = 0;

    user.transactions.forEach(transaction => {
        if(transaction.type == "credit")
            creditTransactions++;
        
        if(transaction.type == "debit")
            debitTransactions++;
    })

    return {
        credit: creditTransactions,
        debit: debitTransactions
    };
}


createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

console.log(getHigherTransactionByType("credit")); // { type: 'credit', value: 120 }
console.log(getHigherTransactionByType("debit")); // { type: 'debit', value: 80 }

console.log(getAverageTransactionValue()); // 70

console.log(getTransactionsCount()); // { credit: 2, debit: 2 }
