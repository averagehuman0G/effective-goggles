window.onload = function() {

	const form = document.getElementById('message-form');
	const messageField = document.getElementById('message');
	const messagesList = document.getElementById('messages');
	const socketStatus = document.getElementById('status');
	const nameField = document.getElementById('name');

	const socket = io('https://simanonmeseg.herokuapp.com/');
	socket.on('connect', function() {
		socketStatus.innerHTML = 'Connected';
		socketStatus.className = 'open';
	});

	form.onsubmit = function(e) {
		e.preventDefault();
		const message = messageField.value;
		const nameSubmit = nameField.value;

		messagesList.innerHTML += '<li class="sent"> <span>' + nameSubmit + ': </span>' + message + '</li>';

		messageField.value = '';
		nameField.value = '';

		return false;
	};

	socket.on('message', function(data) {
		const message = data;
		messagesList.innerHTML += '<li class="received"> <span>' + nameSubmit + ': </span>' + message + '</li>';
	});

	socket.on('disconnect', function() {
		socketStatus.innerHTML = 'Disconnected from WebSocket.';
		socketStatus.className = 'closed';
	});
};
