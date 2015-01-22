/* @ Stephen O'Connor */
( function () {

   // jQuery AJAX call
   $.ajax( {
      url: '_/data.json',
      dataType: 'json',
      type: 'get',
      cache: false,
      success: function ( data ) {
         var output = "";
         $.each( data, function ( key, val ) {
            for ( var i = 0; i < val.length; i++ ) {
               var user = val[i];
               console.log( val[i] );
               output += "<li><a id='pop' href='#" + user.id + "'>" + user.username + "</a></li>";
            }
            $( 'ul#user_list' ).append( output );

            // this is in the wrong place
            $( "a#pop[href]" ).click( function () {
               var myWindow = window.open( "", "", "width=400, height=200" );
               myWindow.document.write( "Username: ", user.name + "<br />" +
                       "Job Title: ", user.jobTitle + "<br />" +
                       "Email Address: ", user.emailAdd );
               myWindow.document.title = "Users";
            } );
         } );
      }
   } );

   //  sort data in ascending and descending order
   $( document ).ready( function () {
      $( '.link-sort-list' ).click( function ( e ) {
         var $sort = this;
         var $list = $( '#user_list' );
         var $listLi = $( 'li', $list );
         $listLi.sort( function ( a, b ) {
            var keyA = $( a ).text();
            var keyB = $( b ).text();
            if ( $( $sort ).hasClass( 'asc' ) )
            {
               return ( keyA > keyB ) ? 1 : 0;
            } else {
               return ( keyA < keyB ) ? 1 : 0;
            }
         } );
         $.each( $listLi, function ( index, row ) {
            $list.append( row );
         } );
         e.preventDefault();
      } );
   } );
}() );

