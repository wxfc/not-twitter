<template>
    <form class="create-notTweet-panel" @submit.prevent="createNewNotTweet" :class="{ '--exceeded': newNotTweetCharacterCount > 180 }">
        <label for="newNotTweet"><strong>New NotTweet</strong> ({{ newNotTweetCharacterCount }}/180) </label>
        <textarea id="newNotTweet" rows="4" v-model="state.newNotTweetContent" />

        <div class="create-notTweet-panel__submit">
            <div class="create-notTweet-type">
                <label for="newNotTweetType"><strong>Type: </strong></label>
                <select id="newNotTweetType" v-model="state.selectedNotTweetType">
                    <option :value="option.value" v-for="(option, index) in state.notTweetTypes" :key="index">
                        {{ option.name }}
                    </option>
                </select>
            </div>
            
            <button>
                NotTweet!
            </button>
        </div>
    </form>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
    name: "CreateNotTweetPanel",
    setup(props, ctx) {
        const state = reactive({
            newNotTweetContent: '',
            selectedNotTweetType: 'instant',
            notTweetTypes: [
                { value: 'draft', name: 'Draft' },
                { value: 'instant', name: 'Instant NotTweet' }
            ]
        });

        const newNotTweetCharacterCount = computed(() => state.newNotTweetContent.length);

        function createNewNotTweet() {
            if (state.newNotTweetContent && state.selectedNotTweetType !== 'draft') {
                ctx.emit('add-nottweet', state.newNotTweetContent);
                state.newNotTweetContent = '';
            }
        }

        return {
            state,
            newNotTweetCharacterCount,
            createNewNotTweet
        };
    }
};
</script>

<style lang="scss" scoped>
.create-notTweet-panel {
    margin-top: 20px;
    padding: 20px 0;
    display: flex;
    flex-direction: column;

    textarea {
        border: 1px solid #DFE3E8;
        border-radius: 5px;
    }

    .create-notTweet-panel__submit {
        display:flex;
        justify-content: space-between;

        .create-notTweet-type {
            padding: 10px 0;
        }

        button {
            padding: 5px 20px;
            margin: auto 0;
            border-radius: 5px;
            border: none;
            background-color: deeppink;
            color: white;
            font-weight: bold;
        }
    }

    &.--exceeded {
        color: red;
        border-color: red;

        .create-notTweet-panel__submit {
            button {
                background-color: red;
                color: white;
            }
        }
    }
}
</style>