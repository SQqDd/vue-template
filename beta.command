#!/bin/bash
echo "开始提交"
git add .
git status
echo "请确认是否提交 y/n"
read submit
if [ $submit == 'y' ]; then
git commit -m "feat bash自动提交"
git push
echo "提交成功"
else
echo "终止提交"
fi
