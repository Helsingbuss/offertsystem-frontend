#!/bin/bash
# Initiera git repo
git init
git add .
git commit -m "Första commit"
git branch -M main
git remote add origin https://github.com/Helsingbuss/offertsystem-frontend.git
git push -u origin main
