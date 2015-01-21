/* @ Stephen O'Connor */
( function () {

   var userIndex;

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
               output += "<li><a href='#" + user.username + "'>" + user.username + "</a></li>";
            }
            $( 'ul#user_list' ).append( output );
            $( 'a[href]' ).click( function () {               
                  console.log( user.name );               
            } );
         } );
      }
   } );
}() );

