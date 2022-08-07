#! /bin/bash

# start the ssh-agent in the background
eval "$(ssh-agent -s)"

# add ssh agent related to current account 
ssh-add -K ~/.ssh/id_personal

# test connection
ssh -T git@github-durgakiran

# push / pull changes
if [ "$1" == "push" ]; then
git push
elif [ "$1" == "pull" ]; then
git pull
else
echo "Invalid argument: push or pull expected"
fi
