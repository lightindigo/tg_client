import { LoginScreen } from "./screens/loginScreen/loginScreen";
import * as $ from "jquery";

function main() {
    const page = new LoginScreen();
    document.body.innerHTML = page.render();

    wsTest();
}

function wsTest() {
    const servers = [
        'flora',
        'venus',
        'aurora',
        'vesta',
        'flora',
    ];
    let serverNum = parseInt((Math.random() * (servers.length - 1)).toFixed(0));
    let socket = new WebSocket(`wss://${servers[serverNum]}-1.web.telegram.org:443/apiws_test`, 'binary');

    socket.onmessage = (message: MessageEvent) => {
        console.log('Message', message);
    }

}

$(main);