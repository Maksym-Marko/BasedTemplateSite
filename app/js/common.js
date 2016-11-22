$(document).ready(function(){

	//login window
	$( '#MxClose' ).css( 'cursor', 'pointer' );
	$( '.mx-button_popup_open' ).css( 'cursor', 'pointer' );

	$( '.mx-button_popup_open' ).on( 'click', function(){           
		$( '.mx-popup_wrap' ).css( 'display', 'block' );
		$( 'body' ).css( 'overflow', 'hidden' );                  
	} );

	$( '#MxClose' ).on( 'click', function(){
		$( '.mx-popup_wrap' ).css( 'display', 'none' );
		$( 'body' ).css( 'overflow', 'auto' );
	});
	
});

