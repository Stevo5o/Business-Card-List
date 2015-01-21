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
               output += "<li><a id='pop' href='#" + user.username + "'>" + user.username + "</a></li>";
            }
            $( 'ul#user_list' ).append( output );
            $( "a#pop[href]" ).click( function () {
               var myWindow = window.open("","", "width=400, height=200");
               myWindow.document.write("Username: ", user.name);
               myWindow.document.title = "Users";
                  // alert( user.name );               
            } );
         } );
      }
   } );
}() );

