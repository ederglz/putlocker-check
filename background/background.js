(function(){
	var selector = document.querySelectorAll('td.entry');
	var icon = ['http://www.meditechsac.com/imagen/check-mark-hi.png'];
	var episodes = JSON.parse(localStorage.getItem('episode'));
	var saveEpisode = function(name, elm){
		episodes[name.replace(/\s+/g, '')] = name;
		elm.src = icon[0];
		localStorage.setItem('episode', JSON.stringify(episodes));
	}
	for(var i = 0; i< selector.length; i++){
		var episodeId = selector[i].textContent.replace(/\s+/g, '');
		if (episodes[episodeId] !== undefined) {
     		var el = selector[i].previousSibling.children[0];
	        el.src = icon[0];
     	}
		selector[i].addEventListener('click', function(){
			var that = this;
			if(that.nextSibling!== null){
				var episodeBullet = that.nextSibling.textContent;
				var bullet = that.children[0];
				saveEpisode(episodeBullet, bullet);
			}else{
				var episodeLink = that.textContent;
				var icon = that.parentNode.children[0].children[0];
				saveEpisode(episodeLink, icon);
			}
		});
	}
})();
