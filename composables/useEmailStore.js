import { ref } from 'vue';

const inboxEmails = ref([
    {
        id: 1,
        title: "Wave hello with video, reactions and more now in huddles", 
        body: "In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever."
    },
    {
        id: 2,
        title: "[JIRA] (LXQ-2604) Learning path- file - Existing File -two buttons for viewing the file", 
        body: "In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever."
    },
    {
        id: 3,
        title: "Wave hello with video, reactions and more now in huddles", 
        body: "In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever."
    },
    {
        id: 4,
        title: "Wave hello with video, reactions and more now in huddles", 
        body: "In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever."
    },
    {
        id: 5,
        title: "[JIRA] (LXQ-2604) Learning path- file - Existing File -two buttons for viewing the file", 
        body: "In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever."
    },
    {
        id: 6,
        title: "Wave hello with video, reactions and more now in huddles", 
        body: "In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever."
    },
    {
        id: 7,
        title: "[JIRA] (LXQ-2604) Learning path- file - Existing File -two buttons for viewing the file", 
        body: "In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever."
    },
    {
        id: 8,
        title: "Wave hello with video, reactions and more now in huddles", 
        body: "In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever."
    },
    {
        id: 9,
        title: "[JIRA] (LXQ-2604) Learning path- file - Existing File -two buttons for viewing the file", 
        body: "In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever."
    },
    {
        id: 10,
        title: "[JIRA] (LXQ-2604) Learning path- file - Existing File -two buttons for viewing the file", 
        body: "In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever."
    },
    {
        id: 11,
        title: "Wave hello with video, reactions and more now in huddles", 
        body: "In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever."
    }
]);

const archivedEmails = ref([]);

const moveToArchive = (email) => {
    archivedEmails.value.push(email);
    inboxEmails.value = inboxEmails.value.filter(e => e.id !== email.id);
};

const selectedEmails = ref([]);

const selectAllEmails = (e, emails) => {
    selectedEmails.value = e.target.checked ? [...emails] : [];      
};

const isEmailSelected = computed(() => selectedEmails.value.length > 0);

export function useEmailStore() {
    return {
        inboxEmails,
        archivedEmails,
        moveToArchive,
        selectedEmails,
        selectAllEmails,
        isEmailSelected
    }
};