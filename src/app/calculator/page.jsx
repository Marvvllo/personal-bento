"use client";
import React, { useEffect } from "react";

const CalculatorPage = () => {
	useEffect(() => {
		// Since we cannot import jQuery directly, we will use plain JavaScript for DOM manipulation.
		const shapeSelect = document.getElementById("shape");
		const calculateBtn = document.getElementById("calculateBtn");
		const resultSpan = document.getElementById("result");
		const shapeInputs = document.querySelectorAll(".shape-inputs");

		const showInputs = selectedShape => {
			shapeInputs.forEach(inputDiv => {
				if (inputDiv.id === `${selectedShape}-inputs`) {
					inputDiv.classList.remove("hidden");
				} else {
					inputDiv.classList.add("hidden");
				}
			});
		};

		const clearInputs = () => {
			document.querySelectorAll('input[type="number"]').forEach(input => {
				input.value = "";
			});
		};

		const calculateArea = () => {
			const selectedShape = shapeSelect.value;
			let area;
			let resultText = "Hasil: ";

			if (selectedShape === "triangle") {
				const base = parseFloat(document.getElementById("base").value);
				const height = parseFloat(document.getElementById("height").value);
				if (base > 0 && height > 0) {
					area = 0.5 * base * height;
					resultText = `Hasil: ${area.toFixed(2)} satuan²`;
				} else {
					resultText = "Hasil: Masukkan nilai yang valid";
				}
			} else if (selectedShape === "rectangle") {
				const length = parseFloat(document.getElementById("length").value);
				const width = parseFloat(document.getElementById("width").value);
				if (length > 0 && width > 0) {
					area = length * width;
					resultText = `Hasil: ${area.toFixed(2)} satuan²`;
				} else {
					resultText = "Hasil: Masukkan nilai yang valid";
				}
			} else if (selectedShape === "circle") {
				const radius = parseFloat(document.getElementById("radius").value);
				if (radius > 0) {
					area = Math.PI * radius * radius;
					resultText = `Hasil: ${area.toFixed(2)} satuan²`;
				} else {
					resultText = "Hasil: Masukkan nilai yang valid";
				}
			}

			resultSpan.textContent = resultText;
		};

		// Event listeners
		shapeSelect.addEventListener("change", e => {
			showInputs(e.target.value);
			resultSpan.textContent = "Hasil: ";
			clearInputs();
		});

		calculateBtn.addEventListener("click", calculateArea);

		// Initial state
		showInputs(shapeSelect.value);

		// Cleanup function for event listeners
		return () => {
			shapeSelect.removeEventListener("change", showInputs);
			calculateBtn.removeEventListener("click", calculateArea);
		};
	}, []);

	return (
		<div className="flex min-h-screen items-center justify-center bg-gray-100">
			<div className="w-full max-w-sm rounded-lg bg-white p-8 shadow-xl">
				<h1 className="mb-6 text-center text-2xl font-bold">Kalkulator Luas</h1>

				<div className="space-y-4">
					{/* Shape selection */}
					<div>
						<label
							htmlFor="shape"
							className="block text-sm font-medium text-gray-700">
							Pilih Bangun Datar
						</label>
						<select
							id="shape"
							className="focus:ring-opacity-50 mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm transition duration-150 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200">
							<option value="triangle">Segitiga</option>
							<option value="rectangle">Persegi Panjang</option>
							<option value="circle">Lingkaran</option>
						</select>
					</div>

					{/* Triangle inputs */}
					<div id="triangle-inputs" className="shape-inputs space-y-4">
						<div>
							<label
								htmlFor="base"
								className="block text-sm font-medium text-gray-700">
								Alas
							</label>
							<input
								type="number"
								id="base"
								className="focus:ring-opacity-50 mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
								placeholder="Masukkan alas"
							/>
						</div>
						<div>
							<label
								htmlFor="height"
								className="block text-sm font-medium text-gray-700">
								Tinggi
							</label>
							<input
								type="number"
								id="height"
								className="focus:ring-opacity-50 mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
								placeholder="Masukkan tinggi"
							/>
						</div>
					</div>

					{/* Rectangle inputs (initially hidden) */}
					<div id="rectangle-inputs" className="shape-inputs hidden space-y-4">
						<div>
							<label
								htmlFor="length"
								className="block text-sm font-medium text-gray-700">
								Panjang
							</label>
							<input
								type="number"
								id="length"
								className="focus:ring-opacity-50 mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
								placeholder="Masukkan panjang"
							/>
						</div>
						<div>
							<label
								htmlFor="width"
								className="block text-sm font-medium text-gray-700">
								Lebar
							</label>
							<input
								type="number"
								id="width"
								className="focus:ring-opacity-50 mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
								placeholder="Masukkan lebar"
							/>
						</div>
					</div>

					{/* Circle inputs (initially hidden) */}
					<div id="circle-inputs" className="shape-inputs hidden space-y-4">
						<div>
							<label
								htmlFor="radius"
								className="block text-sm font-medium text-gray-700">
								Jari-jari
							</label>
							<input
								type="number"
								id="radius"
								className="focus:ring-opacity-50 mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
								placeholder="Masukkan jari-jari"
							/>
						</div>
					</div>

					{/* Calculation button */}
					<button
						id="calculateBtn"
						className="w-full rounded-md bg-blue-600 py-2 font-semibold text-white transition duration-150 ease-in-out hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
						Hitung Luas
					</button>

					{/* Result display */}
					<div className="mt-4 rounded-md bg-gray-100 p-3 text-center text-sm font-medium">
						<span id="result">Hasil: </span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CalculatorPage;
