<script setup>
    const { 
        inboxEmails, 
        moveToArchive, 
        selectedEmails, 
        selectAllEmails, 
        isEmailSelected,
        isEmailOpened,
        openDetails
    } = useEmailStore();

    const areAllSelected = computed( () => selectedEmails.value.length === inboxEmails.value.length && inboxEmails.value.length > 0);
    
    const markAsRead = () => {
        selectedEmails.value.forEach(email => {
            email.isRead = true;
        });
        selectedEmails.value = [];
    };
    const controlArchive = () => {
        selectedEmails.value.forEach(email => {
            moveToArchive(email);
        });
        selectedEmails.value = [];
    };
    
    
</script>

<template>
    <section class="email-page">
        <h2>Inbox</h2>
        <header class="email-page__header">
           <div class="email-page__header--selection">
            <input type="checkbox" @change="e => selectAllEmails(e, inboxEmails)" :checked="areAllSelected">
            <p>Email Selected ({{ selectedEmails.length }})</p>
           </div>
           <div class="email-page__header--actions" v-if="isEmailSelected">
            <button class="email-page__mark-read" @click="markAsRead">
                <img src="/mail-04.png" alt="mail">
                <span>Mark as Read</span>
            </button>
            <button class="email-page__archive" @click="controlArchive">
                <img src="/trash-01.png" alt="trash">
                <span>Archive</span>
            </button>
           </div>
        </header>
        <ul>
            <li v-for="email in inboxEmails" :key="email.title">
                <input type="checkbox" :value="email" v-model="selectedEmails">
                <p :class="{ 'read' : email.isRead }" @click="openDetails(email)">{{ email.title }}</p>
            </li>
        </ul>
        <EmailDetails v-if="isEmailOpened"/>
    </section>
</template>

<style lang="scss">
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
            cursor: pointer;
        }

        input {
            width: 20px;
            height: 20px;
            border-radius: 5px;
        }

        .read {
            opacity: 0.5;
        }
        
    }
</style>
