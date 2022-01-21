#!/bin/env bash

# TODO: 
# * accept commandline args

set -e
shopt -s extglob

date_time=$(date "+%Y%m%d-%H%M%S")
temp_branch="temp_branch_"${date_time}

# colors and text formatting
BOLD="\e[1m"
LIGHTGREEN="\e[92m"
CYAN="\e[96m"
NC="\e[0m"

# perform build
build_local() {
    printf "%b%bStarting Gatsby build %s\n" "$BOLD" "$CYAN" "${date_time}" 
    printf "Installing dependencies using npm%b\n" "$NC"
    npm install 
    printf "%b%bSuccessfully installed dependencies%b\n" "$BOLD" "$LIGHTGREEN" "$NC"
    gatsby build 
    printf "%b%bFinished building%b\n" "$BOLD" "$LIGHTGREEN" "$NC"
}

# copy static files
copy_static_files() {
    printf "%b%bCopying generated files...%b\n" "$BOLD" "$CYAN" "$NC"
    cp -af public/. ../.
    cp CNAME ../CNAME
    printf "%b%bFinished copying%b\n" "$BOLD" "$LIGHTGREEN" "$NC"
}

# create and push to temp branch
push_to_temp() {
    printf "%b%bCreating a temp branch...%b\n" "$BOLD" "$CYAN" "$NC"
    git checkout -b "$temp_branch"
    ignorecontent="code/"
    cd .. && echo "$ignorecontent" > .gitignore
    git rm -r code/ # ignore already committed 'code' dir
    git add .
    git commit -m "Gatsby build ${date_time}"
    git push origin "$temp_branch"
    printf "%b%bSuccessfully pushed changes to temp branch%b\n" "$BOLD" "$LIGHTGREEN" "$NC"
    wait
}

# merge temp branch to main
merge_to_master() {
    printf "%b%bPushing changes to main branch...%b\n" "$BOLD" "$CYAN" "$NC"
    git merge -m "Merging main into $temp_branch" -s ours main
    git checkout main
    git merge "$temp_branch"
    git push origin main
    printf "%b%bSuccessfully merged changes to main branch%b\n" "$BOLD" "$LIGHTGREEN" "$NC"
}

# local cleanup
clean_local() {
    git checkout develop
    printf "%b%bDeleting all local generated files...%b\n" "$BOLD" "$CYAN" "$NC"
    touch blankfile
    rm -vr !(code|.git)
    wait
}

# delete temp branch
clean_remote() {
    printf "%b%bDeleting temp branch...%b\n" "$BOLD" "$CYAN" "$NC"
    git push origin --delete "$temp_branch"
    printf "%b%bFinished cleanup\n" "$BOLD" "$LIGHTGREEN"
    printf "Deployment completed successfully%b\n" "$NC"
}

build_local
copy_static_files
push_to_temp
merge_to_master
clean_local
clean_remote