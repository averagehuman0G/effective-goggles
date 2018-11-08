window.onload = function() {

	const form = document.getElementById('message-form');
	const messageField = document.getElementById('message');
	const messagesList = document.getElementById('messages');
	const socketStatus = document.getElementById('status');
	const nameField = document.getElementById('name');

	const socket = io('http://9bc47026.ngrok.io'); 
	socket.on('connect', function() {
		socketStatus.innerHTML = 'Connected';
		socketStatus.className = 'open';
	});

     nameForm.onsubmit = function(e){
        e.preventDefault();
        const nameSubmit = nameField.value;
        socket.send(name);

        messagesList.innerHTML += '<li class="sent"> <span>'nameField'</span> </li>';

        messageField.value = '';

        return false;
    }

	form.onsubmit = function(e) {
		e.preventDefault();
		const message = messageField.value;
		socket.send(message);

		messagesList.innerHTML += '<li class="sent"> <span>Sent:</span>' + message + '</li>';

		messageField.value = '';

		return false;
	};

	socket.on('message', function(data) {
		const message = data;
		messagesList.innerHTML += '<li class="received"><span>Received:</span>' + message + '</li>';

	});
	
	socket.on('disconnect', function() {
		socketStatus.innerHTML = 'Disconnected from WebSocket.';
		socketStatus.className = 'closed';

	});
};
