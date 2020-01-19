# my-react-router

I've worked through the React Router v4: The Complete Guide (https://www.sitepoint.com/react-router-v4-complete-guide/)

The following shows what I did step by step.

Each step can be found on the cooresponding branch.

## step-01-setup
To get started did the following.

Created the react app the same way I have before
* npx create-react-app my-react-router
* cd my-react-router

Removed the .git directory
* rm -rf .git/

Created github repository my-react-router

Hooked up react-redux-tutorial with the github repository
* git init
* git add .
* git commit -m "initial commit"
* git remote add origin https://github.com/gpratte/my-react-router.git
* git push origin master

Make sure the initial react application works. Run
* npm start

should see the default react page in the web browser at http://localhost:3000/

From the redux tutorial "React Router v4: The Complete Guide" https://www.sitepoint.com/react-router-v4-complete-guide/
install react-router-dom
* npm install --save react-router-dom

Push changes
* git add .
* git commit -m "added react-router-dom npm package"
* git push origin master

Make this the first branch
* git checkout -b step-01-setup
* git push origin step-01-setup

Update README.md
* Push to branch 
* git add .
* git commit -m "update readme"
* git push origin step-01-setup

Merge branch to master
git checkout master 
git merge step-01-setup
git push master 
