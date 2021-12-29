#!/bin/sh

date_time=`date "+%Y%m%d-%H%M%S"`
temp_branch="temp_branch_"${date_time}

# perform build
echo "Starting Gatsby build ${date_time}"
npm install
gatsby build

# copy files
echo "Finished building, copying generated files..."
cp -af public/. ../.
cp CNAME ../CNAME

# create and push to temp branch
echo "Finished copying, creating a new branch..."
git checkout -b $temp_branch
ignorecontent="code/"
cd .. && echo "$ignorecontent" > .gitignore
git rm -r code/ # ignore already committed 'code' dir
git add .
git commit -m "Gatsby build ${date_time}"
git push origin $temp_branch
echo "Pushed changes to temp branch"
wait

# merge temp branch to main
echo "Pushing changes to main branch..."
git merge -m "Merging main into $temp_branch" -s ours main
git checkout main
git merge $temp_branch
git push origin main

# local cleanup
git checkout gatsby
echo "Deleted temp branch, deleting all local generated files..."
shopt -s extglob
rm -vr !(code|.git)
wait

# delete temp branch
echo "Deleting temp branch..."
git push origin --delete $temp_branch
echo "Finished deployment"