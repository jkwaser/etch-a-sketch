    for (let i = 0; i < 250; i++) { 
        const content = document.createElement('div');
        content.classList.add('content');
        content.className = "container-item";
        content.addEventListener('mouseover', function (e) {
            e.target.style.background = 'blue';
            });        
        container.appendChild(content);
    }

