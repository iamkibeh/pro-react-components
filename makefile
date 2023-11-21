SHELL:=/bin/bash

roll:
	npm i; npm run rollup

deploy:
	npx auto-version --patch && npm run deploy

push:
	npx auto-version --patch && git add . && git commit -am "auto-version" && git push origin dev && gh pr create --web

story:
	npm run storybook