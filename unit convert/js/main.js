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

	//cm to conversions

	else if(unit1 == 'm' && unit2 == 'cm'){

		let conversion = num1 * 100;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion}${unit2}`;

	}	

	else if(unit1 == 'km' && unit2 == 'cm'){

		let conversion = num1 * 100000;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion}${unit2}`;

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

	//m to conversions

	else if(unit1 == 'cm' && unit2 == 'm'){

		let conversion = num1/100;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'km' && unit2 == 'm'){

		let conversion = num1*1000;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

	else if(unit1 == 'mm' && unit2 == 'm'){

		let conversion = num1/1000;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'μm' && unit2 == 'm'){

		let conversion = num1/1E+6;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'nm' && unit2 == 'm'){

		let conversion = num1/1E+9;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'mi' && unit2 == 'm'){

		let conversion = num1/1609;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'yd' && unit2 == 'm'){

		let conversion = num1/1.094;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

	else if(unit1 == 'ft' && unit2 == 'm'){

		let conversion = num1/3.281;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

	else if(unit1 == 'in' && unit2 == 'm'){

		let conversion = num1/39.37;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}


	else if(unit1 == 'ly' && unit2 == 'm'){

		let conversion = num1/9.461E+15;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

//	km to convertion

	else if(unit1 == 'cm' && unit2 == 'km'){

		let conversion = num1/100000;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'm' && unit2 == 'km'){

		let conversion = num1*1000;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

	else if(unit1 == 'mm' && unit2 == 'km'){

		let conversion = num1/1E+6;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'μm' && unit2 == 'km'){

		let conversion = num1/1E+9;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'nm' && unit2 == 'km'){

		let conversion = num1/1E+12;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'mi' && unit2 == 'km'){

		let conversion = num1*1.609;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'yd' && unit2 == 'km'){

		let conversion = num1/1094;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

	else if(unit1 == 'ft' && unit2 == 'km'){

		let conversion = num1/3281;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

	else if(unit1 == 'in' && unit2 == 'km'){

		let conversion = num1/39370;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}


	else if(unit1 == 'ly' && unit2 == 'km'){

		let conversion = num1/9.461E+12;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

//	mm to convertion

	else if(unit1 == 'm' && unit2 == 'mm'){

		let conversion = num1*1000;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'cm' && unit2 == 'mm'){

		let conversion = num1*10;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

	else if(unit1 == 'km' && unit2 == 'mm'){

		let conversion = num1*1E+6;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'μm' && unit2 == 'mm'){

		let conversion = num1/1000;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'nm' && unit2 == 'mm'){

		let conversion = num1/1E+6;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'mi' && unit2 == 'mm'){

		let conversion = num1*1.609E+6;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'yd' && unit2 == 'mm'){

		let conversion = num1*914;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

	else if(unit1 == 'ft' && unit2 == 'mm'){

		let conversion = num1*305;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

	else if(unit1 == 'in' && unit2 == 'mm'){

		let conversion = num1*25.4;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}


	else if(unit1 == 'ly' && unit2 == 'mm'){

		let conversion = num1/9.223E+18;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}
// μm to convertion

	else if(unit1 == 'm' && unit2 == 'μm'){

		let conversion = num1*1E+6;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'cm' && unit2 == 'μm'){

		let conversion = num1*10000;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

	else if(unit1 == 'km' && unit2 == 'μm'){

		let conversion = num1*1E+9;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'mm' && unit2 == 'μm'){

		let conversion = num1*1000;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'nm' && unit2 == 'μm'){

		let conversion = num1/1000;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'mi' && unit2 == 'μm'){

		let conversion = num1*1.609E+9;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'yd' && unit2 == 'μm'){

		let conversion = num1*914400;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

	else if(unit1 == 'ft' && unit2 == 'μm'){

		let conversion = num1*304800;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

	else if(unit1 == 'in' && unit2 == 'μm'){

		let conversion = num1*25400;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}


	else if(unit1 == 'ly' && unit2 == 'μm'){

		let conversion = num1/9.223E+18;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

// nm to converter

	else if(unit1 == 'm' && unit2 == 'nm'){

		let conversion = num1*1E+9;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'cm' && unit2 == 'nm'){

		let conversion = num1*1E+7;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

	else if(unit1 == 'km' && unit2 == 'nm'){

		let conversion = num1*1E+12;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'mm' && unit2 == 'nm'){

		let conversion = num1*1E+6;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'μm' && unit2 == 'nm'){

		let conversion = num1*1000;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'mi' && unit2 == 'nm'){

		let conversion = num1*1.609E+12;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'yd' && unit2 == 'nm'){

		let conversion = num1*9.144E+8;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

	else if(unit1 == 'ft' && unit2 == 'nm'){

		let conversion = num1*3.048E+8;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

	else if(unit1 == 'in' && unit2 == 'nm'){

		let conversion = num1*2.54E+7;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}


	else if(unit1 == 'ly' && unit2 == 'nm'){

		let conversion = num1/9.223E+18;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

//	mi to convertion

	else if(unit1 == 'm' && unit2 == 'mi'){

		let conversion = num1/1609;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'cm' && unit2 == 'mi'){

		let conversion = num1/160934;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

	else if(unit1 == 'km' && unit2 == 'mi'){

		let conversion = num1/1.609;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'mm' && unit2 == 'mi'){

		let conversion = num1/1.609E+6;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'μm' && unit2 == 'mi'){

		let conversion = num1/1.609E+9;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'nm' && unit2 == 'mi'){

		let conversion = num1/1.609E+12;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'yd' && unit2 == 'mi'){

		let conversion = num1/1760;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

	else if(unit1 == 'ft' && unit2 == 'mi'){

		let conversion = num1/5280;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

	else if(unit1 == 'in' && unit2 == 'mi'){

		let conversion = num1/63360;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}


	else if(unit1 == 'ly' && unit2 == 'mi'){

		let conversion = num1/5.879E+12;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

//	yd to convert

	else if(unit1 == 'm' && unit2 == 'yd'){

		let conversion = num1*1.094;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'cm' && unit2 == 'yd'){

		let conversion = num1/91.44;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

	else if(unit1 == 'km' && unit2 == 'yd'){

		let conversion = num1*1094;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'mm' && unit2 == 'yd'){

		let conversion = num1/914;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'μm' && unit2 == 'yd'){

		let conversion = num1/914400;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'nm' && unit2 == 'yd'){

		let conversion = num1/9.144E+8;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'mi' && unit2 == 'yd'){

		let conversion = num1*1760;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

	else if(unit1 == 'ft' && unit2 == 'yd'){

		let conversion = num1/3;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

	else if(unit1 == 'in' && unit2 == 'yd'){

		let conversion = num1/36;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}


	else if(unit1 == 'ly' && unit2 == 'yd'){

		let conversion = num1/1.035E+16;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

//	ft to convert

	else if(unit1 == 'm' && unit2 == 'ft'){

		let conversion = num1*3.281;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'cm' && unit2 == 'ft'){

		let conversion = num1/30.48;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

	else if(unit1 == 'km' && unit2 == 'ft'){

		let conversion = num1*3281;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'mm' && unit2 == 'ft'){

		let conversion = num1/305;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'μm' && unit2 == 'ft'){

		let conversion = num1/304800;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'nm' && unit2 == 'ft'){

		let conversion = num1/3.048E+8;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'mi' && unit2 == 'ft'){

		let conversion = num1*5280;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

	else if(unit1 == 'yd' && unit2 == 'ft'){

		let conversion = num1*3;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

	else if(unit1 == 'in' && unit2 == 'ft'){

		let conversion = num1/12;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}


	else if(unit1 == 'ly' && unit2 == 'ft'){

		let conversion = num1/3.104E+16;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

// in to convert

	else if(unit1 == 'm' && unit2 == 'in'){

		let conversion = num1*39.37;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'cm' && unit2 == 'in'){

		let conversion = num1/2.54;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

	else if(unit1 == 'km' && unit2 == 'in'){

		let conversion = num1*39370;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'mm' && unit2 == 'in'){

		let conversion = num1/25.4;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'μm' && unit2 == 'in'){

		let conversion = num1/25400;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'nm' && unit2 == 'in'){

		let conversion = num1/2.54E+7;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'mi' && unit2 == 'in'){

		let conversion = num1*63360;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

	else if(unit1 == 'yd' && unit2 == 'in'){

		let conversion = num1*36;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

	else if(unit1 == 'ft' && unit2 == 'in'){

		let conversion = num1*12;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}


	else if(unit1 == 'ly' && unit2 == 'in'){

		let conversion = num1/3.725E+17;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.innerHTML = `The result is: ${conversion} ${unit2}`;

	}

//	ly to convert

	else if(unit1 == 'm' && unit2 == 'ly'){

		let conversion = num1/9.461E+15;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.lynerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'cm' && unit2 == 'ly'){

		let conversion = num1/9.461E+17;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.lynerHTML = `The result is: ${conversion} ${unit2}`;

	}

	else if(unit1 == 'km' && unit2 == 'ly'){

		let conversion = num1/9.461E+12;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.lynerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'mm' && unit2 == 'ly'){

		let conversion = num1/9.223E+18;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.lynerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'μm' && unit2 == 'ly'){

		let conversion = num1/9.223E+18;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.lynerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'nm' && unit2 == 'ly'){

		let conversion = num1/9.223E+18;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.lynerHTML = `The result is: ${conversion} ${unit2}`;

	}	

	else if(unit1 == 'mi' && unit2 == 'ly'){

		let conversion = num1/5.879E+12;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.lynerHTML = `The result is: ${conversion} ${unit2}`;

	}

	else if(unit1 == 'yd' && unit2 == 'ly'){

		let conversion = num1/1.035E+16;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.lynerHTML = `The result is: ${conversion} ${unit2}`;

	}

	else if(unit1 == 'ft' && unit2 == 'ly'){

		let conversion = num1/3.104E+16;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.lynerHTML = `The result is: ${conversion} ${unit2}`;

	}


	else if(unit1 == 'in' && unit2 == 'ly'){

		let conversion = num1/3.725E+17;
		let num2 = document.getElementById('number2').value = `${conversion}`;
		res.lynerHTML = `The result is: ${conversion} ${unit2}`;

	}

}
