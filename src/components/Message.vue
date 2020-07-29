<template>
    <div class="message">
        <p>{{ messageText }}</p>
    </div>
</template>

<script>
export default {
    props: {
        messageText: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.message{
    color: rgb(211, 56, 56);
    text-align: center;
    padding: 20px;
}
</style>