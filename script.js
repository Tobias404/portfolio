function loadMore(sectionId) {
    const container = document.getElementById(sectionId);
    const cards = container.querySelectorAll('.card');
    
    // Show all cards
    cards.forEach(card => {
        card.style.display = 'block';
    });

    // Show the "Show Less" button and hide the "Load More" button
    container.querySelector('.show-less-btn').style.display = 'inline-block';
    container.querySelector('.load-more-btn').style.display = 'none';
}

function showLess(sectionId) {
    const container = document.getElementById(sectionId);
    const cards = container.querySelectorAll('.card');
    
    // Hide all cards beyond the first 4
    cards.forEach((card, index) => {
        if (index >= 4) card.style.display = 'none';
    });

    // Hide the "Show Less" button and show the "Load More" button
    container.querySelector('.show-less-btn').style.display = 'none';
    container.querySelector('.load-more-btn').style.display = 'inline-block';
}


(function(d, t) {
    var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
    v.onload = function() {
        window.voiceflow.chat.load({
            verify: { projectID: '6695857723cb7050aa602032' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production'
        });
    }
    v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
})(document, 'script');