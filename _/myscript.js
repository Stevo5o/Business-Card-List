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
               user = val[i];
               console.log( "User id:" + user.id + ". Name: " + user.name );
               output += "<li><a id='" + user.id + "' href='#" + user.id + "'>" +"&Tilde;"+ user.username + "</a></li>";
            }
            $( 'ul#user_list' ).append( output );

            document.getElementById( 'user_list' ).addEventListener( 'click', function ( e )
            {
               console.log( e.toElement );
               if ( e.toElement.id === user.id )
               {
                  console.log( 'yes' );
                  var myYesWindow = window.open( "", "", "width=400, height=200" );
                  myYesWindow.document.write( "Username: ", user.name + "<br />" +
                          "Job Title: ", user.jobTitle + "<br />" +
                          "Email Address: ", user.emailAdd );
                  myYesWindow.document.title = "Users";
               }
               else
               {
                   var myNoWindow = window.open( "", "", "width=40, height=20" );
                    myNoWindow.document.write( "No" );
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

