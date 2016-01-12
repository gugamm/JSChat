var server = require('http').createServer();
var io = require('socket.io')(server);

io.on('connection', function(socket){
    console.log('Someone connected');
    
    socket.on('chatMessage', (data) => {
      console.log(`Received message ${data} from ${socket.handshake.address}.`);
      io.emit('chatResponse', data);
    });
    
    socket.on('disconnect', () => {
      console.log('User has disconnected.');
    });
});

server.listen(process.env.PORT);
console.log(`Server listening on port ${process.env.PORT}`);