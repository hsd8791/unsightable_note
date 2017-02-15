 git 命令行
 $ mkdir learngit
$ cd learngit
$ pwd/Users/michael/learngit
$ git init 
$ ls -ah //显示当前文件

$ git add readme.txt
$ git commit -m "wrote a readme file"
git log
git reflog  //annotation reference log
git checkout  -- filename
git reset HEAD filename

$ ssh-keygen -t rsa -C "youremail@example.com"
## git push -u origin master  
error: src refspec master does not match any. 引起该错误的原因是,目录中没有文件,空目录是不能提交上去的
git remote add origin git@github.com:hsd8791/gitlearn.git
git clone git@github.com:hsd8791/test2016.10.14.git

$ git remote -v
$ git push origin dev

查看分支：git branch
创建分支：git branch <name>
切换分支：git checkout <name>
创建+切换分支：git checkout -b <name>
合并某分支到当前分支：git merge <name>
删除分支：git branch -d <name>


git tag <tagname>
git tag -a <tagname> -m '<message>'   <commit ID>
git tag -s v0.2 -m "signed version 0.2 released" fec145a  私有标签  不懂~~

git show <tagname>
git tag

git push origin <tagname>可以推送一个本地标签；
git push origin --tags可以推送全部未推送过的本地标签；
git tag -d <tagname>可以删除一个本地标签；
git push origin :refs/tags/<tagname>可以删除一个远程标签

git pull 将当前分支的远程库取到本地（不影响本地已经编辑过的内容）
$ git commit -a -m ""          #等价于: $ git commit -am ""

git remote set-url origin URL

git remote rm origin
git remote add origin git@github.com:Liutos/foobar.git


git remote set-branches [--add] <name> <branch>...
git remote set-url [--push] <name> <newurl> [<oldurl>]
git remote set-url --add <name> <newurl>
git remote set-url --delete <name> <url>