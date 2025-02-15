<template>
	<h3 v-show="transactions.length">History</h3>
	<ul class="list">
		<li v-for="transaction in transactions" :key="transaction.id" :class="[transaction.amount > 0 ? 'plus' : 'minus']">
			<button @click="deleteTransaction(transaction.id)" class="delete">
				<Icon icon="material-symbols:close" />
			</button>
			<div class="list-content">
				<p>{{ transaction.text }}</p>
				<p>{{ transaction.amount }}</p>
			</div>
		</li>
	</ul>
</template>

<script setup >
import { Icon } from '@iconify/vue';
defineProps({
	transactions: Array,
	deleteTransaction: Function
})
</script>

<style scoped lang="scss">
h3 {
	margin-bottom: 20px;
}

.list {
	list-style-type: none;
	padding: 0;
	margin-bottom: 40px;
}

.list li {
	background-color: #fff;
	box-shadow: var(--box-shadow);
	color: #333;
	display: flex;
	justify-content: space-between;
	position: relative;
	height: 43px;
	margin-bottom: 3px;

}

.list-content {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 10px;
	margin: 10px 0;

	p:first-child {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		max-width: 270px;

		@media (max-width: 450px) {
			max-width: 160px;
		}
	}
}

.list li.plus {
	border-right: 5px solid #2ecc71;
}

.list li.minus {
	border-right: 5px solid #c0392b;
}

.delete {
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 26px;
	cursor: pointer;
	background-color: #e74c3c;
	border: 0;
	color: #fff;
	height: 43px;
	min-width: 43px;
	transition: background-color 0.2s ease 0s;

	@media (min-width: 767px) {
		transition: all 0.2s ease 0s;
		position: absolute;
		top: 0;
		left: -43px;
		opacity: 0;
		transform: translateX(150%);
	}

	&:hover {
		background-color: #c52918;
	}
}

.list li:hover .delete {
	transform: translateX(0);
	opacity: 1;
}
</style>