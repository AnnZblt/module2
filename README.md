# BASE COMMANDS FOR GIT
h2 Git lvl-1
***
**git config --global user.name “AnnZblt”** #name/nickname

**git config --global user.email “ur-address@email.com”** #email address

**git config --list #settings**

***
**git config --global core.autocrlf input**

**git config --global core.quotepath off**

**git config --global core.safecrlf warn**

**git config --global init.defaultBranch main**
***

**git init** #repository initialiation 

**git add .** #add all files to track, or choose filename instead

**git commit -m "description"** # m - message - commit changes to repository

**git status** #check status 

**git diff** #check changes/differentions 

**git diff --color-words** #changes colorizer

**git log --oneline**  #посмотреть историю коммитов

**git checkout filename.html/path to file** #backup file

**git push** #push changes to origin
***

**git branch** # check ur position in tree 

**git branch branch.name** # create branch 

**git branch -b branch.name** # create & switch branch to branch.name 

**git checkout branch.name** # select branch in tree 

**git merge branch.name** # union branches with main

**git branch -D branch.name** # D-delete - delete branch 

**git pull** # take changes from remote server 

**git branch -m | -M oldbranch newbranch** #m-move rename branch [more info](https://u.to/hqddHQ)

**clear** # clear terminal


h2 Gif lvl-2
***
**git pull --rebase** # Получение изменений с Github

**git restore index.js** # Восстановление файла

**git log # логи** # Восстановление файла

**git log -p # логи с diff** # Восстановление файла

***

**git blame README.md** # Посмотреть коммиты файла

**git grep строка** # Поиск подстроки в файлах

**git reset** # Откатить изменения до коммита

**git reset --hard HEAD~** # Откатить изменения до коммита

**git commit --amend** # Дописать последний коммит
***

###Путешествия по коммитам

**git checkout <хеш коммита>**

**git checkout main # вернуться**

**git stash** # убрать в stash

**git stash pop** # достать из stash
***

###отменить коммит "ПЕРЕПИСЫВАЕТ ИСТОРИЮ"

**git reset 'HASH commit'** # вернуться к коммиту старому но оставить текущие изменения

**git reset --hard 'HASH commit'** # вернуться к коммиту и удалить все изменения

**git checkout .** 

**git checkout name.file** # откатить изменения в одном файле или каталоге

**git commit -a -m** #сохраняет изменения отслеживаемых файлов и выполняет коммит
