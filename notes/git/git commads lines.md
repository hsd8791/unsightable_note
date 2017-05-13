 git ÃüÁîÐÐ
 $ mkdir learngit
$ cd learngit
$ pwd/Users/michael/learngit
$ git init 
$ ls -ah //ÏÔÊ¾µ±Ç°ÎÄ¼þ

$ git add readme.txt
$ git commit -m "wrote a readme file"
git log
git reflog  //annotation reference log
git checkout  -- filename
git reset HEAD filename

$ ssh-keygen -t rsa -C "youremail@example.com"
## git push -u origin master  
error: src refspec master does not match any. ÒýÆð¸Ã´íÎóµÄÔ­ÒòÊÇ,Ä¿Â¼ÖÐÃ»ÓÐÎÄ¼þ,¿ÕÄ¿Â¼ÊÇ²»ÄÜÌá½»ÉÏÈ¥µÄ
git remote add origin git@github.com:hsd8791/gitlearn.git
git clone git@github.com:hsd8791/test2016.10.14.git

$ git remote -v
$ git push origin dev

²é¿´·ÖÖ§£ºgit branch
´´½¨·ÖÖ§£ºgit branch <name>
ÇÐ»»·ÖÖ§£ºgit checkout <name>
´´½¨+ÇÐ»»·ÖÖ§£ºgit checkout -b <name>
ºÏ²¢Ä³·ÖÖ§µ½µ±Ç°·ÖÖ§£ºgit merge <name>
É¾³ý·ÖÖ§£ºgit branch -d <name>


git tag <tagname>
git tag -a <tagname> -m '<message>'   <commit ID>
git tag -s v0.2 -m "signed version 0.2 released" fec145a  Ë½ÓÐ±êÇ©  ²»¶®~~

git show <tagname>
git tag

git push origin <tagname>¿ÉÒÔÍÆËÍÒ»¸ö±¾µØ±êÇ©£»
git push origin --tags¿ÉÒÔÍÆËÍÈ«²¿Î´ÍÆËÍ¹ýµÄ±¾µØ±êÇ©£»
git tag -d <tagname>¿ÉÒÔÉ¾³ýÒ»¸ö±¾µØ±êÇ©£»
git push origin :refs/tags/<tagname>¿ÉÒÔÉ¾³ýÒ»¸öÔ¶³Ì±êÇ©

git pull ½«µ±Ç°·ÖÖ§µÄÔ¶³Ì¿âÈ¡µ½±¾µØ£¨²»Ó°Ïì±¾µØÒÑ¾­±à¼­¹ýµÄÄÚÈÝ£©
$ git commit -a -m ""          #µÈ¼ÛÓÚ: $ git commit -am ""

git remote set-url origin URL

git remote rm origin
git remote add origin git@github.com:Liutos/foobar.git


git remote set-branches [--add] <name> <branch>...
git remote set-url [--push] <name> <newurl> [<oldurl>]
git remote set-url --add <name> <newurl>
git remote set-url --delete <name> <url>