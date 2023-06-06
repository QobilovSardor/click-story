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