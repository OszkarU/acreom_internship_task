<template>
    <div class="sidebar-body">
        <div class="sidebar-header">Search</div>

        <div class="input-wrapper">
            <input type="text" v-on:keyup.enter="addDestination" v-model="inputValue" placeholder="Start destination">
            <button class="button" @click="addDestination" :disabled="disabled">Add</button>
        </div>  

        <div class="sidebar-header">My route</div>  

        <div v-for="destination in destinations" class="destination-wrapper">   
            <div>{{ destination.name }}</div>    
            <button class="button" @click="removeDestination(destination)">remove</button>  
        </div>
    </div>
</template>

<script lang="ts">
import type { Destination } from '@/sharedTypes';
import { defineComponent } from 'vue'

export default defineComponent({
  props: { 
        destinations: {
            type: Array<Destination>,
        }
    },
    data() {
        return {
            inputValue: "",
            disabled: true,
        };
    },
    watch: {
        inputValue() {
            this.inputValue.length>0 ? this.disabled = false : this.disabled = true;
        }
    },
    methods: {
        addDestination: function() {
            this.$emit("addDestination", this.inputValue);
            this.inputValue = "";
        },

        removeDestination: function(destination: Destination) {
            this.$emit("removeDestination", destination);
        },
    },
});
</script>

<style lang="css">
.sidebar-body {
    background-color: #f1f1f1;
    height: 100vh;
    padding: 15px 20px;
    border-right: solid 1px black;
}

.sidebar-header {
    margin-top: 10px;
    margin-bottom: 10px;
}

.input-wrapper,
.destination-wrapper {
    display: flex;
}

.button {
    margin-left: 5px;
}

.destination-wrapper {
    margin-top: 3px;
}
</style>


  

