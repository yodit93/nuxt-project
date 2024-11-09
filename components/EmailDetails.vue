<script setup>
    const { markFromDetails, archiveFromDetails, isEmailOpened, closeDetails } = useEmailStore();

</script>

<template>
    <section class="email-detail">
        <header class="email-detail__header">
           <button class="email-detail__close-btn" @click="closeDetails">x Close (Esc)</button>
           <div class="email-detail__header--actions">
            <button class="email-detail__mark-read" @click="markFromDetails">
                <img src="/mail-04.png" alt="mail">
                <span>Mark as Read</span>
            </button>
            <button class="email-detail__archive" @click="archiveFromDetails">
                <img src="/trash-01.png" alt="trash">
                <span>Archive</span>
            </button>
           </div>
        </header>
        <main>
            <h3>Wave hello with video, reactions and more now in huddles</h3>
            <p>In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.</p>
        </main>
    </section>
</template>

<style lang="scss" scoped>
    .email-detail {
        background-color: #ffffff;
        position: fixed;
        left: 528px;
        top: 0;
        bottom: 0;
        padding: 32px;
        display: flex;
        flex-direction: column;
        border: 1px solid #E5E7EB;
        z-index: 1000;

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

        h3 {
            margin-bottom: 20px;
        }
    }
    
</style>
