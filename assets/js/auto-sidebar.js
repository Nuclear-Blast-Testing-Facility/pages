// Auto-inject sidebar into the page
document.addEventListener('DOMContentLoaded', function() {
    const sidebarHTML = `
        <div class="sidebar">
            <h2>Wiki Navigation</h2>
            <button class="collapsible">Game Knowledge / How to Play</button>
            <div class="collapsible-content">
                <ul>
                    <li><a href="/game/overview.html">Overview</a></li>
                    <li><a href="/game/gui.html">GUI</a></li>
                    <li><a href="/game/locations.html">Locations</a></li>
                    <li><a href="/game/history.html">History</a></li>
                    <li><a href="/game/roles.html">Roles from game</a></li>
                </ul>
            </div>
            <button class="collapsible">FAQ</button>
            <div class="collapsible-content">
                <ul>
                    <li><a href="#game">Game FAQ</a></li>
                    <li><a href="#discord">Discord FAQ</a></li>
                </ul>
            </div>
            <button class="collapsible">Extra Information</button>
            <div class="collapsible-content">
                <ul>
                    <li><a href="#credits">Credits</a></li>
                    <li><a href="#contact">Contact Information</a></li>
                </ul>
            </div>
        </div>
    `;

    // Find the topbar
    const topbar = document.querySelector('.topbar');
    
    // Get all content after topbar (or all body children if no topbar)
    const bodyChildren = Array.from(document.body.children);
    
    // Collect elements that should be wrapped in content-container
    const contentElements = bodyChildren.filter((el) => {
        // Skip topbar, script tags, and already-existing content-container
        if (el === topbar) return false;
        if (el.tagName === 'SCRIPT') return false;
        if (el.classList.contains('content-container')) return false;
        return true;
    });

    // Create the content-container wrapper
    const contentContainer = document.createElement('div');
    contentContainer.className = 'content-container';
    
    // Add sidebar HTML to the container
    contentContainer.innerHTML = sidebarHTML;
    
    // Move existing content elements into the container
    contentElements.forEach(el => {
        contentContainer.appendChild(el);
    });

    // Insert content-container after topbar (or at beginning if no topbar)
    if (topbar) {
        topbar.insertAdjacentElement('afterend', contentContainer);
    } else {
        document.body.insertAdjacentElement('afterbegin', contentContainer);
    }

    // Initialize collapsible functionality
    initCollapsibles();
});

function initCollapsibles() {
    const collapsibles = document.querySelectorAll('.collapsible');
    
    collapsibles.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
}
