// Auto-inject topbar into the page
document.addEventListener('DOMContentLoaded', function() {
    const topbarHTML = `
    <div class="topbar">
        <div class="logo"></div>
        <div class="title">Nuclear Blast Testing Facility Wiki</div>
        <div class="nav-links">
            <a href="/index.html">Wiki Homepage</a>
            <a href="https://nbtf.ca">NBTF Website</a>
            <a href="https://www.roblox.com/communities/12507282/Pyrowh#!/about">Group</a>
            <a href="https://discord.gg/nbtf">Discord</a>
            <a>   </a>
        </div>
    </div>
    `;

    // Insert topbar at the beginning of the body
    document.body.insertAdjacentHTML('afterbegin', topbarHTML);
});
