<template>
	<h1 v-text="heading"></h1>
</template>

<script>
export default {
	name: "Hero",
	props: ["heading", "images"],
};
</script>
