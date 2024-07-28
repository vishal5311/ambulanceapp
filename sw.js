self.addEventListener('push', function(event) {
    const data = event.data.json();
    
    const options = {
        body: data.message,
        data: data
    };
    
    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    clients.openWindow('/');
});
