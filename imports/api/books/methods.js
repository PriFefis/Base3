/**
 * Created by luizluz on 09/05/2016.
 */
import './books';

Meteor.methods({
    'Books.insert' ( book ) {
        check(book,{title: String, author: String});

        Books.insert( book, ( error ) => {
            if ( error ) {
                console.log( error );
            }
        });
    }
});
