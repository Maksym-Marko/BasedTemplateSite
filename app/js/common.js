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
  var windowWidth;
  function GetWidthWithoutScrollbar(){
    $( 'body' ).css( 'overflow', 'hidden' );
    windowWidth = $( 'body' ).width();
    $( 'body' ).css( 'overflow', 'auto' );
  } 

    var navKey = false,
        subMenuKey = false;

    $( '.mx-button_small' ).on( 'click', function(){
    
    if( navKey == false ){
        $( 'ul.mx-nav' ).css( 'display', 'block' );
        navKey = true;
    } else{
        $( 'ul.mx-nav' ).css( 'display', 'none' );
        navKey = false;
        $( 'ul.mx-nav' ).children( 'li' ).children( 'ul' ).attr( 'style', '' );
        subMenuKey = false;
    }
    } ); 

    function MainMenu(){
    
      $( 'ul.mx-nav > li' ).css( 'position', 'relative' );
    $( 'ul.mx-nav' ).attr( 'style', '' );

      $( 'ul.mx-nav > li' ).each( function(){
          if( $( this ).children( 'ul' ).length ){
              $( this ).children( 'a:first-child' ).attr( 'onclick', 'return false' );
          }
      } );

      if( windowWidth <= 768 ){
        $( 'ul.mx-nav > li' ).attr( 'style', '' );
      $( 'ul.mx-nav' ).css( 'display', 'none' );
    }
    }

    $( 'ul.mx-nav' ).children( 'li' ).each( function(){

        if( $( this ).children( 'ul' ).length ){
            $( this ).on( 'click', function(){
          
            if( subMenuKey == false ){
              $( 'ul.mx-nav > li ul' ).attr( 'style', '' );
                $( this ).children( 'ul' ).css( 'display', 'block' );
                subMenuKey = true;
            } else{
              $( 'ul.mx-nav > li ul' ).attr( 'style', '' );
                subMenuKey = false;
            }         
        });
        }
    } );
    
    function SubMenu(){

        // sub menu        
        if( windowWidth <= 768 ){            

            $( '.mx-button_small' ).on( 'click', function(){
                if( subMenuKey == true ){
                   $( 'ul.mx-nav > li > ul' ).css( 'display', 'none' );
                   subMenuKey = false;
                }
            } );
        } else{
          $( 'ul.mx-nav > li > ul' ).attr( 'style', '' );
        }
        
    } 

    $( window ).scroll( function(){

    if( navKey == true ){     
      $( 'ul.mx-nav' ).css( 'display', 'none' );
            navKey = false;
    }

    if( subMenuKey == true ){
           $( 'ul.mx-nav > li > ul' ).attr( 'style', '' );
            subMenuKey = false;
        }

  } );
    
    GetWidthWithoutScrollbar();
    MainMenu();
    SubMenu();

  $( window ).resize( function(){

    $( 'ul.mx-nav' ).attr( 'style', '' );

    if( navKey == true ){     
      $( 'ul.mx-nav' ).css( 'display', 'none' );
            navKey = false;
    }

       if( subMenuKey == true ){
           $( 'ul.mx-nav > li > ul' ).css( 'display', 'none' );
           subMenuKey = false;
        }

    GetWidthWithoutScrollbar();
    MainMenu();
    SubMenu();

  } );
  
});