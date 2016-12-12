$(document).ready(function(){

	// Login window
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

	// Menu
	var windowWidth = $( window ).width(),
        subMenuKey = false;

    $( 'ul.mx-nav > li' ).each( function(){
        if( $( this ).children( 'ul' ).length ){
            $( this ).children( 'a:first-child' ).attr( 'onclick', 'return false' );
        }
    } );

    function SmallMenu(){

        windowWidth = $( window ).width();

        // sub menu        
        if( windowWidth < 767 ){
            
            $( 'ul.mx-nav > li' ).each( function(){
                if( $( this ).children( 'ul' ).length ){
                    $( this ).on( 'click', function(){
                        if( subMenuKey == false ){
                           $( this ).children( 'ul' ).css( 'display', 'block' );
                            subMenuKey = true;
                        }                        
                    } );
                }
            } );

            $( window ).scroll( function(){
                if( subMenuKey == true ){
                   $( 'ul.mx-nav > li > ul' ).css( 'display', 'none' );
                    subMenuKey = false;
                }
            } );

            $( '.mx-button_small' ).on( 'click', function(){
                if( subMenuKey == true ){
                   $( 'ul.mx-nav > li > ul' ).css( 'display', 'none' );
                    subMenuKey = false;
                }
            } );
        }
        
    }

    var navH = $( 'ul.mx-nav' ).height(),
        navKey = false;
    $( 'ul.mx-nav' ).css( 'height', '0px' );

    $( '.mx-button_small' ).on( 'click', function(){
       if( navKey == false ){
            $( 'ul.mx-nav' ).css( 'height', navH + 'px' );
            navKey = true;
       } else{
            $( 'ul.mx-nav' ).css( 'height', '0px' );
            navKey = false;
       }
    } );

    $( window ).scroll( function(){
		if( navKey == true ){			
			$( 'ul.mx-nav' ).css( 'height', '0px' );
            navKey = false;
		}
	} );    
    
    SmallMenu();

	$( window ).resize( function(){       

		if( navKey == true ){			
			$( 'ul.mx-nav' ).css( 'height', '0px' );
            navKey = false;
		}        

       $( 'ul.mx-nav' ).attr( 'style', '' );
       navH = $( 'ul.mx-nav' ).height();
       navKey = false;
       $( 'ul.mx-nav' ).css( 'height', '0px' );

       if( subMenuKey == true ){
           $( 'ul.mx-nav > li > ul' ).css( 'display', 'none' );
            subMenuKey = false;
        }

       SmallMenu();

	} );
	
});