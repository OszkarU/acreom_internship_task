<template>
    <div>    
        <div class="notification-wrapper">
            <div v-for="notification in notifications" class="notification">{{ notification.action }} destination {{ notification.name }}</div>   
        </div> 
    </div>
</template>

<script lang="ts">
import type { Notification } from '@/sharedTypes';
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        notifications: {
            type: Array<Notification>,
        }
    },
});
</script>


  
<style lang="css">
.notification-wrapper {
    position: absolute;
    right: 20px;
    bottom: 20px;
}

.notification {
    width: 350px;
    background: #f1f1f1;
    padding: 15px 20px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid black;
}
</style>