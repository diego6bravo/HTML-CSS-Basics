$( function () {
    $( document ).on( "submit", "#feedback-form", function ( t ) {
        t.preventDefault();
        var e = $( this );

        e.find("button[type='submit']").prop('disabled', true);

        $( '.form-loader.fd-loader' ).addClass( 'active' );
        $.post( "/feedback/request", e.serialize(), function ( t ) {
            e[ 0 ].reset(), $( ".thx-comment" ).text( t.title ), $( ".thx-text" ).text( t.text ), $( "#tnx" ).show()
            var pixel = document.createElement('img');
            pixel.setAttribute('src', 'https://px.ads.linkedin.com/collect/?pid=1607972&conversionId=1657732&fmt=gif');
            pixel.setAttribute('alt', '');
            pixel.setAttribute('height', '1');
            pixel.setAttribute('width', '1');
            document.body.appendChild(pixel);
        } )
    } );
});