#!/bin/sh

# TODO: 
# * add colors to loggers
# * handle cleanup/local rollback incase of failure
# * optimize merge to master

set -e
shopt -s extglob

date_time=`date "+%Y%m%d-%H%M%S"`
temp_branch="temp_branch_"${date_time}

# colors and text formatting
BOLD="\e[1mBold"
RED="\e[31m"
LIGHTGREEN="\e[92m"
CYAN="\e[96m"
BOLDGREEN="\e[1;${GREEN}m"
ITALICRED="\e[3;${RED}m"
NC="\e[0m"

# perform build
function build_local() {
    echo "${BOLD}${CYAN}Starting Gatsby build ${date_time}${NC}"
    echo "${BOLD}${CYAN}Installing dependencies using npm${NC}"
    npm install 
    echo "${BOLD}${LIGHTGREEN}Successfully installed dependencies${NC}"
    gatsby build 
    echo "${BOLD}${LIGHTGREEN}Finished building${NC}"
}

# copy static files
function copy_static_files() {
    echo "${BOLD}${CYAN}Copying generated files...${NC}"
    cp -af public/. ../.
    cp CNAME ../CNAME
    echo "${BOLD}${LIGHTGREEN}Finished copying${NC}"
}

# create and push to temp branch
function push_to_temp() {
    echo "${BOLD}${CYAN}Creating a new branch...${NC}"
    git checkout -b $temp_branch
    ignorecontent="code/"
    cd .. && echo "$ignorecontent" > .gitignore
    git rm -r code/ # ignore already committed 'code' dir
    git add .
    git commit -m "Gatsby build ${date_time}"
    git push origin $temp_branch
    echo "${BOLD}${LIGHTGREEN}Successfully pushed changes to temp branch${NC}"
    wait
}


# merge temp branch to main
function merge_to_master() {
    echo "${BOLD}${CYAN}Pushing changes to main branch...${NC}"
    git merge -m "Merging main into $temp_branch" -s ours main
    git checkout main
    git merge $temp_branch
    git push origin main
    echo "${BOLD}${LIGHTGREEN}Successfully pushed changes to main branch${NC}"
}

# local cleanup
function clean_local() {
    git checkout develop
    echo "${BOLD}${CYAN}Deleted temp branch, deleting all local generated files...${NC}"
    touch blankfile
    rm -vr !(code|.git)
    wait
}

# delete temp branch
function clean_remote() {
    echo "${BOLD}${CYAN}Deleting temp branch...${NC}"
    git push origin --delete $temp_branch
    echo "${BOLD}${LIGHTGREEN}Finished cleanup"
    echo "Deployment completed successfully${NC}"
}

build_local
copy_static_files
push_to_temp
merge_to_master
clean_local
clean_remote