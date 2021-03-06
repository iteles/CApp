//Step 1 - for now, publishing everything for ease, will fix later
  Meteor.publish('friends', function(){
    return Friends.find();
  });

  Meteor.publish('cardsById', function(id){
    return Cards.find({_id: id});
  });

  Meteor.publish('cardsByFriend', function(friendId){
    //checks friendId is a String, as recommended by Discover Meteor book
    check(friendId, String);

    return Cards.find({friendId: friendId});
  });
