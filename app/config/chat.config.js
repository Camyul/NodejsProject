const applyTo = (io) => {
    const users = [];

    console.log('Chat connected!');

    io.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            io.emit('chat message', msg);
        });
    });
};

module.exports = { applyTo };
