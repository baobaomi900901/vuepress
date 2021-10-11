---
title: macOS 生成 SSH key 在 GitHub 中使用
sidebarDepth: 0
---
## macOS 生成 SSH key 在 GitHub 中使用

### 1.检查 SSH key 是否存在
终端输入: 
```cmd
ls -al ~/.ssh
```
如果没有, 会显示:
```cmd
No such file or directory
```
如果有, 会显示:
```cmd
total 40
drwx------   7 [Username]  staff   224 10 11 09:08 .
drwxr-xr-x+ 89 [Username]  staff  2848 10 11 09:37 ..
-rw-------@  1 [Username]  staff  1876  3 23  2020 github_rsa
-rw-r--r--@  1 [Username]  staff   407  3 23  2020 github_rsa.pub
-rw-------   1 [Username]  staff  2655 10 11 09:00 id_rsa
-rw-r--r--@  1 [Username]  staff   579 10 11 09:00 id_rsa.pub
-rw-r--r--   1 [Username]  staff  1989 10 11 00:14 known_hosts
```
ps: `[Username]` 是电脑的用户名, 如果有 `id_rsa` 和 `id_rsa.pub` 可以跳转到第四步.
<br>

### 2.生成新的 SSH key
终端输入: 
```cmd
ssh-keygen -t rsa -C "your_email@example.com"
```
ps: `your_email@example.com` 替换成 githu 注册时的邮箱.

成功后显示:
```cmd
> Generating public/private rsa key pair.
> Enter file in which to save the key (/Users/[Username]/.ssh/id_rsa):
```
接下来会提示保存 `.ssh/id_rsa` 的路径，这里直接 enter.
```cmd
> Created directory '/Users/[Username]/.ssh'.
> Enter passphrase (empty for no passphrase):
```
提示输入 `passphrasem` , 编辑一个密码输入一次, 校验一次, 下一步会用到.

成功后显示:
```cmd
> Your identification has been saved in /Users/xxx/.ssh/id_rsa.
> Your public key has been saved in /Users/xxx/.ssh/id_rsa.pub.
> The key fingerprint is:
> 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48 your_email@example.com
> The key's randomart image is:
//(后面图形省略）
```
<br>

### 3.添加 key 到 SSH
终端输入: 
```cmd
ssh-add ~/.ssh/id_rsa
```
ps: 这时会要求输入 `passphrase`, 输入第二步中填写的 `passphrase`.


### 4.在 github 中添加 SSH key
打开 `Finder` , `Command`+`Shift`+`G`, 输入路径:
> /Users/[Username]/.ssh/

找到 `id_rsa.pub` 文件, 右键选择打开方式 `文本编辑.app`, 复制所有内容.
<br>

接着登录 github , 打开 Settings-->SSH keys-->Add SSH key:

github 可以拥有多个 SSH key, `title` 是给这个 key 命名.

把 `id_rsa.pub` 中的内容粘贴到 key 中.

### 5.测试 SSH key 是否正常
终端输入: 
```cmd
ssh git@github.com
```
成功后显示: 
```cmd
Hi your_name! You've successfully authenticated, but GitHub does not provide shell access.
Connection to github.com closed.
```


--- end ---