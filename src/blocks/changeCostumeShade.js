(function () {
	return function (num) {
            var idx = this.getCostumeIdx()-1;
            if(!this.costumes.contents[idx]
                .costumeColor) {
                this.costumes.contents[idx].costumeColor = 
                    new Color(0,0,0);
            }
            var hsv = 
                this.costumes.contents[idx].costumeColor.hsv();
            hsv[1] = 1; 
            hsv[2] = Math.max(Math.min(+num || 0, 100), 0) / 100;
            this.costumes.contents[idx].costumeColor.set_hsv.
                apply(this.costumes.contents[idx].costumeColor, hsv);
        };
}());
