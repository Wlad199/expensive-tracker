<template>
	<div class="container">
		<h2 class="header__title">Expense Tracker</h2>
		<Balance :total="total" :income="income" :expenses="expenses" />
		<TransactionList :transactions="transactions" :deleteTransaction="deleteTransaction" />
		<AddTransaction @transactionSubmitted="handleTransactionSubmitted" />
	</div>
</template>

<script setup>
import Balance from "./components//Balance.vue"
import TransactionList from "./components/TransactionList.vue"
import AddTransaction from "./components//AddTransaction.vue"
import { ref, computed, onMounted } from "vue"
import { useToast } from "vue-toastification";

const toast = useToast()
const transactions = ref([])


const handleTransactionSubmitted = (transaction) => {
	transactions.value.push(transaction)
	toast.success('Transaction added')
	saveTransactionsToLacaleStorage()
}

onMounted(() => {
	const savedTransactions = JSON.parse(localStorage.getItem('transactions'))
	if (savedTransactions) {
		transactions.value = savedTransactions
	}
})

const total = computed(() => {
	return transactions.value
		.reduce((acc, transaction) => {
			return acc + +transaction.amount
		}, 0)
})

// get Income
const income = computed(() => {
	return transactions.value
		.filter((transaction) => transaction.amount > 0)
		.reduce((acc, { amount }) => {
			return acc + amount
		}, 0)
})

// get expenses
const expenses = computed(() => {
	return transactions.value
		.filter((transaction) => transaction.amount < 0)
		.reduce((acc, { amount }) => {
			return acc + amount
		}, 0)
})

// delete transaction
const deleteTransaction = (id) => {
	transactions.value = transactions
		.value.filter(transaction => transaction.id !== id)
	toast.success('Transaction deleted')
	saveTransactionsToLacaleStorage()
}

const saveTransactionsToLacaleStorage = () => {
	localStorage.setItem('transactions', JSON.stringify(transactions.value))
}

</script>



<style scoped lang="scss">
.header {
	&__title {
		font-size: 24px;
		text-align: center;
		margin-bottom: 30px;
	}
}
</style>