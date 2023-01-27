import { OCTOBER, NOVEMBER, DECEMBER,TOTALPOINTS, NAME } from "../constants/constants"

export const returnRewards = (customerTransactions) => {
    return customerTransactions.map(customer => {
        return {
            name: Object.keys(customer)[0],
            october:calculatePoints(getTransactionArrayforCustomer(customer,OCTOBER)),
            november: calculatePoints(getTransactionArrayforCustomer(customer,NOVEMBER)),
            december: calculatePoints(getTransactionArrayforCustomer(customer,DECEMBER)),
            get totalPoints() {
                return calculateTotalPoints(this.october, this.november, this.december)
                }
        }
    })
}

const getTransactionArrayforCustomer = (customer, month) => {
    if (customer && customer[[Object.keys(customer)[0]]]) {
        return customer[[Object.keys(customer)[0]]][0][month];
    } else {
        return []
    }
}


export const calculatePoints = (transactions) => {
    const transactionPoints = calculatePointsForEachTransaction (transactions);
    const initialPoints = 0;
    const totalPoints = transactionPoints.reduce((sum, pointsPerTransaction) => sum + pointsPerTransaction,
    initialPoints);
    return totalPoints;
}

const calculatePointsForEachTransaction = (transactions) => {
    return transactions.map(dollarAmount=>{
        let points = 0;
        if (dollarAmount > 100) {
            points = (dollarAmount - 100) *2 + (dollarAmount - (dollarAmount-100) - 50)*1
        } else if ( dollarAmount > 50) {
            points = (dollarAmount-50)*1
        }
        return Math.round(points);
    });
}

const calculateTotalPoints = (octoberPoints, novemberPoints, decemberPoints) => octoberPoints + novemberPoints +decemberPoints;