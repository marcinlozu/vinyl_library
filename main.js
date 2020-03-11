class Media {
	constructor(title, bandName, year, genere, isFavorite) {
		this._title = title;
		this._bandName = bandName;
		this._year = year;
		this._genere = genere;
		this._isFavorite = false;
	}

	get title() {
		return this._title;
	}

	get bandName() {
		return this._bandName;
	}

	get year() {
		return this._year;
	}

	get genere() {
		return this._genere;
	}

	set isFavorite(isFav) {
		this._isFavorite = isFav;
	}

	toggleFavorite() {
		this.isFavorite = !this.isFavorite;
	}

}
