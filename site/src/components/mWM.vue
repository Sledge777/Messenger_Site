    <template>
        <div class="wrapp">
            <mWHeader class="comp1" :receiver="receivername" />
            <mWC class="comp2" :messages="messages" />
            <mWFooter class="comp3" @sendContent="SendMessege" />
        </div>
    </template>

<script>
import mWFooter from './mWFooter.vue';
import mWHeader from './mWHeader.vue';
import mWC from './mWC.vue';
import { io } from 'socket.io-client';

export default {
    components: {
        mWFooter,
        mWHeader,
        mWC,
    },
    data() {
        return {
            socket: null,
            sendername: '',
            receivername: '',
            messages: [],
        };
    },
    mounted() { // поменял с mounted
        this.sendername = localStorage.getItem('sendername');
        this.receivername = localStorage.getItem('receivername');
        this.connectWebSocket();
    },
    methods: {
        connectWebSocket() {
            this.socket = io('http://localhost:3000');
            this.socket.emit('joinRoom', this.sendername);

            this.socket.on('receiveMessage', (message) => {
                this.messages.push(message);
                console.log(message)
            });

            this.socket.on('connect_error', (error) => {
                console.error('WebSocket Error:', error);
            });
        },
        SendMessege(content) {
            const message = {
                sendername: this.sendername,
                receivername: this.receivername,
                content: content,
            };
            console.log(message)
            this.socket.emit('sendMessage', message);
        },
    },
}
</script>

<style scoped>
.wrapp {
    width: 60%;
    height: 100vh;
    background-color: #2e2e2e;
    display: flex;
    flex-direction: column;
    position: relative;
}

.comp1 {
    position: absolute;
    top: 0;
}

.comp3 {
    position: absolute;
    bottom: 0;
}

.comp2 {
    margin-top: 30%;
}
</style>