/* @ Stephen O'Connor */
( function () {

   var usersIndex = 0;
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


         var output = "";
         $.each( data, function ( key, val ) {

            for ( var i = 0; i < val.length; i++ ) {
               var user = val[i];
               userId[i] = createfunc( user.name );

               output += "<li><a id='" + user.id + "' href='#" + user.id + "'>" + "&Tilde;" + user.username + "</a></li>";
            }

            $( 'ul#user_list' ).append( output );
         } );

         for ( var j = 0; j < data.users.length; j++ ) {             
           
            userId[j]();
         }
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

