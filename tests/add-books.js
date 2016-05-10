/**
 * Created by luizluz on 09/05/2016.
 */
describe( 'Add a Book', function() {

    it( 'should create a new book @watch', function() {
        browser.url( 'http://localhost:3000' )
            .setValue( '[name="title"]', 'Seeking Wisdom' )
            .setValue( '[name="author"]', 'Peter Bevelin' )
            .submitForm( 'form' );

        var getBook = server.execute( function() {
            return Books.findOne( { title: 'Seeking Wisdom' } );
        });

        expect( getBook.title ).to.equal( 'Seeking Wisdom' );
    });

    afterEach( function() {
        server.execute( function() {
            var book = Books.findOne( { title: 'Seeking Wisdom', author: 'Peter Bevelin' } );
            if ( book ) {
                Books.remove( book._id );
            }
        });
    });
});
