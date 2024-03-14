# Git Commands

## What is a git ?

Git ek open-source version control system hai, jiska use software development me hota hai. Iska basic kaam hota hai code ko track karna, manage karna, aur multiple logon ke saath collaboration ko asaan banana.

Imagine karo ki aap ek team ke saath kaam kar rahe hain, aur aap sabhi ek project par kaam kar rahe hain. Har kisi ke paas apna code hota hai, aur aap sabko apne code changes share karne aur combine karne ki zarurat hoti hai. Git ismein madad karta hai.

Git aapke code ko ek centralized repository me store karta hai, jahan se aap aur aapke team members code ko download kar sakte hain. Har bar jab aap code me changes karte hain, to Git un changes ko track karta hai. Isse aap history dekh sakte hain ki kaun kab kya changes kiya.

Ek aur faida ye hai ki Git allow karta hai ki aap alag-alag branches me kaam kar sakte hain. Har branch alag-alag feature ya bug fix ko represent karta hai. Aap ek branch me kaam karke, bina kisi aur code ko affect kiye, apne changes test kar sakte hain. Jab aapka kaam complete ho jata hai, to aap us branch ko master branch me merge kar sakte hain.

Is tarah se Git aapko code management me help karta hai, aur code ke saath history, collaboration, aur version control provide karta hai. Git ko use karna asaan hota hai, aur ye software developers ke liye ek powerful tool hai.

## How to install Github

- GitHub for Windows
  https://windows.github.com

- GitHub for Mac
  https://mac.github.com

- Git for All Platforms
  http://git-scm.com

- Git distributions for Linux and POSIX systems are available on
  the official Git SCM web site.

## Usefull Git Commands

### git status

Git status ek command hai jo hume batata hai ki hamare current working directory mein kya changes huye hain aur Git un changes ko track kar raha hai ya nahi.

Jab hum git status command ko run karte hain, to Git hamein kuch important information deta hai:

1. Modified files: Ye bataata hai ki kaun se files mein changes huye hain, lekin abhi tak unko commit nahi kiya gaya hai.

2. Staged files: Ye bataata hai ki kaun se files ke changes ko aapne stage kiya hai, taki unhein next commit mein include kiya ja sake.

3. Untracked files: Ye bataata hai ki kaun se files hai jo abhi tak Git ke track mein nahi hai. In files ko aapko stage karna hoga, fir unhein commit karne ke liye.

### git init

git init ek Git repository initialize karne ke liye use hota hai. Jab hum git init command ko kisi project directory mein run karte hain, toh Git us directory mein ek naya Git repository create karta hai.

Is command ko run karne se Git us directory mein kuch hidden folders aur files create karta hai, jinmein Git ki saari information aur history store hoti hai. Ye repository us project ke code ko track karne ke liye hota hai.

Jab aap git init command ko run karte hain, toh aapka project Git ke control mein aa jata hai. Ab aap code mein changes karke unhein commit kar sakte hain, aur Git aapke changes ko track karega aur code ki history maintain karega.

Dhyan rahe, git init sirf ek baar karna hota hai, jab aap ek naya project start kar rahe hote hain. Jab aap ek baar repository create kar chuke hote hain, toh us project directory ke andar .git naam ka ek folder bana ho jata hai, jiske andar Git ki saari information hoti hai.

### git clone

git clone ek Git command hai jo kisi existing Git repository ko copy karne ke liye use hota hai. Is command ki madad se hum ek remote repository se uske complete copy (including code and version history) ko apne local machine par le sakte hain.

Jab hum git clone command ko run karte hain, toh Git us remote repository se code ko download karke ek local copy create karta hai. Is local copy ko hum apne local machine par modify kar sakte hain aur fir usko commit karke changes ko remote repository mein push kar sakte hain.

Yahan <repository_url> remote repository ka URL hota hai, jahaan se aap code ko clone karna chahte hain. Is URL ko aap typically GitHub, GitLab, Bitbucket, ya kisi doosre Git hosting service se obtain kar sakte hain.

for example:

```
git clone https://github.com/username/repositoryname.git
```

Ye command chlane ke bad ek repository ke naam se folder bn jayega fir hum us folder me jake dekh skte hain jo b code is repositoy me hai vo hmare local pr system pr aa jayega.

### git checkout -b branchname

git checkout -b <branchname> ek Git command hai jo hume ek naye branch ko create karke usme switch karne ke liye use hota hai.

Jab hum git checkout -b <branchname> command ko run karte hain, toh Git ek naya branch create karta hai jiska naam <branchname> hota hai, aur us branch mein switch kar deta hai. Is tarah se hum naye branch pe aasani se kaam kar sakte hain.

Yahan <branchname> ek naya branch ka naam hota hai, jise aap khud specify karte hain. Ye branch naam unique hona chahiye aur iss naam se pehle is branch ka existence nahi hona chahiye.

for example agar hum user login form pr kaam kr rhe hain to branch ka naam hoga featue/User-Login-Form

```
git checkout -b feature/User-Login-Form
```

### How to switch to other branch ?

Iske lie hum 2 commands use kr skte hain:

1. git switch branchname: isse jo branchname dia hai us pr switch ho jayenge (new command introduced in Git 2.23.0 (August 2019) to provide a more intuitive and safer way to switch branches.)
2. git checkout branchname: isse bhi die gye branchname pr switch ho jayenge

### git add filename

git add filename command ka use karke aap kisi specific file ke changes ko "staging area" mein add kar sakte hain. Jab aap kisi file mein changes karte hain, toh wo changes "unstaged" hote hain, matlab unhein abhi tak commit ke liye tayyar nahi kiya gaya hai. Lekin git add ki madad se aap un changes ko temporary storage, jo hum kehte hain "staging area," mein daal sakte hain, jahaan se aap unhein agle commit ke liye taiyaar kar sakte hain.

for example

```
git add <filename>
```

Yahan <filename> file ka naam hota hai, jise aap staging area mein add karna chahte hain. Aap wildcards ya patterns ka bhi istemaal karke multiple files ko add kar sakte hain jo ek specific criteria se match karte hain.

Git ke staging area mein changes add karne ke baad, aap us staging area ko commit karke apne changes ko permanent banate hain.

### git diff filename

git diff filename ek Git command hai jo aapke local working directory ke ek file ke changes ko dekhne ke liye use hota hai. Command ka syntax kuch iss tarah hota hai:

```
git diff <filename>
```

Yahan <filename> file ka naam hota hai, jiska aap changes dekhna chahte hain. Jab aap ye command run karte hain, Git aapko batata hai ki us file mein ab tak ke changes kya kya hain, jo abhi tak commit nahi kiye gaye hain.

Ye command aapko file ke unmodified (last commit se ab tak ke changes), modified (staged nahi kiye gaye changes), aur staged (staged kiye gaye changes) sections mein differences dikhaega.

Example ke liye, agar aap file1.txt ka diff dekhna chahte hain, toh aap ye command use karenge:

```
git diff file1.txt
```

Isse aapko file1.txt ke unmodified, modified, aur staged changes ke details milenge. Ye bahut helpful hota hai jab aap apne code mein kiye gaye changes ka review karna chahte hain aur samajhna chahte hain ki aapne kya kya modifications kiye hain, jo abhi tak commit nahi kiye gaye hain.

### git commit -m “massage”

Is command ka use files ko add krne ke bad commit krne ke lie kia jata hai. Commit ka matlab yha yeh hai ki humne jo changes kie hain hum unhe approve kr rhe hain aur git me vo changes add krna chahte hain. Apne changes save krne ke lie commit command ka use kr skte hain. -m ka matlab message hota hai. -m ke bad double quotes me message dete hain

### git push origin branchname

Git push ka matlab humne jo b changes apne local machine pr kie hain unhe git pr upload krna. Git push jab tak ni krenge tab tak vo changes hmari machine pr hi rhenge lekin hum changes ko add vah commit krne ke bad jaise hi git push krenge vo changes repository me push ho jayenge au hm us repository ko Browser me open krke apne changes dekh skte hain. for example yadi humne ek index.html file bnayi hai to use is trah se push krenge

```
git add index.html
git commit -m "Added new html file"
git push origin branchname
```

### git config

git config se hum user ka name and email set krte hain. Aisa islie krte hai kuki jab hm repository me jake commits/changes dekhenge to vha hmara naam show hoga. Isse yeh pta lg jata hai ki ye changes kisne kie hain. Git config ke ye 2 commands use hote hain

```
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

### git reset

git reset command ka use hum tab krte hain jab hume apni repository ko kisi previous commit pr le jana ho. For example manlo aapne local machine pr 2 commit kie hue hain lekin aap apni repository ko firse vaise hi bnana chahte hain jaisi vo 2 commits phle thi to git reset command ka use kr skte hain. Dusra example yeh hai ki jaise humne files add krdi but ab hum unhe commit ni krna chahte to b git reset ka use kr skte hai. Git reset command kafi trah use hota hai jo ki niche explain kia gya hai.

Last commit ko htado but changes remove mat kro

```
git reset --soft HEAD~1
```

Yeh command last commit ko hta dega plus changes bremove kr dega

```
git reset --hard HEAD~1
```

Har commit ki ek sha id hoti hai yadi hm kisi specific commit ko remove krna chahte hai aur us commit ke changes ko remove ni krna chahte to yeh command use kr skte hain:

```
git reset --soft
```

Yeh upar vale commit ki trah hi kaam krega but yeh command changes ko remove b kr dega

```
git reset --hard
```

### git clean -n

`git clean -n` ek Git command hai jo aapko dikhata hai ki "git clean" command ke istemal se kaun kaun se files aur directories delete honge, lekin asal mein unhe delete nahi karta. Isse aap ek preview dekh sakte hain ke bina kuch nuksan pahunche, aapke untracked files kaise delete honge.

Example:

Sochiye aapke Git project mein aapne kuch temporary ya untracked files aur directories create kiye hain. Aap chahte hain ki aapke system se in files ko delete kar diya jaye, lekin pehle dekhna chahte hain ki kya-kya delete hoga. Uske liye aap "git clean -n" istemal karenge:

```
git clean -n
```

Jab aap yeh command run karenge, Git aapko ek list dikhayega jo files aur directories ko represent karega jo delete hone waale hain. Lekin, yaad rahe ki yeh sirf ek preview hai aur files/directories abhi tak delete nahi hue hain. Isse aap safely dekh sakte hain ki kaun se files aur directories delete honge, aur agar aap satisfied hain, toh aap "git clean -f" istemal karke inhe asal mein delete kar sakte hain.

### git clean -d

"git clean -d" ek Git command hai jo untracked directories ko delete karne ke liye istemal hoti hai. Yani ki, yeh command aapke local Git repository se woh directories hata dega jo Git ke dwara track nahi kiye gaye hain.

Example:

Sochiye aapka project folder mein kuch temporary directories hain jo aapne create kiye hain, lekin aap chahte hain ki woh directories delete ho jaayein. Aap "git clean -d" ka istemal karenge:

```
git clean -d
```

Jab aap yeh command run karenge, Git woh untracked directories ko delete kar dega jo aapke project folder mein hain. Yeh directories untracked hain, iska matlab hai ki Git unko track nahi karta hai, isliye Git unhein safely delete kar sakta hai. Dhyan rahe, yeh command permanent delete karega, aur agar aapke directories mein koi important data ho toh woh bhi delete ho sakta hai.

### git clean -f

"git clean -f" ek Git command hai jo untracked files aur directories ko forcefully delete karne ke liye istemal hoti hai. Yani ki, yeh command aapke local Git repository se woh files aur directories hata dega jo Git ke dwara track nahi kiye gaye hain, aur isse aapke file system se permanently delete ho jayenge.

Example:
Sochiye aapka project folder mein kuch temporary files aur directories hain jo aapne create kiye hain, lekin aap chahte hain ki woh delete ho jaayein. Aap "git clean -f" ka istemal karenge:

```
git clean -f
```

Jab aap yeh command run karenge, Git woh untracked files aur directories ko forceful tarike se delete kar dega jo aapke project folder mein hain. Yeh command savdhani se istemal karni chahiye, kyunki woh files aur directories ko permanently delete kar dega, aur agar kuch mahatvapurna data unmein hain toh woh bhi gayab ho jayega. Isliye, is command ka istemal tabhi karen jab aap bilkul sure hain ki aap un files aur directories ko delete karna chahte hain.

### git rm filename

"git rm" ek Git command hai jo Git repository se ek specific file ko remove karta hai. Jab aap is command ka istemal karte hain, tab woh file Git tracking se hata diya jata hai, aur iska matlab hai ki yeh file aapke next commit mein shaamil nahi hoga.

Example:

Sochiye aap ek Git project mein kaam kar rahe hain aur aapke project folder mein ek file hai jiska naam "example.txt" hai. Aap chahte hain ki yeh file Git repository se remove ho jaye. Uske liye aap "git rm" ka istemal karenge:

```
git rm example.txt
```

Is command se "example.txt" file ko Git tracking se remove kar diya jayega. Yani ki, ab yeh file aapke local Git repository aur next commit mein shaamil nahi hoga. Aapke changes ko commit karne ke baad, Git history mein is file ka koi trace nahi rahega.

Aap "git rm" ke sath -f flag ka istemal karke forceful tarike se ek file ko remove kar sakte hain, ya -r flag ka istemal karke directories ko bhi remove kar sakte hain agar woh directories ke sath files hain.

### git log -p -1

"git log -p -1" ek Git command hai jo aapko ek specific commit ke details ke saath us commit ke changes (patch) ko dikhata hai. "-1" argument aapko sirf ek commit tak ki details dikhata hai.

Example:
Agar aap "git log -p -1" likhkar run karte hain, toh aapko current branch ke last commit ki details aur usme kiye gaye changes ka diff (patch) dikhaya jayega. Yeh aapko ek specific commit ke baare mein jankari deta hai, jaise ki kaunsa code badla gaya hai, kis file mein aur kis line mein. Isse aap ek commit ki details ko dekh sakte hain bina poore commit history ko dekhe.

Yeh command aapko ek commit ki changes ko quickly examine karne mein madadgar hoti hai.

### git merge branchname

yadi hum hmari branch me kisi dusri branch ke code apni branch me lana chahte hain to merge command use kr skte hain. Iske lie hume humari current branch pr yeh command chlana hoga aur us branch ka sara code hmari branch me merge ho jayega. merge ka matlab yah hai ki sara code mil jayega aur yadi kisi line/file me koi issue aaya to use hm git ki language me conflict khte hain. Conflict resolve krne ke yeh process hai.

1. Sbse phle jin files me conflicts aaye hain unke bare me pta lgana hai. To iske lie Git khud un sari files ka naam merge krne ke bad btayega ki kin kin files conflicts aye hain.
2. Fir hume vo sari files one to one pick krni hai aur unke conflicts resolve krne hain
3. Conflicts resolve krte time 3 options hote hain.
   - Ya to aap apne changes rkhlo
   - Ya aap jo branchname di hai uske changes rkhoge
   - Ya dono hi changes rkhlo

### git fetch

"Git fetch" ka matlab hai ki aap remote Git repository se naye code changes download kar sakte hain, lekin aapke local code par koi asar nahi padta.

Mann lo aap ek project ke liye Git ka use kar rahe hain aur team ke kuch members ne remote repository me naye code changes kiye hain. Aap "git fetch" command ka use karte hain:

Example:
```git
git fetch
```

Isse, remote repository se latest changes aapke local Git me download ho jate hain, lekin aapke actual code me koi change nahi hota. Aap ab in changes ko dekh sakte hain, compare kar sakte hain, aur decide kar sakte hain ki aap inhe apne local code me merge karenge ya nahi.

Iske baad, agar aap decide karte hain ki changes ko apne code me add karna hai, to aap "git merge" ya "git pull" command ka use kar sakte hain. "Git fetch" aapko remote code changes ko check karke safe tarike se integrate karne me help karta hai.

### git pull

"Git pull" ek command hai jo Git me use hoti hai. Iska kaam hota hai remote repository se latest code changes download karke, aur unhe aapke local working directory me integrate kar dena.

Isse samajhne ke liye, imagine karo ki aap ek project ke liye Git ka use kar rahe hain aur aapka team ek remote Git repository par stored code changes kar raha hai. Aap chahte hain ki aapke local code me un changes ko incorporate karen.

Jab aap "git pull" command ka use karte hain, Git remote repository se latest code changes ko download kar leta hai, aur uske baad aapke local code me merge kar deta hai. Yani ki, aapke local code me ab woh changes aa jate hain.

```git
git pull
```

"Git pull" essentially "git fetch" aur "git merge" command ko ek saath karta hai. Isse aapke local code up-to-date rehta hai, aur aap team ke saath collaboration kar sakte hain.

Isse aapka local code automatic tarike se remote repository ke sath sync ho jata hai, aur aap bina manually changes ko integrate karne ke, fresh code updates ka faida utha sakte hain.

### git stash

"Git stash" ek Git command hai jo aapke local code changes ko temporary storage me daalne me madad karta hai. Jab aap "git stash" use karte hain, to aapke sabhi local changes temporary stash me save ho jate hain, jisse aap later wapas retrieve kar sakte hain.

Iska use case hota hai jab aap local code par kaam kar rahe hain aur unexpectedly aapko kisi urgent bug fix ya kisi aur feature par kaam karna padta hai. Aap "git stash" se apne current changes ko store karke, clean state par aa sakte hain, aur jab aap wapas original kaam par lautte hain, to aap apne stashed changes ko wapas retrieve kar sakte hain.

```git
git stash       // Changes ko stash me store kare
git stash pop   // Stashed changes ko wapas retrieve kare
```
"Git stash" aapko flexibility deta hai ki aap apne local code par kaam karte waqt changes ko temporarily save kar sakte hain, taki aap bina kisi chinta ke doosre kaam par focus kar sakte hain aur baad me wapas aakar apne original changes ko continue kar sakte hain.

### git stash apply

git stash apply ek Git command hai jo stash me save kiye gaye changes ko retrieve karke apply karta hai, lekin stash ko delete nahi karta.

Jab aap git stash apply command ka use karte hain, to aapke stash me save kiye gaye changes wapas aapke current working directory me laaye jaate hain. Aap fir se in changes par kaam kar sakte hain. Stash apply karne ke baad, stash me se changes wapas milte hain lekin stash khud delete nahi hota.

Example:

```git
git stash apply
```

Is command se aap apne stash me save kiye gaye changes ko wapas retrieve kar sakte hain, aur aap unpar further work kar sakte hain. Agar aap chahte hain ki stash bhi delete ho, to git stash pop command ka use kar sakte hain.

### git revert

git revert ek Git command hai jo aapke code repository me ek specific commit ko undo karne me madad karti hai. Ye commit ko delete nahi karta, balki us commit ke changes ko reverse (ya undo) karta hai aur ek new commit create karta hai jo us reversal ko represent karta hai.

Iska use case hota hai jab aapne kisi commit ke changes ko undo karna chahte hain, lekin aap commit history ko maintain karna chahte hain. git revert aapke commit history me ek new commit add karta hai, jise aapke changes ko undo karne ke liye use kiya gaya tha.

```git
git revert <commit-sha>
```

Yahan, <commit-sha> ek specific commit ki SHA (hash) ko represent karta hai, jise aap undo karna chahte hain. git revert us commit ke changes ko reverse karke, ek new commit create karega. Is new commit se aapke code wapas us commit se pahle ke sthiti me aa jayega, lekin commit history me woh specific commit bhi shamil rahega.

Is tarah se, git revert aapko changes ko undo karne me madad karti hai, bina commit history ko disrupt kiye.

### git log

"git log" command aapke repository ki commit history dikhata hai, jisme commit messages, authors, aur commit timestamps jaise details hote hain. Ye project ki history track karne me madadgar hota hai.

```bash
git log
```

### git branch

"git branch" command aapko repository me available sabhi branches ki list dikhata hai. Isse aap dekh sakte hain ki kaun-kis branch mein kaam ho raha hai aur aapka current branch kaunsa hai.

Example:
```bash
git branch
```

### git remote add

Agar aap ek naye remote repository ko add karna chahte hain, to "git remote add" ka use hota hai.
Example:
```bash
git remote add upstream https://github.com/upstream/repo.git
```

### git tag

Repository ke specific version ko tag karna
Example: `git tag v1.0`

### git remote

Remote repository ke sath interaction ke liye
Example: `git remote -v`

### git rebase

Branch ke history ko modify karne ke liye
Example: `git rebase main`

### git blame

File ke each line ko konse commit ne change kiya hai, uska pata lagane ke liye
Example: `git blame file.txt`

### git grep

Repository me search karne ke liye
Example: `git grep "search term"`

### git cherry-pick

Specific commit ko current branch me merge karne ke liye
Example: `git cherry-pick commit-hash`

### git submodule

Submodule ko add, update aur remove karne ke liye
Example: `git submodule add https://github.com/user/repo.git`

### git show

Specific commit ka details (changes and metadata) dikhane ke liye
Example: `git show commit-hash`

### git bisect

Code me bug ka exact point find karne ke liye
Example: `git bisect start`, `git bisect bad`, `git bisect good`

### git remote rm

Remote repository ko local se remove karne ke liye
Example: `git remote rm origin`

### git log --oneline

Short commit history dikhane ke liye
Example: `git log --oneline`

### git log -5

'git log -5' ek Git command hai jo aapko aapke code repository ke commit history ki list dikhata hai, lekin yeh sirf last 5 commits ko dikhata hai.

Example:

Sochiye aap apne Git project mein kaam kar rahe hain aur aapko dekhna hai ki aapne kuch last 5 commits ke sath kya changes kiya hai. Iske liye aap "git log -5" likhenge:

```
git log -5
```

Jab aap yeh command run karenge, Git aapko aapke code repository ke last 5 commits ki ek list dikhayega. Yeh list har commit ke saath uski SHA-1 hash, author ki details, commit date, aur commit message ko include karega. Isse aapko pata chalega ki aapne kis tarah ke changes kiye hain aur aapke code mein kis prakar ka development hua hai.

### git rebase -i

'git rebase -i' ek Git command hai jo interactive rebase ko enable karta hai. Isse aap apne commits ko reorganize aur modify kar sakte hain. Yeh command aapko ek list deta hai jismein aap apne commits ko dekh sakte hain aur unmein changes kar sakte hain, jaise ki commit messages change karne, commits ko squash (merge) karne, ya re-order karne.

Example:

Sochiye aap ek branch pe kaam kar rahe hain aur aapke paas kuch commits hain jo aap ek sath merge karna chahte hain, ya phir aapko kuch commits ko edit karna hai. Iska ek udaharan dekhein:

1. Aap "git log" istemal karke commits ki list dekhein.

2. Fir aap "git rebase -i HEAD~3" likhein, yahan "3" aapke last 3 commits ko represent karta hai. Aap ise apne requirement ke hisab se modify kar sakte hain.

3. Yeh aapko ek interactive text editor kholega, jismein aapko commits ki list dikhegi. Har commit ke saamne ek command hoga, jaise "pick," "reword," "squash," aur "edit."

4. Aap is list mein changes kar sakte hain. Maan lijiye aap kuch commits ko squash (merge) karna chahte hain, toh aap un commits ke saamne "squash" ya "s" likhein.

5. Jab aap changes complete kar lete hain aur editor ko save aur close karte hain, Git aapke commits ko usi order mein modify karega jaise aapne specify kiya hai.

Is tarah se "git rebase -i" aapko commits ko organize aur customize karne mein madad karta hai, jo aapke code history ko safalta se maintain karne mein help karta hai.

### git push --force

'git push --force' ek Git command hai jo aapke local changes ko remote Git repository mein forcefully push karne mein madad karta hai. Isse aap existing remote branch ko overwrite kar sakte hain, lekin isse aapko savdhani se istemal karna chahiye, kyunki yeh command aapke remote repository ke history ko badal sakti hai.

Example:

Sochiye aap ek feature branch my-feature pe kaam kar rahe hain aur usmein kuch changes kiye hain. Lekin aapke team ke dusre members ne bhi my-feature branch pe changes kiye hain aur aap chahte hain ki aapke changes remote repository mein jayein. Ab aap git push karte hain, lekin Git error dikhata hai ki aapke local branch aur remote branch mein conflict hai. Is samay, aap git push --force ka istemal kar sakte hain:

```
git push --force origin my-feature
```

Isse aapke local changes forcefully remote my-feature branch pe push ho jaayenge aur existing remote branch ko overwrite kar denge. Lekin yaad rahe ki isse remote branch ki history badal sakti hai aur dusre team members ke changes ko discard kar dega. Isliye isse istemal karte waqt hamesha savdhani baratni chahiye, aur dusre team members ke saath coordination mein rehna important hai.

### git cherry

'Git cherry' ek Git command hai jo code repository mein kisi branch se dusre branch mein ki gayi changes ko dhundhne aur compare karne mein madad karta hai. Yeh command aapko batata hai ki kis branch mein changes hain jo dusri branch mein shaamil nahi kiye gaye hain. Isse aap asani se dekh sakte hain ki kis branch mein kuch naya kaam hua hai aur dusri branch mein woh changes abhi tak pending hain. Git cherry aapko code ke development aur management mein madadgar hota hai, khaaskar jab aap multiple branches ka istemal kar rahe hote hain.

Maan lo, aapke paas do branches hain - main aur feature. Aap git cherry ka istemal karke dekh sakte hain ki feature branch mein kis tarah ke changes hain jo abhi tak main branch mein shaamil nahi kiye gaye hain.

```
git cherry main feature
```

Isse aapko ek list dikhayi degi jo aise changes ko represent karega jo feature branch mein hain lekin main branch mein nahi hain. Aap phir in changes ko dekhkar decide kar sakte hain ki aapko inhein main branch mein merge karna hai ya nahi.
