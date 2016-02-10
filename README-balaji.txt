** Balaji Notes

State JSON

https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json


COMPARIOSN url dataprep vs original angular2-seed
https://github.com/balajic/dataprep/compare/master...mgechev:master?diff=split&name=master#diff-02aeed42126d9e2bd48df8e67b14fe98

Fixing the Build issue in ng2-material fork
=============================================
** Install Python 2.7 if you haven't installed before
git clone https://github.com/mgechev/angular2-seed (Original angular2-seed)
delete src folder

copy app folder from ng2-material(https://github.com/justindujardin/angular2-seed/) seed into this and rename it as src
rename bootstrap.ts -> main.ts
Change the "bootstrap.ts" reference in index.html system.import bootstrap => main

Add/modify the following in package.json

"angular2": "2.0.0-beta.0",  (It will say beta 1)
"ng2-material": "0.1.0",   (Latest 0.2.2)

** Install the tsd package
npm install tsd

** Now pull down all the node modules
npm install

npm run build.prod


******************************************************************************************



Rename app folder to src

Backup tools/config.ts
Delete "tools" folder and copy it from https://github.com/mgechev/angular2-seed
Update tools/config.js with your customizations like APP_TITLE, APP_SRC=(Changed from app to src) etc

Overwrite the following files
gulpfile.ts
karma.conf.js
Package.json ??
tsconfig.json

copy tslint.js, typings.js & typings folder
