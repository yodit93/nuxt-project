<script setup>
    const { inboxEmails, moveToArchive } = useEmailStore();
</script>

<template>
    <section class="email-page">
        <h2>Inbox</h2>
        <header class="email-page__header">
           <div class="email-page__header--selection">
            <input type="checkbox">
            <p>Email Selected</p>
           </div>
           <div class="email-page__header--actions">
            <button class="email-page__mark-read">
                <img src="/mail-04.png" alt="mail">
                <span>Mark as Read</span>
            </button>
            <button class="email-page__archive">
                <img src="/trash-01.png" alt="trash">
                <span>Archive</span>
            </button>
           </div>
        </header>
        <ul>
            <li v-for="email in inboxEmails" :key="email.title" @click="moveToArchive">
                <input type="checkbox">
                <p>{{ email.title }}</p>
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
    .email-page {
        padding: 24px;

        h2 {
            font-size: 32px;
            font-weight: 500;
            color: #121829;
            margin-bottom: 32px;
        }

        &__header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 24px;

            &--selection {
                display: flex;
                align-items: center;
                gap: 12px;
                font-size: 14px;
                font-weight: 500;
            }

            &--actions {
                display: flex;
                gap: 40px;
            }

            button {
                border: none;
                background: none;
                display: flex;
                align-items: center;
                gap: 12px;
                font-size: 14px;
                font-weight: 500;
            }

            img {
                width: 19px;
                height: 19px;
            }
        }

        ul {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        li {
            display: flex;
            align-items: center;
            padding: 21px 0;
            gap: 12px;
            font-size: 14px;
            font-weight: 500;
        }

        input {
            width: 20px;
            height: 20px;
            border-radius: 5px;
        }
        
    }
</style>
