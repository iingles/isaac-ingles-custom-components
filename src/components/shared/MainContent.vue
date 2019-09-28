<template>
    <div><!--cannot do v-if on the root component; nesting another div -->
        <div v-for="(page,pageKey) in pages" :key="pageKey">
            <template class="main-content" v-if="page.pageTitle == showPage">
                <component :is="page.templateName"  />
            </template>
        </div>
    </div>
</template>

<script>
import ServerManagement from '../server/ServerManagement'
import UserList from '../administration/Users'
import UserPrivileges from '../administration/Privileges'
import AdminSettings from '../administration/AdminSettings'
import { dataBus } from '../../main'


export default {
    components: {
        ServerManagement,
        UserList,
        UserPrivileges,
        AdminSettings
    },
    props: {

    },
    data: () => ({
        showPage: '',
        pages: [
            {
                id: 1,
                pageTitle: 'Server Management',
                pageContent: [],
                templateName: 'ServerManagement',
                showMe: true
            },
            {
                id: 2,
                pageTitle: 'Administrative Settings',
                pageContent: [],
                templateName: 'AdminSettings',
                showMe: false
            },
            {
                id:3,
                pageTitle: 'User List',
                pageContent: [],
                templateName: 'UserList',
                showMe: false
            },
            {
                id: 4,
                pageTitle: 'User Privileges',
                pageContent: [],
                templateName: 'UserPrivileges',
                showMe: false
            }
        ],
    }),
    created: function() {
        let titles = [];
        for(let i = 0; i < this.pages.length; i++) {
            titles.push(this.pages[i].pageTitle);
        }
        dataBus.$emit('titlesAdded',titles)

        dataBus.$on('pageChange', (pageName) => {
            this.showPage = pageName;
        });
    }
}
</script>

<style scoped>
    .main-content {
        padding: 10px 25px;
    }
</style>