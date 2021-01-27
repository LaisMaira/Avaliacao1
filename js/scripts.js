function calcula(valor){

	if (valor > 0 ){
		var r = 0;

		for (var i = 3; i < valor; i++) {

			if ((i % 3) == 0 || (i % 5 == 0)){
				r = parseInt(r) + parseInt(i);
			}
		}

		$('#div').html("Resultado: "+r);
	}else{
		$('#div').html("<span class='erro'>Valor invalido!</span>");
	}
}

$(document).on('keyup', function(event) {

    if(event.keyCode === 13) {

        $('#btncalcular').click();

    }

});