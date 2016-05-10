/**
 * Created by luizluz on 09/05/2016.
 */
Meteor.publish("books", function() {
    return Books.find();
});
