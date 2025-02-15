<template>
	<h3>Add new transaction</h3>
	<form @submit.prevent="onSubmit" id="form">
		<div class="form-control">
			<label for="text"></label>
			<input v-model="text" type="text" id="text" placeholder="Enter text..." />
		</div>
		<div class="form-control">
			<label for="amount">Amount</label>
			<input v-model="amount" type="number" id="amount" placeholder="Enter amount..." />
		</div>
		<button class="btn">Add transaction</button>
	</form>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from "vue-toastification";
import { nanoid } from "nanoid";

const toast = useToast()

const text = ref('')
const amount = ref('')

const emit = defineEmits(['transactionSubmitted'])

const onSubmit = () => {
	if (!text.value || !amount.value) {
		toast.error('Both fields must be filled')
		return
	}

	const transactionData = {
		id: nanoid(),
		text: text.value,
		amount: amount.value
	}
	emit('transactionSubmitted', transactionData)

	text.value = ''
	amount.value = ''
}


</script>

<style scoped  lang="scss">
label {
	display: inline-block;
	margin: 10px 0;
}

input[type='text'],
input[type='number'] {
	border: 1px solid #dedede;
	border-radius: 2px;
	display: block;
	font-size: 16px;
	padding: 10px;
	width: 100%;
}

.btn {
	cursor: pointer;
	background-color: #7d62ff;
	box-shadow: var(--box-shadow);
	color: #fff;
	border: 0;
	display: block;
	font-size: 16px;
	margin: 10px 0 30px;
	padding: 10px;
	width: 100%;
	transition: all 0.2s ease 0s;

	&:hover {
		background-color: #5a37ff;
	}
}

.btn:focus,
.delete-btn:focus {
	outline: 0;
}
</style>