import { Template } from 'meteor/templating';
import './index.html';
import {Documents} from '../../api/documents/documents'
import '../../api/books/books.js';

let template;

Template.index.onCreated(() => {

    Meteor.subscribe('books');

    template = Template.instance();

    template.subscribe('Documents');

    template.documents = () => {
        return Documents.find();
    }

});

Template.index.helpers({
    'docs': () => {
        return template.documents();
    }
});

Template.addBook.events({
    'submit form' ( event, template ) {
        event.preventDefault();

        const book = {
            title: template.find( '[name="title"]' ).value.trim(),
            author: template.find( '[name="author"]' ).value.trim()
        };

        if ( book.title !== '' && book.author !== '' ) {
            Meteor.call( 'Books.insert', book, ( error ) => {
                if ( error ) {
                    alert( error.reason );
                } else {
                    template.find( 'form' ).reset();
                }
            });
        } else {
            alert( 'Make sure to provide a title and author before adding a book.' );
        }
    }
});

Template.booksList.helpers({
    books() {
        const books = Books.find();
        if ( books ) {
            return books;
        }
    }
});