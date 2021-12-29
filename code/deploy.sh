#!/bin/sh
set -e
shopt -s extglob

date_time=`date "+%Y%m%d-%H%M%S"`
temp_branch="temp_branch_"${date_time}

# perform build
function build_local() {
    echo "Starting Gatsby build ${date_time}"
    echo "Installing dependencies using npm"
    npm install 
    echo "Successfully installed dependencies"
    gatsby build 
}

# copy static files
function copy_static_files() {
    echo "Finished building, copying generated files..."
    cp -af public/. ../.
    cp CNAME ../CNAME
}

# create and push to temp branch
function push_to_temp() {
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
}


# merge temp branch to main
function merge_to_master() {
    echo "Pushing changes to main branch..."
    git merge -m "Merging main into $temp_branch" -s ours main
    git checkout main
    git merge $temp_branch
    git push origin main
}

# local cleanup
function clean_local() {
    git checkout deployment-script
    echo "Deleted temp branch, deleting all local generated files..."
    rm -vr !(code|.git)
    wait
}

# delete temp branch
function clean_remote() {
    echo "Deleting temp branch..."
    git push origin --delete $temp_branch
    echo "Finished deployment"
}

build_local
copy_static_files
push_to_temp
merge_to_master
clean_local
clean_remote