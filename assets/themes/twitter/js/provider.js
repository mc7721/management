function listProviders()
    {
    	
    var $html = '';
    var $tagArray = [];
    var $providerArray = [];
    var $tag = '';
    var $logos = '';
    var $slot = 0;	
    	
    $.getJSON('data/tags.json', function(data) {
    	
    	 var $tagCount = 0;
    	
    	 $.each(data['tags'], function(key, val) {
			
			$tagArray[$tagCount] = val['tag'];	        	        		
					
			$tagCount++;
				
	        });
	        
        })
        .done(function() {  
        	
        	$NumberofTags = $tagArray.length;
        	$ProcessedTags = 1;
        
			for (var i = 0; i < $tagArray.length; i++) {
				
				$tag = $tagArray[i];
				$slot = i;
				
				alert($tag + ' - ' + $slot);

			    $.getJSON('data/providers.json', function(providerdata) {
			    	
			    	$Any = 0;
			    	$logos = '';
			    	
			    	 $.each(providerdata['serviceprovider'], function(key2, val2) {
			    	 	
			    	 	$tags = val2['tags'];
			    	 	$name = val2['name'];
			    	 	
			    	 	$inside = $tags.indexOf($tag);
			    	 	
						alert($tag + ' in (' + $tags + ') for ' + $name + ' - ' + $inside + ' - ' + $slot);
						
						if($inside!=-1){
							
							var template2 = $('#providerListingTemplate').html();
							
							$logo = Mustache.to_html(template2, val2);
							
							$logos += $logo;
							 
							}
							
						$Any = 1;	
						 						
				       });
				        
				       $providerArray[$slot] = '<p><strong>' + $tag + '</strong></p>' + $logos; 
				        
			        });
			
				}    
	
		 });

    }    
     