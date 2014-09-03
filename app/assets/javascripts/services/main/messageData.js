angular.module('Contact').factory('messageData', [
  '$http', function($http) {
    var messageData;
    messageData = {
      data: {
        messages: [
          {
            name: 'Loading Contact...',
            email: 'Loading Contact...',
            message: 'Loading Contact...',
            created_at: 'Loading Contact...',
          }
        ]
      }
    };

   messageData.loadMessages = function() {
    if (!messageData.isLoaded) {
      $http.get('../contact/contact/all_messages.json').success(function(data) {
        messageData.data.messages = data;
        messageData.isLoaded = true;
        console.log('Successfully loaded messages.');
      }).error(function() {
        console.error('Failed to load messages.');
      });
    }
  };

  messageData.deleteMessage = function($data){
    $http.post('./posts.json', data).success(function(data) {
      postData.data.posts.push(data);
       console.log('Successfully created post.');
    }).error(function() {
      console.error('Failed to create new post.');
    });
  }

  return messageData;
  }
]);