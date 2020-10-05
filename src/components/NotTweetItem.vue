<template>
    <div class="notTweet-item">
        <div class="user-profile__notTweet">
            <div class="notTweet-item__user">
                @{{ username }}
            </div>
            <div class="notTweet-item__content">
                {{ notTweet.content }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NotTweetItem",
    props: {
        username: {
            type: String,
            required: true
        },
        notTweet: {
            type: Object,
            required: true
        }
    },
};
</script>

<style lang="scss" scoped>
.notTweet-item {
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #DFE3E8;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.25s ease;

    &:hover {
        transform: scale(1.1, 1.1);
    }

    .notTweet-item__user {
        font-weight: bold;
    }
}
</style>