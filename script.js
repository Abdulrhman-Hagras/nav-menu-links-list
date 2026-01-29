const navLinkList = [
    { text: 'INSTAGRAM', href: '#' },
    { text: 'TWITTER', href: '#' },
    { text: 'GITHUB', href: '#' },
    { text: 'LINKEDIN', href: '#' }
];

function createNavMenuLink(text, href = '') {
    const link = document.createElement('a');
    link.href = href;
    link.className = 'nav-menu-link-w-inline-block';
    
    const letters = text.split('');
    letters.forEach((letter, i) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.className = 'letter';

        
        const delay = i * 0.02; 
        span.style.setProperty('--delay', delay + 's');

        link.appendChild(span);
    });
    
    return link;
}

function renderNavLinks() {
    const navMenuLinksList = document.querySelector('.nav-menu-links-list');
    
    navMenuLinksList.innerHTML = '';
    
    navLinkList.forEach(linkData => {
        const linkElement = createNavMenuLink(linkData.text, linkData.href);
        navMenuLinksList.appendChild(linkElement);
    });
}

document.addEventListener('DOMContentLoaded', renderNavLinks);