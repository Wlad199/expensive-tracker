<template>
	<div class="balance">
		<h4 class="balance__title">Your Balance</h4>
		<h1 class="balance__sum">$ {{ total }}</h1>

		<div class="balance__container">
			<div>
				<h4>Income</h4>
				<p class="money plus">+$ {{ +income }}</p>
			</div>
			<div>
				<h4>Expense</h4>
				<p class="money minus">-$ {{ expenses * -1 }}</p>
			</div>
		</div>
	</div>
</template>

<script setup >

defineProps({
	total: Number,
	income: Number,
	expenses: Number
})
</script>

<style scoped lang="scss" >
.balance {
	text-transform: uppercase;

	&__title {
		font-size: 20px;
		margin-bottom: 10px;
		font-weight: 700;
	}

	&__sum {
		font-size: 20px;
		margin-bottom: 20px;
		font-weight: 700;
	}

	&__container {
		background-color: #fff;
		box-shadow: var(--box-shadow);
		padding: 20px;
		display: flex;
		justify-content: space-between;
		margin: 20px 0;
	}

	div {
		flex: 1;
		text-align: center;
	}

	.money {
		font-size: 20px;
		letter-spacing: 1px;
		margin: 5px 0;
	}

	.money.plus {
		color: #2ecc71;
	}

	.money.minus {
		color: #c0392b;
	}
}
</style>