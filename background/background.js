(function(){
	var selector = document.querySelectorAll('td.entry');
	var icon = ['http://www.meditechsac.com/imagen/check-mark-hi.png', 'https://releasenotes.docs.salesforce.com/en-us/summer16/release-notes/help/images/crossmark_16x16.png', 'http://putlocker.is/images/bullet.gif'];
	var episodes = JSON.parse(localStorage.getItem('episode'));
	var saveEpisode = function(name, elm){
		episodes[name.replace(/\s+/g, '')] = name;
		elm.src = icon[0];
		localStorage.setItem('episode', JSON.stringify(episodes));
	};
	var removeEpisode = function(name, elm){
		delete episodes[name.replace(/\s+/g, '')];
		elm.src = icon[2];
		localStorage.setItem('episode', JSON.stringify(episodes));
	}
	for(var i = 0; i< selector.length; i++){
		var episodeId = selector[i].textContent.replace(/\s+/g, '');
		if (episodes[episodeId] !== undefined) {
     		var el = selector[i].previousSibling.children[0];
	        el.src = icon[0];
     	}
     	selector[i].addEventListener('mouseover', function(){
     		var removeBullet = this.children[0];
     		if(this.nextSibling !== null && removeBullet.src == icon[0]){
     			removeBullet.src = icon[1];
     		}
     	});
     	selector[i].addEventListener('mouseout', function(){
     		var originBullet = this.children[0];
     		if(this.nextSibling !== null && originBullet.src == icon[1]){
     			originBullet.src = icon[0];
     		}
     	});
		selector[i].addEventListener('click', function(){
			var that = this;
			if(that.nextSibling!== null){
				var episodeBullet = that.nextSibling.textContent;
				var bullet = that.children[0];
				if(bullet.src == icon[1]){
					removeEpisode(episodeBullet, bullet);
				}else{
					saveEpisode(episodeBullet, bullet);
				}

			}else{
				var episodeLink = that.textContent;
				var iconSelec = that.parentNode.children[0].children[0];
				saveEpisode(episodeLink, iconSelec);
			}
		});
	}
})();
