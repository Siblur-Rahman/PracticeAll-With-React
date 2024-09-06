
import Blog from './../../../../shared/Blog';
const GitGitHub = () => {
    return (
        <div className="topic-border">
            <Blog
            id={'Git-GitHub'}
            topic={'notice'}
            code={`
To remove remote origin: git remote rm origin
                `}
             />
            <Blog
            topic={'Git Configure'}
            code={`
To check git version, type 'git --version'
To add name, type 'git config --global user.name "MS Rahman" 
To see name, type 'git config --global user.name
To add name, type git config --global user.email "msrahman048gmail.com"'
To add email, type git config --global user.email' 
                `}
            />
            <Blog
            topic={'Creating, Removing and so on file and folder'}
            code={`
To create Git Folder,type 'mkdir folder's name'
To remove file and folder, type 'rm folder's name''
To remove file,type 'rm folder's name' -f'
To remove file,type 'rm folder's name' -f'
To see files and folders,type 'ls'
To see, which directory I am inside,type 'pwd'
To check the Git statustype 'git status'
To see hidden files and folders,type 'ls -lart'
To change the current working directory,type 'cd folder's name'
To change directory to parent or previous directory, type 'cd ..'
To initialize Git,type 'git init'

To Add New Files, type 'touch file name with extension'
To add the files to a Staging Environment,type 'git add file name with extension'
To add all,type 'git add -A
Note: The shorthand command for git add --all is git add -A
To add all folder to stage,type 'git add .
                `}
            />
            <Blog
            topic={'Git Commit Log'}
            code={`
To view the history of commits for a repository,type 'git log'
To see last commit,,type 'git log –p -1'
To reset,type 'git reset'
To back to Terminal,'press the Q button'
To see different between stage files,type 'git diff'
To compare between last commit and staged,type 'git diff --staged' 
                `}
            />
            <Blog
            topic={'Git Branch'}
            code={`
To see branch,type 'git branch'
To create a new branch,type 'git branch branch name'
To switch to branch,type 'git checkout branch name'
To create a new branch and switch together,type 'git checkout -b branch name'
To Merge branch,type 'git merge branch name -m "message"' 
                `}
            />
            <Blog
            topic={'Push'}
            code={`
For First time :

First Step, Type, git remote add origin link of repository
such as,
git remote add origin git@github.com:Siblur-Rahman/MY-WEB-DEVLOPMENT-NOTES.git

Second step, to see connection Type, git remote -v

Tried step,Generating a new SSH key and adding it to the ssh-agent
To generate SSH Key, Type, ssh-keygen -t rsa -b 4096 -C "msrahman048gmail"
and write a word such as git then Press Enter a few times.

Fourth step, Adding your SSH key to the ssh-agent

Working with SSH key passphrases: eval "$(ssh-agent -s)"

Five step,Adding Identity
Type ssh-add ~/.ssh/id_ed25519 such as ssh-add /e/xampp/htdocs/MY-WEB-DEVLOPMENT-NOTES/git or /f/Current-Courses/project-batch477/git or ssh-add /e/xampp/htdocs/MY-ALL-ISLAMIC-NOTES/git

Six step, Taking public ssh key, Type cat git.pub then to take public ssh key, we have to paste to SSH keys / Add new

Finely, Commit and Push To Commit & Push. For Commit type, git commit -m "message" git push -u origin master
Second time type, git push -u origin master
OR

Type eval "$(ssh-agent -s)"then ssh-add /e/xampp/htdocs/MY-NOTES/gitthen git push -u origin master    
                `}
            />
        <h1> <a href="https://www.youtube.com/watch?v=M-qSAdWFs9c&list=PLSNRR4BKcowBr2KbKZjKBxWb6cFsaFNSo&index=11" target="_blank">1. Git & GitHub Crash Course - Bangla Tutorial</a> </h1>
        <h1><a href="https://www.youtube.com/playlist?list=PLgH5QX0i9K3qAW8DT6I0XOxC23qnA4FL-" target="_blank">2. Git & GitHub complete course Bangla (Beginner to Advanced)Anisul Islam</a></h1>
		<h1><a href="https://www.youtube.com/watch?v=ulQA5tjJark" target="_blank">3. Git & GitHub Crash Course 2023 in English</a></h1>
        </div>
    );
};

export default GitGitHub;