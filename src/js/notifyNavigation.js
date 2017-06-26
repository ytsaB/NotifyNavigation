if (notifyNavigation === undefined) {
    function navigationItem(text, link)
    {
        this.text = text;
        this.link = link;
    }

    function notifyNavigation(containerObject) {
        containerObject.className += "notifyNavigation";
        var ul = document.createElement('ul');
        containerObject.appendChild(ul);

        this.addNavigationItem = function(navigationItem) {
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.href = navigationItem.link;
            a.innerHTML = navigationItem.text;
            li.appendChild(a);
            ul.appendChild(li);
        } 
    }
}