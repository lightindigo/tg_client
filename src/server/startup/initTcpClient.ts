import * as net from 'net';

export const initTcpClient = async () => {
    const socket = new net.Socket();
    socket.connect(443, '149.154.167.40');

    socket.on('connect', () => {
        console.log('Tcp socket: connected');
    });

    socket.on('data', (data: Buffer) => {
        console.log('Tcp data recieved');
    });

    socket.on('close', (hadError: boolean) => {
        if(hadError){
            console.error('Socket closed with error');
        }
        console.log('Close tcp socket');
    });

    socket.on('timeout', () => {
        console.log('socket timeout');
        socket.end();
    });
}