const terminal = document.getElementById('terminal');
const output = document.getElementById('output');
const input = document.getElementById('commandInput');
const prompt = document.getElementById('prompt').textContent;

const portfolioLinks = `
    <ul>
        <li><a href="?p=doubleyou" class="page-link">DoubleYou</a></li>
        <li><a href="?p=customsearch" class="page-link">CustomSearch</a></li>
        <li><a href="?p=refreshbooru" class="page-link">refreshBooru</a></li>
        <li><a href="?p=socianonet" class="page-link">Socianonet</a></li>
        <li><a href="?p=genshinlauncher" class="page-link">GenshinLauncher</a></li>
        <li><a href="?p=ngoldprojects" class="page-link">NGOldProjects</a></li>
        <li><a href="https://gist.github.com/TheFunnyDay/0d027d474fa8d0e4ad870cdf04085315" target="_blank">Danbooru Downloader</a></li>
        <li><a href="https://gist.github.com/TheFunnyDay/56ea7be335483f8d7284fdec0f924ca7" target="_blank">Pixiv-remove-bookmarks</a></li>
    </ul>
    <p style="color: red; list-style: none"><a href="?p=main" style="color: red; text-decoration: none" class="page-link">Click here or input "start" for back to main</a></p>
`;

const defaultHeaderText = ` 
        <p>Umm... hi?</p>
        <p>My name is Nikita aka TheFunnyDay</p>
        <p>I'm a web-developer, trying to become a full-stack developer.</p>
        <p>sooo... check this <a href="https://www.youtube.com/watch?v=W79Ct5YqJyM" target="_blank">*click here*</a></p>
        
        <p class="linksToSocial"><a href="https://t.me/TheFunnyDay" style="color: #6497D3">TELEGRAM</a> <a href="https://github.com/TheFunnyDay" style="color: white"><span style="color: white">GIT</span><span style="color: #909090">HUB</span></a></p>
    `;

const pages = {
    main: `
        <header class='consoleHeader'>
            <img src='src/img/pixelLogo.png'/>
            <div class='consoleHeaderText'>
                ${defaultHeaderText}
            </div>
        </header>
        <main class='consoleBody'>
            <div class="consoleText">
                <ul>
                    <li><a href="?p=portfolio" class="page-link">Project’s portfolio</a></li>
                    <li><a href="?p=game" class="page-link">Mini-game</a></li>
                    <li><a href="?p=commandline" class="page-link">Open command line</a></li>
                </ul>    
                <p>For help type "help" below</p>
            </div>    
        </main>`,
    portfolio: `
        <header class='consoleHeader'>
            <img src='src/img/pixelLogo.png'/>
            <div class='consoleHeaderText'>
                ${defaultHeaderText}
            </div>
        </header>
        <main class='consoleBody'>
            <div class="consoleText">
                ${portfolioLinks}
            </div>    
        </main>`,
    doubleyou: `
        <header class='consoleHeader'>
            <img src='src/img/doubleyou.png'/>
            <div class='consoleHeaderText'>
                <p>DoubleYou is a project that utilizes the concept of microblogs (short messages), similar to Twitter (X) or Threads.</p>
                <p>It was developed as a diploma project for college using Nuxt3 and Supabase.</p>
                <p>Repository link: <a href="https://github.com/TheFunnyDay/DoubleYou" target="_blank">https://github.com/TheFunnyDay/DoubleYou</a></p>
                <p>If the repository is closed for some reason, you can view the project screenshots here: <a href="https://ibb.co/album/cxNfBm" target="_blank">https://ibb.co/album/cxNfBm</a></p>

            </div>
        </header>
        <main class='consoleBody'>
            <div class="consoleText">
                ${portfolioLinks}
            </div>    
        </main>`,
    customsearch: `
        <header class='consoleHeader'>
            <img src='src/img/customsearch.png'/>
            <div class='consoleHeaderText'>
                <p>"CustomSearch" is a simple project aimed at improving the user experience in a browser's new tab.</p>
                <p>The project is developed using vanilla JavaScript with webpack.</p>
                <p>To set this project as the browser's "new tab," you'll need to download a browser extension (such as "Custom New Tab") and set this link (<a href="https://customsearch.vercel.app/" target="_blank">https://customsearch.vercel.app/</a>) as the default for the new tab.</p>
            </div>
        </header>
        <main class='consoleBody'>
            <div class="consoleText">
                ${portfolioLinks}
            </div>    
        </main>`,
    refreshbooru: `
        <header class='consoleHeader'>
            <img src='src/img/refreshbooru.png'/>
            <div class='consoleHeaderText'>
                <p>Refreshbooru is an enhanced frontend for Danbooru.</p>
                <p>The project is built using the <a href="https://danbooru.donmai.us/wiki_pages/help:api">Danbooru API</a> and vanilla JavaScript.</p>
                <p>Future plans include migrating the project to <a href="https://nuxt.com/">Nuxt3</a> and adding authentication features, along with full Danbooru functionality (such as liking posts, the ability to create posts, etc.).</p>
                <p>Project link: <a href="https://refreshbooru.vercel.app/">https://refreshbooru.vercel.app/</a></p>
            </div>
        </header>
        <main class='consoleBody'>
            <div class="consoleText">
                ${portfolioLinks}
            </div>    
        </main>`,
    socianonet: `
        <header class='consoleHeader'>
            <img src='src/img/socianonet.png'/>
            <div class='consoleHeaderText'>
                <p>"Socianonet" is a project that lets users write anonymous articles, inspired by the platform "Telegraph."</p>
                <p>It was built using EJS and MongoDB.</p>
                <p>The project was discontinued when Heroku's free servers were shutdown. Now, it's open for anyone to view, edit, and copy.</p>
                <p>Repository link: <a href="https://github.com/TheFunnyDay/socianonet" target="_blank">https://github.com/TheFunnyDay/socianonet</a></p>
            </div>
        </header>
        <main class='consoleBody'>
            <div class="consoleText">
                ${portfolioLinks}
            </div>
        </main>`,
    genshinlauncher: `
        <header class='consoleHeader'>
            <img src='src/img/genshinlauncher.png'/>
            <div class='consoleHeaderText'>
                <p>Genshin Launcher (unofficial) is a third-party launcher for the game Genshin Impact, featuring some small enhancements.</p>
                <p>The project is currently on hold, with plans to migrate it using modern technologies in the future.</p>
                <p>Repository link: <a href="https://github.com/GenshinLauncher/genshin-launcher-old" target="_blank">https://github.com/GenshinLauncher/genshin-launcher-old</a></p>
            </div>
        </header>
        <main class='consoleBody'>
            <div class="consoleText">
                ${portfolioLinks}
            </div>
        </main>`,
    ngoldprojects: `
        <header class='consoleHeader'>
            <img src='src/img/pixelLogo.png'/>
            <div class='consoleHeaderText'>
                <p>NGoldProjects are my old (school) projects that have been redesigned for the purpose of preserving them in personal history.</p>
                <p>You can view them here: <a href="https://ngoldprojects.github.io/" target="_blank">https://ngoldprojects.github.io/</a></p>
            </div>
        </header>
        <main class='consoleBody'>
            <div class="consoleText">
                ${portfolioLinks}
            </div>
        </main>`,
};


// Change page function
function navigateTo(page) {
    if (pages[page]) {
        output.innerHTML = pages[page];
        history.pushState({ page: page }, '', `?p=${page}`);
        setupLinks(); // For setting up links
    } else {
        output.innerHTML = `
            <p style="color: red; list-style: none">Page not found</p>
            <p list-style: none"><a href="?p=main" style="color: white; text-decoration: none" class="page-link">Click here or input "start" for back to main</a></p>
        `;
    }
}

// Setup links without reloading the page
function setupLinks() {
    const links = document.querySelectorAll('.page-link');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const urlParams = new URLSearchParams(new URL(link.href).search);
            const page = urlParams.get('p');
            navigateTo(page);
        });
    });
}

// check page param and navigate to it
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('p') || 'main';
    navigateTo(page);
};

// Set background image 
function setBackgroundImage(url) {
    document.getElementById('app').style.backgroundImage = `url(${url})`;
    localStorage.setItem('backgroundImageUrl', url);
}




// Setup command input
input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const command = input.value.trim().toLowerCase();
        handleCommand(command);
        input.value = '';
    }
});



function handleCommand(command) {
    const parts = command.split(' ');
    const cmd = parts[0];
    const args = parts.slice(1);
    
    switch (cmd) {
        case 'start':
            navigateTo('main');
            break;
        case 'back':
            navigateTo('main');
            break;
        case 'portfolio':
            if (args.length > 0) {
                const portfolioName = args.join(' ');
                switch (portfolioName) {
                    case 'doubleyou':
                        navigateTo('doubleyou');
                        break;
                    case 'refreshbooru':
                        navigateTo('refreshbooru');
                        break;
                    case 'customsearch':
                        navigateTo('customsearch');
                        break;
                    case 'socianonet':
                        navigateTo('socianonet');
                        break;
                    case 'genshinlauncher':
                        navigateTo('genshinlauncher');
                        break;
                    case 'ngoldprojects':
                        navigateTo('ngoldprojects');
                        break;
                    default:
                        output.innerHTML = `<p style="color: red;">Unknown portfolio: ${portfolioName}</p> <br> Available portfolios: <ul><li>doubleyou</li><li>refreshbooru</li><li>customsearch</li><li>socianonet</li><li>genshinlauncher</li><li>ngoldprojects</li></ul>`;
                        break;
                }
            } else {
                navigateTo('portfolio');
            }
            break;
        case 'game':
            navigateTo('game');
            break;
        case 'setup':
            if (args.length > 0) {
                if (args[0] === 'remove') {
                    localStorage.removeItem('backgroundImageUrl');
                    document.getElementById('app').style.backgroundImage = '';
                    output.textContent = 'Background image removed from localStorage.';
                } else {
                    setBackgroundImage(args.join(' '));
                    output.textContent = `Background image set to: ${args.join(' ')}`;
                }
            } else {
                output.innerHTML = `<p>Please provide a URL for the background image or type "setup remove" to delete.</p><br><p>Current background image: <a href="${localStorage.getItem('backgroundImageUrl')}" target="_blank">${localStorage.getItem('backgroundImageUrl')}</a></p>`;
            }
            break;
        case 'settings':
            if (args.length > 0 && args[0] === 'blur') {
                if (args.length === 2) {
                    const blurValue = args[1];
                    const localSet = JSON.parse(localStorage.getItem('tfdSettings'))
                    if (blurValue <= 0) {
                        output.textContent = 'Blur removed.';
                        document.getElementById('terminal').style.backdropFilter = '';
                        localSet.consoleBlur = 0;
                        localStorage.setItem('tfdSettings', JSON.stringify(localSet));
                    } else {
                        localSet.consoleBlur = blurValue;
                        localStorage.setItem('tfdSettings', JSON.stringify(localSet));
                        document.getElementById('terminal').style.backdropFilter = `blur(${blurValue}px)`;
                        output.textContent = `Blur set to: ${blurValue}`;
                    }
                } else {
                    output.textContent = 'Please provide a value for blur (e.g., "settings blur 1").';
                }
            } else {
                output.innerHTML = '<p style="color: red;">Unknown settings command.</p><p>Its syntax is: settings &lt;command&gt; &lt;value&gt;</p> <br>Available settings: <br><ul><li>blur &lt;value&gt;</li></ul>';
            }
            break;
        case 'help':
            output.innerHTML = 'Available commands: <br>start | back - back to main<br> portfolio - go to portfolio page<br> portfolio &lt;portfolio name&gt; - go to portfolio page with selected portfolio<br> game - go to game<br> setup &lt;url to image&gt; - set background image<br> setup remove - remove background image<br> settings blur &lt;value&gt; - set blur value<br>help - you actually already know<br>';
            break;
        default:
            output.textContent = `Unknown command: ${command}`;
            break;
    }
    terminal.scrollTop = terminal.scrollHeight;
}




// Setup popstate event
window.onpopstate = function (event) {
    if (event.state && event.state.page) {
        navigateTo(event.state.page);
    }
};

setupLinks();