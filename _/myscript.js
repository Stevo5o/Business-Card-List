/* @ Stephen O'Connor */
( function () {

   // jQuery AJAX call
   $.ajax( {
      url: '_/data.json',
      dataType: 'json',
      type: 'get',
      cache: false,
      success: function ( data ) {

         var userId = [ ];

         function createfunc( i ) {
            return function () {
               console.log( "User id: " + i );
            };
         }

         console.log( userId );
         var output = "";
         $.each( data, function ( key, val ) {
            console.log( data.users );
            for ( var i = 0; i < val.length; i++ ) {
               var user = val[i];
               userId[i] = createfunc( user.id );

               console.log( val[i] );
               console.log( "user id:" + user.id + " " + user.name );
               output += "<li><a id='" + user.id + "' href='#" + user.id + "'>" + "&Tilde;" + user.username + "</a></li>";
            }
            console.log( val.length );
            for ( var j = 0; j < val.length; j++ ) {
               userId[j]();                        // and now let's run each one to see
            }
            $( 'ul#user_list' ).append( output );

            document.getElementById( user.id ).addEventListener( 'click', function ( e )
            {
               console.log( e.toElement );
               if ( e.toElement.id === user.id )
               {
                  console.log( 'yes' );
                  var myWindow = window.open( "", "", "width=400, height=200" );
                  myWindow.document.write( "Username: ", user.name + "<br />" +
                          "Job Title: ", user.jobTitle + "<br />" +
                          "Email Address: ", user.emailAdd );
                  myWindow.document.title = "Users";
               }
               else
               {
                  console.log( 'no' );
               }
            }, false );
         } );


      }
   } );

   //  sort data in ascending and descending order
   $( document ).ready( function () {
      $( '.link-sort-list' ).click( function ( e ) {
         var $sort = this,
                 $list = $( '#user_list' ),
                 $listLi = $( 'li', $list );
         $listLi.sort( function ( a, b ) {
            var keyA = $( a ).text(),
                    keyB = $( b ).text();
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

