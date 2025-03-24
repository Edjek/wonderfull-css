const tabs = document.querySelectorAll('.tab');
const tabsContent = document.querySelectorAll('.tab-content');

tabs.forEach((tab) => tab.addEventListener('click', handleTabClick));

function handleTabClick(event) {
    const clickedTab = event.target;
    deactivateAllTabs();

    clickedTab.classList.add('active-tab');

    tabsContent.forEach((content) => {
        content.classList.remove('active-tab-content');

        if (clickedTab.textContent === content.firstElementChild.textContent) {
            content.classList.add('active-tab-content');
        }
    });
}

function deactivateAllTabs() {
    tabs.forEach((tab) => tab.classList.remove('active-tab'));
}
