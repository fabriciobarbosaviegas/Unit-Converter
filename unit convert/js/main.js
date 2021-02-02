function Translate() {
	
	document.body.innerHTML = `<fieldset id="field" align="center">
			<h1>Conversor de unidades</h1>
			<input type="button" value="English please!" onclick="Traduzir()">
			<p>
				<p>
					<span id="text1">De:</span>
					<span id="text2">Para:</span>
				</p>
				<input type="number" id="number1" oninput="Convert()">
				<input type="number" id="number2" oninput="Convert()">
			</p>
			<p>
				<select id="selector1" onchange="Convert()">
					<option value="default" selected="">Selecione a unidade</option>
					<option value="m">Metros</option>
					<option value="km">Quilômetros</option>
					<option value="cm">Centímetros</option>
					<option value="mm">Milímetros</option>
					<option value="μm">Micrômetros</option>
					<option value="nm">Nanômetros</option>
					<option value="mi">Milhas</option>
					<option value="yd">Jardas</option>
					<option value="ft">Pés</option>
					<option value="in">Polegadas</option>
					<option value="ly">Anos luz</option>
				</select>
				<select id="selector2" onchange="Convert()">
					<option value="default" selected="">Selecione a unidade</option>
					<option value="m">Metros</option>
					<option value="km">Quilômetros</option>
					<option value="cm">Centímetros</option>
					<option value="mm">Milímetros</option>
					<option value="μm">Micrômetros</option>
					<option value="nm">Nanômetros</option>
					<option value="mi">Milhas</option>
					<option value="yd">Jardas</option>
					<option value="ft">Pés</option>
					<option value="in">Polegadas</option>
					<option value="ly">Anos luz</option>			
				</select>
			</p>
			<p>
				<span id="res"></span>
			</p>
		</fieldset>`;

}

function Traduzir() {
	document.body.innerHTML = `	<form>
		<fieldset align="center">
			<h1>Unit Convert</h1>
			<input type="button" value="I don't speak english (português)" onclick="Translate()">
			<p>
				<p>
					<span id="text1">From:</span>
					<span id="text2">To:</span>
				</p>
				<input type="number" id="number1" oninput="Convert()">
				<input type="number" id="number2" oninput="Convert()">
			</p>
			<p>
				<select id="selector1" onchange="Convert()">
					<option value="default" selected="">Select a unit</option>
					<option value="m">Meter</option>
					<option value="km">Kilometer</option>
					<option value="cm">Centimeter</option>
					<option value="mm">Millimiter</option>
					<option value="μm">Micrometer</option>
					<option value="nm">Nanometer</option>
					<option value="mi">Mile</option>
					<option value="yd">Yard</option>
					<option value="ft">Foot</option>
					<option value="in">Inch</option>
					<option value="ly">Light Year</option>
				</select>
				<select id="selector2" onchange="Convert()">
					<option value="default" selected="">Select a unit</option>
					<option value="m">Meter</option>
					<option value="km">Kilometer</option>
					<option value="cm">Centimeter</option>
					<option value="mm">Millimiter</option>
					<option value="μm">Micrometer</option>
					<option value="nm">Nanometer</option>
					<option value="mi">Mile</option>
					<option value="yd">Yard</option>
					<option value="ft">Foot</option>
					<option value="in">Inch</option>
					<option value="ly">Light Year</option>			
				</select>
			</p>
			<p>
				<span id="res"></span>
			</p>
		</fieldset>
	</form>`
}

function Convert() {

	let unit1 = document.getElementById('selector1').value
	let unit2 = document.getElementById('selector2').value
	let num1 = document.getElementById('number1').value
	let num2 = document.getElementById('number2').value
	let	res = document.getElementById('res') 

	if(unit1 == 'default' || unit2 == 'default'){

			res.innerHTML = `<span style="color:red;">Please select a valid unit </span>`;

	}

	else if(unit1 == unit2 || unit2 == unit1){

		let num2 = document.getElementById('number2').value = `${num1}`;
		res.innerHTML = `The result is: ${num1} ${unit2}`;

	}

	else if(unit1 == 'm' && unit2 == 'cm'){

		let conversion = num1 * 100;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'km' && unit2 == 'cm'){

		let conversion = num1 * 100000;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

	else if(unit1 == 'mm' && unit2 == 'cm'){

		let conversion = num1 / 10;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'μm' && unit2 == 'cm'){

		let conversion = num1 / 10000;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'nm' && unit2 == 'cm'){

		let conversion = num1 / 1E+7;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'mi' && unit2 == 'cm'){

		let conversion = num1 * 160934;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'yd' && unit2 == 'cm'){

		let conversion = num1 * 91.44;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

	else if(unit1 == 'ft' && unit2 == 'cm'){

		let conversion = num1 * 30.48;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

	else if(unit1 == 'in' && unit2 == 'cm'){

		let conversion = num1 * 2.54;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}


	else if(unit1 == 'ly' && unit2 == 'cm'){

		let conversion = num1 * 9.461E+17;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

}