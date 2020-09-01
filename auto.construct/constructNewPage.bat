SET /p newPage="Type the name of your new HTML page (minus .html): "
cd ..
cd html
type nul > %newPage%.html
cd ..
cd scss
type nul > %newPage%-styles.scss
cd ..
cd js
type nul > standard-%newPage%.js
type nul > jqery-%newPage%.js
cd ..
cd auto.render
echo sass C:\Users\knoxb\Desktop\github-page\scss\%newPage%-styles.scss C:\Users\knoxb\Desktop\github-page\build\current-build-%newPage%.css > compile-%newPage%.bat
echo call compile-%newPage%.bat >> #EXECUTE_DEPLOY_SITE.bat



