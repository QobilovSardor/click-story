$(function () {

	var grid = $(".grid");
	var filterCheckboxes1 = $(".filters .categories input[type=checkbox]");
	var filterCheckboxes2 = $(".filters .services input[type=checkbox]");
	var filterCheckboxes3 = $(".filters .types input[type=checkbox]");
	var search = $(".filters .search input");
	var qsRegex;
	var buttonFilter1;
	var buttonFilter2;
	var buttonFilter3;

	grid.isotope({
		itemSelector: ".grid-item",
		filter: function () {
			var searchResult = qsRegex ? $(this).text().match(qsRegex) : true;
			var buttonResult1 = buttonFilter1 ? $(this).is(buttonFilter1) : true;
			var buttonResult2 = buttonFilter2 ? $(this).is(buttonFilter2) : true;
			var buttonResult3 = buttonFilter3 ? $(this).is(buttonFilter3) : true;

			return searchResult && buttonResult1 && buttonResult2 && buttonResult3;
		}
	});

	// use value of search field to filter
	var quicksearch = search.keyup(
		debounce(function () {
			qsRegex = new RegExp(quicksearch.val(), "gi");
			grid.isotope();
		}, 200)
	);

	// debounce so filtering doesn't happen every millisecond
	function debounce(fn, threshold) {
		var timeout;
		return function debounced() {
			if (timeout) {
				clearTimeout(timeout);
			}
			function delayed() {
				fn();
				timeout = null;
			}
			timeout = setTimeout(delayed, threshold || 100);
		};
	}

	// checkboxes 1 filteration
	filterCheckboxes1.change(function () {
		var filters = [];
		filterCheckboxes1.filter(":checked").each(function () {
			filters.push(this.value);
		});
		filters = filters.join(", "); //OR
		// filters = filters.join(''); //AND
		buttonFilter1 = filters;
		grid.isotope();
	});

	// checkboxes 2 filteration
	filterCheckboxes2.change(function () {
		var filters = [];
		filterCheckboxes2.filter(":checked").each(function () {
			filters.push(this.value);
		});
		filters = filters.join(", ");
		buttonFilter2 = filters;
		grid.isotope();
	});

	// checkboxes 3 filteration
	filterCheckboxes3.change(function () {
		var filters = [];
		filterCheckboxes3.filter(":checked").each(function () {
			filters.push(this.value);
		});
		filters = filters.join(", ");
		buttonFilter3 = filters;
		grid.isotope();
	});



	// stickiy header
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1) {
			$('header').addClass("sticky");
		}
		else {
			$('header').removeClass("sticky");
		}
	});

	$('.hide-block').slideUp(0);
	$('.hide-block-two').slideUp(0);
	$('.hide-block-notification').slideUp(0);
	$('.hide-box').slideUp(0);
	$('.bg-changer').slideUp(0);
	$('.select-achievements').slideUp(0);
	$('.cart-info').slideUp(0);
	$('.read-more').on("click", function () {
		$('.hide-block').slideToggle();
		if ($(this).text() == "Скрывать") {
			$(this).text("Показать еще");
		} else {
			$(this).text("Скрывать");
		}
	})
	$('.read-more-three').on("click", function () {
		$('.hide-block-two').slideToggle();
		if ($(this).text() == "Скрывать") {
			$(this).text("Показать больше рецензий");
		} else {
			$(this).text("Скрывать");
		}
	});
	$('.tab-pane').each(function (i, e) {
		let btn = e.querySelector('.load-more');
		let hideBlock = e.querySelectorAll('.hide-block-notification');
		$(btn).on("click", function () {
			$(hideBlock).slideToggle();
			if ($(this).text() == "Скрывать") {
				$(this).text("Загрузить еще");
			} else {
				$(this).text("Скрывать");
			}
		});
	})
	$('.change-btn').on("click", function () {
		$('.bg-changer').slideToggle();
		$('.select-achievements').slideUp();
	});
	$('.open-select__achievements').on("click", function () {
		$('.select-achievements').slideToggle();
	});
	$('.select-achievements__close').on("click", function () {
		$('.select-achievements').slideToggle();
	});
	$('.info-box').each(function (i, e) {
		let openBoxBtn = e.querySelector('.open-box');
		let subscribersBox = e.querySelectorAll('.hide-box');
		let closeBtn = e.querySelectorAll('.subscribers-close');
		$(openBoxBtn).on("click", function () {
			$(subscribersBox).slideToggle();
			console.log('salom');
		})
		$(closeBtn).on("click", function () {
			$(subscribersBox).slideUp();
		})
	})

	$('.results').slideUp()
	$('.vote-box__list').each(function (index, element) {
		$(element).on('click', function () {
			$('.vote-box__list').each(function (i, e) {
				if (e = $(this)) {
					$(e).removeClass('active')
				}
			})
			$(this).toggleClass('active')

			$('.results-list').each(function (i, e) {
				if (i === index) {
					$(e).css({
						fontWeight: 700
					})
				} else {
					$(e).css({
						fontWeight: 400
					})
				}
			})

			$('.results').slideDown();
		})
	});

	$('.dots-icon').on('click', function () {
		$('.copy-link').addClass('show');
		setTimeout(function () {
			$('.copy-link').removeClass('show');
		}, 1000);
	});

	$('.cinema-big__box').each(function (i, e) {
		let btn = e.querySelector('.cinema-box__hide-btn');
		let topCol = e.querySelectorAll('.top-col');
		console.log(btn);
		$(btn).on("click", function () {
			$(topCol).slideToggle();
			$(this).toggleClass('rotate')
		})
	})

	$('.change-text__btn').on('click', function () {
		if ($(this).text() == "Отключить") {
			$(this).text("Включить двухфакторную аутентификацию");
		} else {
			$(this).text("Отключить");
		}
	});

	$('.check-box').on('click', function () {
		$(this).toggleClass('active');
	});
	$('.cart-box').each(function (i, e) {
		let btn = e.querySelector('.dots-btn');
		let cartInfo = e.querySelector('.cart-info')
		$(btn).on('click', function () {
			$(cartInfo).slideToggle();
		});
	})

	$('.subscribe-btn').on('click', function () {
		if ($(this).text() == 'Отменить подписку') {
			$(this).text('Подписаться')
		} else {
			$(this).text('Отменить подписку')
		}
		if ($('.crystal-number__price').text() == 'Активна') {
			$('.crystal-number__price').text('390 ₽/мес.')
		} else {
			$('.crystal-number__price').text('Активна')
		}
	});


	const selects = document.querySelectorAll('.select-menu');

	selects.forEach(item => {
		let select = item.querySelector('.select');
		let options = item.querySelectorAll('.option');
		let optionList = item.querySelector('.options-list');
		select.onclick = function () {
			this.classList.toggle('active');
			this.classList.toggle('select_active')
			optionList.classList.toggle('active');
		}

		options.forEach(option => {
			option.onclick = function () {
				options.forEach(a => {
					a.classList.remove('selected');
				})
				this.classList.add('selected');
				let parent = this.parentNode.parentNode;
				let select = parent.querySelector('.select');
				let options_list = parent.querySelector('.options-list');
				select.classList.remove('active');
				select.classList.remove('select_active');
				options_list.classList.remove('active');
				select.querySelector('span').innerHTML = this.innerHTML;
			}
		})
	})

	$(".change-bg-text").on("click", function () {
		var text = $(this).text().replace(/\n/g, "").replace(/\s/g, '');
		if (text === "Опубликоватьисторию") {
			$(this).text("Снять с публикации");
		} else if (text === "Снятьспубликации") {
			$(this).text("Опубликовать историю");
		}
	})
	$('.create-chapter__card').slideUp();
	$('.create-chapter').on('click', function () {
		$('.create-chapter__card').slideToggle();
	})
	$('.click-box').slideUp();
	$('.add-img__box').each(function (idx, el) {
		let clickBox = el.querySelector('.click-box');
		let showBox = el.querySelector('.show-box');
		$(showBox).on('click', function () {
			$(clickBox).slideToggle();
		})
	})
	$(document).mouseup(function (e) {
		var div = $(".click-box");
		if (!div.is(e.target)
			&& div.has(e.target).length === 0) {
			div.css({
				"display": "none",
			});
		}
	});
	jQuery('#datepicker').datepicker({
		format: 'dd-mm-yyyy',
		startDate: '+1d'
	});
	jQuery('#datepicker2').datepicker({
		format: 'dd-mm-yyyy',
		startDate: '+1d'
	});
});



$(document).on("change", ".uploadProfileInput", function () {
	var triggerInput = this;
	var currentImg = $(this).closest(".pic-holder").find(".pic").attr("src");
	var holder = $(this).closest(".pic-holder");
	var wrapper = $(this).closest(".profile-pic-wrapper");
	$(wrapper).find('[role="alert"]').remove();
	triggerInput.blur();
	var files = !!this.files ? this.files : [];
	if (!files.length || !window.FileReader) {
		return;
	}
	if (/^image/.test(files[0].type)) {
		// only image file
		var reader = new FileReader(); // instance of the FileReader
		reader.readAsDataURL(files[0]); // read the local file

		reader.onloadend = function () {
			$(holder).addClass("uploadInProgress");
			$(holder).find(".pic").attr("src", this.result);

			// Dummy timeout; call API or AJAX below
			setTimeout(() => {
				$(holder).removeClass("uploadInProgress");
				$(holder).find(".upload-loader").remove();
				// If upload successful
				if (Math.random() < 0.9) {

					// Clear input after upload
					$(triggerInput).val("");

					setTimeout(() => {
						$(wrapper).find('[role="alert"]').remove();
					}, 3000);
				} else {
					$(holder).find(".pic").attr("src", currentImg);
					$(wrapper).append(
						'<div class="snackbar show" role="alert"><i class="fa fa-times-circle text-danger"></i> There is an error while uploading! Please try again later.</div>'
					);

					// Clear input after upload
					$(triggerInput).val("");
					setTimeout(() => {
						$(wrapper).find('[role="alert"]').remove();
					}, 3000);
				}
			}, 1500);
		};
	} else {
		$(wrapper).append(
			'<div class="alert alert-danger d-inline-block p-2 small" role="alert">Please choose the valid image.</div>'
		);
		setTimeout(() => {
			$(wrapper).find('role="alert"').remove();
		}, 3000);
	}

	// =================================================================
});

try {
	const emotionSwiper = new Swiper('.emotion-swiper', {
		slidesPerView: 6,
		spaceBetween: 8,
		loop: true,
		navigation: {
			nextEl: '.next1',
			prevEl: '.prev1',
		},
	});
} catch (error) {
	
}

try {
	const suitsSwiper = new Swiper('.suits-swiper', {
		slidesPerView: 6,
		spaceBetween: 8,
		loop: true,
		navigation: {
			nextEl: '.next2',
			prevEl: '.prev2',
		},
	});
} catch (error) {
	
}

try {
	const hairstyleSwiper = new Swiper('.hairstyle-swiper', {
		slidesPerView: 6,
		spaceBetween: 8,
		loop: true,
		navigation: {
			nextEl: '.next3',
			prevEl: '.prev3',
		},
	});
} catch (error) {
	
}

try {
	const boxSwiper = new Swiper('.box-swiper', {
		slidesPerView: 9,
		spaceBetween: 8,
		loop: true,
		navigation: {
			nextEl: '.next1',
			prevEl: '.prev1',
		},
	});
	const boxSwiper3 = new Swiper('.box-swiper3', {
		slidesPerView: 9,
		spaceBetween: 8,
		loop: true,
		navigation: {
			nextEl: '.next3',
			prevEl: '.prev3',
		},
	});
	const boxSwiper4 = new Swiper('.box-swiper4', {
		slidesPerView: 9,
		spaceBetween: 8,
		navigation: {
			nextEl: '.next4',
			prevEl: '.prev4',
		},
		grid: {
			rows: 2,
			fill: true,
		},
		speed: 300,
	});
	const boxSwiper5 = new Swiper('.box-swiper5', {
		slidesPerView: 9,
		spaceBetween: 8,
		navigation: {
			nextEl: '.next5',
			prevEl: '.prev5',
		},
		grid: {
			rows: 2,
			fill: true,
		},
		speed: 300,
	});
	const boxSwiper6 = new Swiper('.box-swiper6', {
		slidesPerView: 9,
		spaceBetween: 8,
		navigation: {
			nextEl: '.next6',
			prevEl: '.prev6',
		},
		grid: {
			rows: 2,
			fill: true,
		},
		speed: 300,
	});
	const modalSwiper = new Swiper('.modal-swiper', {
		slidesPerView: 5,
		spaceBetween: 9,
		navigation: {
			nextEl: '.next7',
			prevEl: '.prev7',
		},
		grid: {
			rows: 2,
			fill: true,
		},
		speed: 300,
	});
	const modalSwiper2 = new Swiper('.modal-swiper2', {
		slidesPerView: 5,
		spaceBetween: 9,
		navigation: {
			nextEl: '.next7',
			prevEl: '.prev7',
		},
		loop: true,
		speed: 300,
	});
	const modalSwiper3 = new Swiper('.modal-swiper3', {
		slidesPerView: 5,
		spaceBetween: 9,
		navigation: {
			nextEl: '.next1',
			prevEl: '.prev1',
		},
		loop: true,
		speed: 300,
	});
	const modalSwiper4 = new Swiper('.modal-swiper4', {
		slidesPerView: 2,
		spaceBetween: 9,
		navigation: {
			nextEl: '.next2',
			prevEl: '.prev2',
		},
		loop: true,
		speed: 300,
	});
	
	const boxSwiper2 = new Swiper('.box-swiper2', {
		slidesPerView: 9,
		spaceBetween: 8,
		navigation: {
			nextEl: '.next2',
			prevEl: '.prev2',
		},
		grid: {
			rows: 2,
			fill: true,
		},
		speed: 300,
	});

	
} catch (error) {
	console.log(error);
}
$('.accordion-itemm').each(function (idx, el) {
	let accordionContent = el.querySelector('.accordion-content');
	let accordionHeader = el.querySelector('.accordion-header-box');
	$(accordionHeader).on('click', function () {
		$(accordionContent).slideToggle();
		$(this).toggleClass('active')
	})
})

$('.suits-box.open').on('click', function () {
	$(this).toggleClass('active');
})