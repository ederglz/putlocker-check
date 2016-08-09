(function(){
	var selector = document.querySelectorAll('td.entry');
	var icon = 'http://www.gia.edu/img/sprites/icon-green-check.png';
	var episodes = JSON.parse(localStorage.getItem('episode'));
	for(var i = 0; i< selector.length; i++){
		var episodeId = selector[i].textContent.replace(/\s+/g, '');
		if (episodes[episodeId] !== undefined) {
	         var el = selector[i].previousSibling.children[0];
	         el.src = icon;
	         el.style.width = '15px';
     	}
		selector[i].addEventListener('click', function(){
			var episode = this.nextSibling.textContent;
			var el = this.children[0];
			episodes[episode.replace(/\s+/g, '')] = episode;
			el.src = icon;
			el.style.width = '15px';
			localStorage.setItem('episode', JSON.stringify(episodes));
		});
	}
})();
