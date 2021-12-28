#!/bin/sh

date_time=`date "+%Y%m%d-%H%M%S"`
temp_branch="temp_branch_"${date_time}
echo "Starting Gatsby build ${date_time}"
gatsby build
echo "Finished building, copying generated files..."
cp -af public/. ../.
echo "Finished copying, creating a new branch..."
git checkout -b $temp_branch
ignorecontent="code/"
cd .. && echo "$ignorecontent" > .gitignore
# TODO: ignore already committed 'code' dir
git add .
git commit -m "Gatsby build ${date_time}"
git push origin $temp_branch
echo "Pushed changes to temp branch..."
git checkout gatsby
# TODO: merge temp branch to main here
echo "Deleting temp branch..."
git push origin --delete $temp_branch
echo "Deleted temp branch, deleting all local generated files"
shopt -s extglob
rm ".gitignore"
rm -vr !(code|.git)