all: letter.css

letter.css: letter.scss
	sass --update letter.scss:letter.css
