<template>
    <div class="user-profile">
        <div class="user-profile__sidebar">
            <div class="user-profile__user-panel">
                <h1 class="user-profile__username">@{{ state.user.username }}</h1>
                <div class="user-profile__admin-badge" v-if="state.user.isAdmin">
                    Admin
                </div> 
                <div class="user-profile__follower-count">
                    <strong>Followers: </strong> {{ state.followers }}
                </div>
            </div>
            <CreateNotTweetPanel @add-nottweet="addNotTweet" />
        </div>
        <div class="user-profile__notTweets-wrapper">
            <NotTweetItem 
                v-for="notTweet in state.user.notTweets" 
                :key="notTweet.id" 
                :username="state.user.username" 
                :notTweet="notTweet" 
            />
        </div>
    </div>  
</template>

<script>
import { reactive, computed } from 'vue';
import { useRoute } from 'vue-router';
import { users } from '../assets/users';
import NotTweetItem from "../components/NotTweetItem";
import CreateNotTweetPanel from "../components/CreateNotTweetPanel";

export default {
    name: 'UserProfile',
    components: { CreateNotTweetPanel, NotTweetItem },
    setup() {
        const route = useRoute();
        const userId = computed(() => route.params.userId);        

        const state = reactive ({
            followers: 0,
            user: users[userId.value - 1] || users[0]
        });

        function addNotTweet(notTweet) {
            state.user.notTweets.unshift( { id: state.user.notTweets.length + 1, content: notTweet});
        }

        return {
            state,
            addNotTweet,
            userId
        };
    }
};
</script>

<style lang="scss" scoped>
.user-profile {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 50px;
    padding: 50px 5%;

    .user-profile__user-panel {
        display: flex;
        flex-direction: column;
        padding: 20px;
        background-color: white;
        border-radius: 5px;
        border: 1px solid #DFE3E8;
        margin-bottom: auto;

        h1 {
           margin: 0;
        }

        .user-profile__admin-badge {
            background: rebeccapurple;
            color: white;
            border-radius: 5px;
            margin-right: auto;
            padding: 0 10px;
            font-weight: bold;
        }

    }

    .user-profile__notTweets-wrapper {
       display: grid;
       grid-gap: 10px;
       margin-bottom: auto;
    }
}
</style>