$(function () {

	$('.hide-block').slideUp(0);
	$('.hide-block-two').slideUp(0);
	$('.hide-block-notification').slideUp(0);
	$('.hide-box').slideUp(0);
	$('.bg-changer').slideUp(0);
	$('.select-achievements').slideUp(0);
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
		$(btn).on("click", function() {
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
});

