#!/bin/bash
echo "开始创建"
echo "请输入分支名称"
read submit
if [ $submit != '' ]; then
git checkout -b $submit
else
echo "分支名称不能为空"
fi
