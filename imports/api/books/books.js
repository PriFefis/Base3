/**
 * Created by luizluz on 09/05/2016.
 */
import { Mongo } from 'meteor/mongo';
Books = new Mongo.Collection( 'books' );

Books.allow({
    insert: function(book){
        return true;
    },
    update: function(userId, doc, fields, modifier) {
        return true;
    },
    remove: function (userId, doc){
        return true;
    }
});