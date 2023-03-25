<template>
    <div id="app">
        <SideBar v-bind:destinations="destinations" v-on:addDestination="DestinationsAdded($event)" v-on:removeDestination="DestinationsRemoved($event)" />
        <NotificationArea v-bind:notifications="notifications" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SideBar from "./components/SideBar.vue";
import NotificationArea from "./components/NotificationArea.vue";
import type { Destination, Notification } from "@/sharedTypes";


export default defineComponent({
    components: {
        'SideBar': SideBar,
        'NotificationArea': NotificationArea
    },
    data() {
        return {
            destinations: Array<Destination>(),
            notifications: Array<Notification>()
        }
    },
    methods: {
        DestinationsAdded(input: string) {
            const d: Destination = { name: input, id: Math.random() }; //create and add to the array of Destination
            console.log(d.name.length);
            d.name.length>0 ? (this.destinations.push(d), this.ShowNotification(d.name, "Added")) : null;
        },

        DestinationsRemoved(destination: Destination) {
            const indexOfObject = this.destinations.findIndex((d: { id: number }) => d.id === destination.id); //remove the specific destination
            this.destinations.splice(indexOfObject, 1)
            this.ShowNotification(destination.name, "Removed");
        },

        ShowNotification(name: string, action: string) { //show notification for 5sec
            const t = Math.random();
            this.notifications.push({name: name, time: t, action: action});
            setTimeout((() => {this.notifications = this.notifications.filter((n: { time: number }) => t !== n.time)}), 5000);
        }
    }
})
</script>
