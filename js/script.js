$(function () {

	$('.hide-block').slideUp();
	$('.read-more').on("click", function () {
		$('.hide-block').slideToggle();

		if ($(this).text() == "Скрывать") {
			$(this).text("Показать еще");
		} else {
			$(this).text("Скрывать");
		}
	})

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

	const modals = document.querySelectorAll('form');

});

