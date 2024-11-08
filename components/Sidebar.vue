<script setup>
    const { inboxEmails, archivedEmails } = useEmailStore();
</script>

<template>
    <aside class="sidebar">
        <img src="/public/Logo.png" class="sidebar__logo" alt="logo">
        <nav class="sidebar__nav">
            <ul class="sidebar__list-cont">
                <li class="sidebar__list">
                    <div>
                        <img src="/inbox-01.png" alt="inbox">
                        <nuxt-link to="/">Inbox</nuxt-link>
                    </div>
                    <span>{{ inboxEmails.length }}</span>
                </li>
                <li class="sidebar__list">
                    <div>
                        <img src="/archive.png" alt="archive">
                        <nuxt-link to="/archive">Archive</nuxt-link>
                    </div>
                    <span>{{ archivedEmails.length }}</span>
                </li>
            </ul>
            <button class="sidebar__logout-btn">
                <img src="/log-out-04.png" alt="logout">
                <span>Logout</span>
            </button>
        </nav>
    </aside>
</template>

<style lang="scss" scoped>
    .sidebar {
        width: 260px;
        height: 100vh;
        padding: 20px 0;
        background: #F8FAFC;
        border: 1px solid #E5E7EB;

        &__logo {
            width: 40px;
            height: 20px;
            margin: 0 0 32px 24px;
        }
        &__nav {
            display: flex;
            flex-direction: column;
            gap: 12px;
            height: calc(100% - 40px);
            justify-content: space-between;
        }
        &__list-cont {
            padding: 0 10px;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        &__list {
            list-style: none;
            height: 48px;
            border-radius: 54px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 24px;
            cursor: pointer;

            &:hover {
               background-color: #D6E2FB; 
               color: #121829;
            }

            div {
                display: flex;
                align-items: center;
                gap: 12px;
            }

            img {
                width: 24px;
                height: 24px;
            }

            a {
                text-decoration: none;
                color: #4B5563;
                font-size: 16px;
            }

            span {
                color: #4B5563;
                font-size: 16px;
            }
        }
        &__logout-btn {
            border: none;
            background: none;
            display: flex;
            align-items: center;
            gap: 12px;
            justify-content: flex-start;
            margin-left: 24px;
            font-size: 16px;

            img {
               width: 20px;
               height: 18px;
            }
        }
    }
</style>
