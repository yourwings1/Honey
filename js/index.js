const _cartElement = document.getElementById("cart");

const toggleVisibleCart = (isVisible) => {
	if (isVisible) {
		_cartElement.classList.remove("visually-hidden");
	} else {
		_cartElement.classList.add("visually-hidden");
	}
};

// Открыть корзину

document.getElementById("cartOpenBtn").addEventListener("click", function () {
	toggleVisibleCart(true);
});

// Закрыть корзину

document.getElementById("cartBackBtn").addEventListener("click", function () {
	toggleVisibleCart(false);
});

document.getElementById("cartPayBtn").addEventListener("click", function () {
	toggleVisibleCart(false);
});

// Массив продуктов

const products = [
	{ img: "./img/product-1.svg", name: "HEATHER HONEY", price: 10.0 },
	{ img: "./img/product-2.svg", name: "JARRAH HONEY", price: 15.0 },
	{ img: "./img/product-3.svg", name: "LINDEN HONEY", price: 20.0 },
];

const cart = [];

const catalog = document.getElementById("catalog");

// Метод наполнения каталога

const initCatalog = (products) => {
	catalog.textContent = "";
	for (let product of products) {
		catalog.insertAdjacentHTML(
			"beforeend",
			`
			<div class="product">
				<img
					src="${product.img}"
					lt="/"
					class="product__image"
					width="400"
					height="400"
					/>
				<h2 class="product__header">
					${product.name}
				</h2>
				<span class="product__price">${product.price} $</span>
				<p class="product__description">
					Lorem ipsum dolor sit amet, consectetur adipiscing
					elit, sed do eiusmod tempor incididunt.
				</p>
				<div class="product__cart">
					<svg
						width="20.995117"
						height="18.276169"
						viewBox="0 0 20.9951 18.2762"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
					>
						<path
							id="Vector"
							d="M18.9585 3.39082L16.3364 3.39082L13.2598 0.292496C12.8481 -0.0975037 12.2202 -0.0975037 11.8081 0.292496C11.4185 0.704163 11.4185 1.3325 11.8081 1.74416L13.4551 3.39082L7.54004 3.39082L9.18652 1.74416C9.57666 1.3325 9.57666 0.704163 9.18652 0.292496C8.79688 -0.0975037 8.14648 -0.0975037 7.75684 0.292496L4.6582 3.39082L2.03662 3.39082C0.910156 3.39082 0 4.30083 0 5.42749L0 8.46083C0 9.02417 0.455078 9.47916 1.01855 9.47916L1.49512 9.47916L2.4917 15.8925C2.68652 17.2792 3.87842 18.2975 5.28662 18.2758L15.73 18.2758C17.1167 18.2975 18.3081 17.2792 18.5034 15.8925L19.5 9.47916L19.9766 9.47916C20.54 9.47916 20.9951 9.02417 20.9951 8.46083L20.9951 5.42749C20.9951 4.30083 20.085 3.39082 18.9585 3.39082ZM2.03662 7.44249L2.03662 5.42749L18.9585 5.42749L18.9585 7.44249L2.03662 7.44249ZM17.4419 9.47916L16.5098 15.5892C16.4448 15.9792 16.1201 16.2608 15.73 16.2608L5.28662 16.2608C4.89648 16.2608 4.5498 15.9792 4.50684 15.5892L3.55322 9.47916L17.4419 9.47916ZM6.78174 13.8775L6.78174 11.8625C6.78174 11.2992 7.23682 10.8442 7.7998 10.8442C8.3418 10.8442 8.79688 11.2992 8.79688 11.8625L8.79688 13.8775C8.79688 14.4408 8.3418 14.8958 7.7998 14.8958C7.23682 14.8958 6.78174 14.4408 6.78174 13.8775ZM11.5049 13.8775L11.5049 11.8625C11.5049 11.2992 11.96 10.8442 12.5234 10.8442C13.0864 10.8442 13.5415 11.2992 13.5415 11.8625L13.5415 13.8775C13.5415 14.4408 13.0864 14.8958 12.5234 14.8958C11.96 14.8958 11.5049 14.4408 11.5049 13.8775Z"
						/>
					</svg>
					<button class="product__button" data-product="
					${product.name}
					">
						Add to <br />
						cart
					</button>
				</div>
			</div>
			`
		);
	}

	document.querySelectorAll(".product__button").forEach((x) => {
		x.addEventListener("click", function () {
			const productName = this.dataset.product.trim();
			const product = products.find((p) => p.name == productName);
			cart.push(product);
		});
	});
};

initCatalog(products);

//Добавление в корзину

// const btnCart = document.querySelectorAll(".product__button");
// const cartElement = document.querySelectorAll(".cart__body-item");

// btnCart.forEach((x) => {
// 	x.addEventListener("click", function () {
// 		cartElement.forEach((element) => {
// 			element.textContent = "";
// 			element.insertAdjacentHTML(
// 				"beforeend",
// 				`
// 				<div class="cart__body-product">
// 							<img
// 								src="${products.img}"
// 								alt="/"
// 								class="cart__body-image"
// 								width="300"
// 								height="300"
// 							/>
// 							<div class="cart__body-group">
// 								<h3 class="cart__body-title">
// 								${products.name}
// 								</h3>
// 								<p class="cart__body-price">10.00 $</p>
// 							</div>
// 						</div>
// 						<div class="cart__body-button__group">
// 							<button class="cart__body-button button button-pls">
// 								+
// 							</button>
// 							<input
// 								type="text"
// 								class="cart__body-input"
// 								value="0"
// 							/>
// 							<button class="cart__body-button button button-mns">
// 								-
// 							</button>
// 						</div>
// 				`
// 			);
// 		});
// 	});
// });

//Счетчик

const plsBtn = document.querySelectorAll(".button-pls");
const mnsBtn = document.querySelectorAll(".button-mns");
const input = document.querySelectorAll(".cart__body-input");

function counterEvent(input, newValue) {
	input.value = newValue;
}

function addCart(input) {
	let counter = parseInt(input.value) || 0;
	counter++;
	counterEvent(input, counter);
}

function removeCart(input) {
	let counter = parseInt(input.value) || 0;
	counter = Math.max(counter - 1, 0);
	counterEvent(input, counter);
}

function inputEvent(input) {
	input.addEventListener("input", function () {
		let inputValue = parseInt(input.value) || 0;
		if (isNaN(inputValue) || inputValue < 0) {
			inputValue = 0;
		}
		counterEvent(input, inputValue);
	});
}

plsBtn.forEach((plsBtn, index) => {
	plsBtn.addEventListener("click", function () {
		addCart(input[index]);
	});
});

mnsBtn.forEach((mnsBtn, index) => {
	mnsBtn.addEventListener("click", function () {
		removeCart(input[index]);
	});
});

input.forEach((input) => {
	inputEvent(input);
});

// plsBtn.addEventListener("click", function () {
// 	let counter = parseInt(input.value);
// 	counter++;
// 	counterEvent(counter);
// });

// mnsBtn.addEventListener("click", function () {
// 	let counter = parseInt(input.value);
// 	counter = Math.max(counter - 1, 0);
// 	counterEvent(counter);
// });
// let counterStarted = 1;
// let counter = 1;

// if ((counter = parseInt(input.value))) {
// 	plsBtn.addEventListener("click", function () {
// 		counter++;
// 		input.value = counter;
// 	});
// 	mnsBtn.addEventListener("click", function () {
// 		counter--;
// 		input.value = counter;
// 	});
// } else if (counter) {
// 	plsBtn.addEventListener("click", function () {
// 		counter++;
// 		input.value = counter;
// 	});
// 	mnsBtn.addEventListener("click", function () {
// 		counter--;
// 		input.value = counter;
// 	});
// }

// plsBtn.addEventListener("click", function () {
// 	counter++;
// 	input.value = counter;
// });

// const cartForm = document.getElementById("cartForm");
// const cartProductList = document.querySelector(".cart__body-list");

// for (let product of cart) {
// 	cartProductList.insertAdjacentHTML(
// 		"beforeend",
// 		`
// 		<li class="cart__body-item">
// 						<div class="cart__body-product">
// 							<img
// 								src="${product.img}"
// 								alt="/"
// 								class="cart__body-image"
// 								width="300"
// 								height="300"
// 							/>
// 							<div class="cart__body-group">
// 								<h3 class="cart__body-title">
// 									${product.name}
// 								</h3>
// 								<p class="cart__body-price">${product.price}0 $</p>
// 							</div>
// 						</div>
// 						<div class="cart__body-button__group">
// 							<button class="cart__body-button button button-pls">
// 								+
// 							</button>
// 							<input
// 								type="text"
// 								class="cart__body-input
// 								placeholder = "1"
// 							/>
// 							<button class="cart__body-button button button-mns">
// 								-
// 							</button>
// 						</div>
// 					</li>
// 		`
// 	);
// }

// Массив продуктов из корзины

// const cart = [];

// const catalog = document.getElementById("catalog");

// function addCart(productId) {
// 	cart.push(productId);
// 	updateCartDisplay();
// }
