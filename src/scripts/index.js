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
            if (args.length > 0) {
                const localSet = JSON.parse(localStorage.getItem('conSettings'));
                const settingName = args[0];
                const settingValue = args.slice(1).join(' ');

                switch (settingName) {
                    case 'restoreall':
                        const defaultSettings = {
                            consoleBlur: "0",
                            backgroundPositionY: "center",
                            consoleBgColor: "0,0,0,0.7",
                            fontColor: "#ffffff"
                        };
                    
                        document.getElementById('terminal').style.backdropFilter = '';
                        document.getElementById('app').style.backgroundPositionY = 'center';
                        document.getElementById('terminal').style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                        document.getElementById('terminal').style.color = '#ffffff';
                        document.getElementById('commandInput').style.color = '#ffffff';
                        localStorage.setItem('conSettings', JSON.stringify(defaultSettings));
                        
                        output.textContent = 'All settings restored to default.';
                        break;
                    case 'blur':
                        if (settingValue) {
                            localSet.consoleBlur = settingValue;
                            document.getElementById('terminal').style.backdropFilter = `blur(${settingValue}px)`;
                            output.textContent = `Blur set to: ${settingValue}`;
                            localStorage.setItem('conSettings', JSON.stringify(localSet));
                        } else {
                            output.textContent = 'Invalid value for blur. Use a value like "blur 5".';
                        }
                        break;
                    case 'bgpos':
                        if (settingValue.match(/^(top|bottom|center|[0-9]+(px|%)?)$/)) {
                            localSet.backgroundPositionY = settingValue;
                            document.getElementById('app').style.backgroundPositionY = settingValue;
                            output.textContent = `Background position Y set to: ${settingValue}`;
                            localStorage.setItem('conSettings', JSON.stringify(localSet));
                        } else if (settingValue === 'restore') {
                            localSet.backgroundPositionY = 'center';
                            document.getElementById('app').style.backgroundPositionY = 'center';
                            output.textContent = 'Background position Y restored to default (center).';
                            localStorage.setItem('conSettings', JSON.stringify(localSet));
                        } else {
                            output.textContent = 'Invalid value for bgpos. Use a value like "center", "top", "bottom", or in px/%.';
                        }
                        break;
                    case 'bgcolor':
                        if (settingValue.match(/^\d{1,3},\d{1,3},\d{1,3},\d(\.\d+)?$/)) {
                            localSet.consoleBgColor = settingValue;
                            document.getElementById('terminal').style.backgroundColor = `rgba(${settingValue})`;
                            output.textContent = `Console background color set to: rgba(${settingValue})`;
                            localStorage.setItem('conSettings', JSON.stringify(localSet));
                        } else if (settingValue === 'restore') {
                            localSet.consoleBgColor = "0,0,0,0.7";
                            document.getElementById('terminal').style.backgroundColor = `rgba(0,0,0,0.7)`;
                            output.textContent = 'Console background color restored to default (rgba(0,0,0,0.7)).';
                            localStorage.setItem('conSettings', JSON.stringify(localSet));
                        } else {
                            output.textContent = 'Invalid value for bgcolor. Use a valid rgba value (e.g., 0,0,0,0.7).';
                        }
                        break;
                    case 'fontcolor':
                        if (settingValue.match(/^#[0-9A-Fa-f]{6}$/)) {
                            localSet.fontColor = settingValue;
                            document.getElementById('terminal').style.color = settingValue;
                            document.getElementById('commandInput').style.color = settingValue;
                            output.textContent = `Font color set to: ${settingValue}`;
                            localStorage.setItem('conSettings', JSON.stringify(localSet));
                        } else if (settingValue === 'restore') {
                            localSet.fontColor = "#ffffff";
                            document.getElementById('terminal').style.color = "#ffffff";
                            document.getElementById('commandInput').style.color = "#ffffff";
                            output.textContent = 'Font color restored to default (#ffffff).';
                            localStorage.setItem('conSettings', JSON.stringify(localSet));
                        } else {
                            output.textContent = 'Invalid value for font color. Use a valid hex color code (e.g., #ff0000).';
                        }
                        break;
                    default:
                        output.innerHTML = `<p style="color: red;">Unknown settings command: ${settingName}.</p><p>Use settings &lt;command&gt; &lt;value&gt;.</p>`;
                        break;
                }
            } else {
                output.innerHTML = `
                        <p style="color: red;">Unknown settings command.</p>
                        <ul>
                            <li>blur &lt;value&gt; - set blur value</li>
                            <li>bgpos &lt;value&gt; - set background position Y</li>
                            <li>bgpos restore - restore background position to default</li>
                            <li>bgcolor &lt;R,G,B,A&gt; - set console background color</li>
                            <li>bgcolor restore - restore console background color to default</li>
                            <li>fontcolor &lt;hex&gt; - set font color</li>
                            <li>fontcolor restore - restore font color to default</li>
                            <li>restoreall - restore all settings</li>
                        </ul>
                    `;
            }
            break;
        case 'help':
            output.innerHTML = 'Available commands: <br><ul><li>start | back - back to main</li><li>portfolio - go to portfolio page</li><li>game - go to game</li><li>setup - background image settings<ul><li>setup &lt;url to image&gt; - set background image</li><li>setup remove - remove background image</li></ul></li><li>settings - various settings<ul><li>settings blur &lt;value&gt; - set blur value</li><li>settings bgpos &lt;value&gt; - set background position Y (valid values: % | px | bottom | top | center)</li><li>settings bgpos restore - restore background position to default (center)</li><li>settings bgcolor &lt;R,G,B,A&gt; - set console background color (RGBA)</li><li>settings bgcolor restore - restore console background color to default (rgba(0,0,0,0.7))</li><li>settings fontcolor &lt;hex&gt; - set font color (hex)</li><li>settings fontcolor restore - restore font color to default (#ffffff)</li><li>settings restoreall - restore all settings to default</ul></li><li>help - displays this help message</li></ul>';
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