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

         document.getElementById( 'user_list' ).addEventListener( 'click', function ( e )
         {
            for ( var i = 0; i < data.users.length; i++ )
            {
               if ( e.toElement.id === data.users[i].id )
               {
                  console.log( data.users[i].name );
                  var myWindow = window.open( "", "popup", "width=400, height=200,scrollbars=yes, menubar=no,resizable=no,directories=no,location=0" );
                  myWindow.document.write( "Name: ", data.users[i].name + "<br />" +
                  "Company: ", data.users[i].companyName + "<br />" +
                          "Job Title: ", data.users[i].jobTitle + "<br />" +
                          "Email Address: ", data.users[i].emailAdd );
                  myWindow.document.title = "Users";
               }
            }
         }, false );
         
         // display links on page
         var output = "";
         $.each( data, function ( key, val ) {

            for ( var i = 0; i < val.length; i++ ) {
               var user = val[i];

               output += "<li><a id='" + user.id + "' href='#" + user.id + "'>" + "&Tilde;" + user.username + "</a></li>";
            }

            $( 'ul#user_list' ).append( output );
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

