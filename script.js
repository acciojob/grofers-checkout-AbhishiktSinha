const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const table = document.querySelector("table");

const getSum = () => {
//Add your code here

	// extract all prices and add them
	let sum = 0;
	const priceList = document.querySelectorAll(".price");

	for(let price of priceList) {
		sum += Number(price.textContent);
	}

	// create or find totalPrice row and cell or add a new row and add a td to it
	let totalPriceRow;
	let totalPriceCell;
	if(document.querySelector(".total-price-row")) {
		totalPriceRow = document.querySelector(".total-price-row");
		totalPrceCell = totalPriceRow.querySelector(".total-price-cell");
	}
	else {
		totalPriceRow = document.createElement("tr");
		totalPriceCell = document.createElement("td");
		
		totalPriceRow.className = "total-price-row";
		totalPriceCell.id = "ans";
		// totalPriceCell.setAttribute("colspan", "2");
		totalPriceRow.appendChild(totalPriceCell);

		table.appendChild(totalPriceRow);
	}

	totalPriceCell.textContent = `${sum}`;	
};

getSumBtn.addEventListener("click", getSum);

