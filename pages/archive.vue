<script setup>
    const { archivedEmails, selectedEmails, selectAllEmails, isEmailSelected } = useEmailStore();

    const areAllSelected = computed( () => selectedEmails.value.length === archivedEmails.value.length && archivedEmails.value.length > 0);

    const deleteEmail = () => {
        selectedEmails.value.forEach(email => {
            archivedEmails.value = archivedEmails.value.filter(archivedEmail => archivedEmail !== email);
        });
        selectedEmails.value = [];
    };
</script>

<template>
    <section class="email-page">
        <h2>Archive</h2>
        <header class="email-page__header">
           <div class="email-page__header--selection">
            <input type="checkbox" @click="e => selectAllEmails(e, archivedEmails)" :checked="areAllSelected">
            <p>Email Selected (0)</p>
           </div>
           <div class="email-page__header--actions" v-if="isEmailSelected">
            <button class="email-page__mark-read" @click="deleteEmail">
                <img src="/trash-01.png" alt="mail">
                <span>Delete</span>
            </button>
           </div>
        </header>
        <ul>
            <li v-for="email in archivedEmails" :key="email.title">
                <input type="checkbox" :value="email" v-model="selectedEmails">
                <p>{{ email.title }}</p>
            </li>
        </ul>
    </section>
</template>
