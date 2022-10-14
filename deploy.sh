#!/usr/bin/env sh

# 忽略错误
set -e

# 构建
yarn buildforgithub

# 进入待发布的目录
cd docs/.vitepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME
find . -name ".git"
rm -rf ./.git
git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:easyVuejs/vitepress-doc4components.git master:gh-pages

cd -