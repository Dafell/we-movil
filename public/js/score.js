$(document).ready(function() {
	/**var score = $("#ranking").value();
	var num3 = parseInt(score);
	num3 = $("#ranking").text(kformat(num3));
	**/
	$('.positive-cal').click(function(){
			var color = $('.qualify').css('color');
			if (color == 'rgb(255, 255, 255)') {
			$('.qualify').css("color", "#bb0000");
			$('.qualify').css("text-shadow", "none");
			var dataId = this.id;
			var clase = "." + dataId; // Id capturado
				$.ajax({
		    		type    : 'post',
		    		url     : '/calificarPositivo/' + dataId,
		    		success : function(response) {
		    			var str = JSON.stringify(eval("(" + response + ")"));
		    			var strParsed = JSON.parse(str);

		    			var num = strParsed['aux'];
		    			var respSuccess = strParsed['success'];
		    			var res = respSuccess.toString();

				    	if (res === 'false') {
			           		alert('Error al calificar. Actualice y califique de nuevo');
			       		} else if (res === 'true') {
			          		$("#QualiVal").text(num);
			          	}
		    		}
				}); 
			} else{
			$('.qualify').css("color", "#ffffff");
			$('.qualify').css("text-shadow", "-1px -1px 1px #bb0000, 1px -1px 1px #bb0000, -1px 1px 1px #bb0000, 1px 1px 1px #bb0000");
					var dataId = this.id;
					var clase = "."+dataId; // Id capturado
					$.ajax({
			    		type    : 'post',
			    		url     : '/calificarNegativo/' + dataId,
			    		success : function(response) {
			    			var str = JSON.stringify(eval("(" + response + ")"));
			    			var strParsed = JSON.parse(str);
			    			
			    			var num = strParsed['aux'];
			    			var respSuccess = strParsed['success'];
			    			var res = respSuccess.toString();

					    	if (res === 'false') {
				           		alert('Error al calificar. Actualice y califique de nuevo');
				       		} else if (res === 'true') {
				          		$("#QualiVal").text(num);
				          	}
			    		}
				}); 
			};

	});

	function kformat(num){
		return num > 999 ? (num/1000).toFixed(1)+ 'k' : num
	}

});	