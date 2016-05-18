


$(document).ready(function(){ 
        
    });
	
	  Labelid=0;
	  LabelName=0;
	
	// attribuer le numero au senario
	function numerosenario() {
		label = $("#text").val();
		   $("[id^='"+Labelid+"'][name='"+LabelName+"']").empty();
           $("[id^='"+Labelid+"'][name='"+LabelName+"']").append(label);
        }
		
	//  enregistrer l'id de l'audio pour lui attribuer un numero lors du fermetur du fenêtre  
		$(document).on("click", "[class=bloc]", function() {
		    Labelid=$(this).attr("id");
			LabelName=$(this).parent().attr("id");
        });
		
	// initialisations
     	var width=1000
	   idLigne=0;
	   firstLigne=1;
	   var idLigneCourant=1;
	   
	   
	// click pour ajouter une ligne
	    $(document).on('click', '#ajouter',function() { 
		rangDuBlock=1;
		idLigneCourant=idLigne+1;
		
		// l'ajout d'une nouvelle ligne
	   $( ".dynamique" ).append( "\n\
			   <div id='"+idLigneCourant+"' class='ligne1'>\n\
			    <div  id='"+rangDuBlock+"' class='bloc' data-toggle='modal' \n\
				data-target='#myModal' style='display:inline-block; width:"+width+"px;height:150px;background-color:rgb(223,109,20)'>\n\
				<div  class='col-lg-3 label'>\n\
	               <div  class='circle'><p id='"+rangDuBlock+"' name='"+idLigneCourant+"'  class='numsenario'>+</p></div>\n\
	                 </div>\n\
				   </div>\n\
			   \n\
				  <a id='ajouter2' class='btn btn-info btn-lg' >\n\
                     <span class='glyphicon glyphicon-plus-sign'></span>\n\
		          </a></div>\n\
				  <hr class='style-four'>\n\
				 ");
				
				  $('#parentplus').remove();
			// l'ajout du button en bas de la page	  
			 
	   $( ".dynamique" ).append( "\n\
			   <div id='parentplus' class='col-lg-offset-5 col-md-offset-5'> \n\
                 <a id='ajouter' class='btn btn-info btn-lg'>\n\
                    <span class='glyphicon glyphicon-plus-sign'></span>\n\
		               </a>	 \n\
	           </div>\n\
				 ");
				 
			$("html, body").animate({ scrollTop: $(document).height() }, 1000); 
		   idLigne++;
				 
	   });  // fermeture evénemnet onclick
	   
	   
	   // click pour ajouter des audios à la meme ligne
	 $(document).on('click','#ajouter2',function() { 
	       idLigneCourant=$(this).parent().prop("id");
		   widthCourant=1000/(($(this).siblings().length)+1);		   
			var ligne="";
			rangDuBlock=1;
			
	           // on peut pas commencer à partir de 2 senarios
			   
	     if(idLigneCourant==firstLigne && ($(this).siblings().length)==1)
		 {
		   $( ".dynamique" ).prepend( "\n\
			   <div id='"+(idLigneCourant-1)+"' class='ligne1'>\n\
			    <div id='"+rangDuBlock+"' class='bloc' name='bloc' data-toggle='modal' \n\
				data-target='#myModal' style='display:inline-block; width:"+width+"px;height:150px;background-color:rgb(223,109,20)'>\n\
				<div  class='col-lg-3 label'>\n\
	               <div  class='circle'><p id='"+rangDuBlock+"' name='"+(idLigneCourant-1)+"' style='color:white' class='numsenario'>+</p></div>\n\
	                 </div>\n\
				   </div>\n\
			   \n\
				  <a id='ajouter2' class='btn btn-info btn-lg'>\n\
                     <span class='glyphicon glyphicon-plus-sign'></span>\n\
		          </a></div>\n\
				  <hr class='style-four'>\n\
				 ");
				 
			firstLigne--;
	   }  // fermeture for
	   
	   for (var j = 0; j<(parseInt($(this).siblings().length)+1); j++)
		   {
		       ligne=ligne+"\n\
			    <div id='"+rangDuBlock+"' name='bloc' class='bloc' data-toggle='modal' data-target='#myModal'\n\
				style='display:inline-block;width:"+widthCourant+"px;height:150px;background-color:rgb(223,109,20)'>\n\
				  <div class='col-md-3 '>\n\
	               <div class='circle'><p id='"+rangDuBlock+"' name='"+idLigneCourant+"' class='numsenario'>+</p></div>\n\
	                 </div>\n\
				</div>";
				
		       rangDuBlock++;
	        } // fermeture for
	   
	   ligne=ligne+"\n\
			    <a id='ajouter2' class='btn btn-info btn-lg'>\n\
                     <span class='glyphicon glyphicon-plus-sign'></span>\n\
		         </a></div>\n\
				"
	   $(this).parent().html(ligne);
	   
	   }); // fermeture evénemnet onclick
	   
	
	
