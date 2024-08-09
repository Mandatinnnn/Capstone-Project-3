document.addEventListener('DOMContentLoaded', function() {
    const posts = document.querySelectorAll('.post-card');

    posts.forEach(post => {
        const pars = post.querySelectorAll("p");
        pars.forEach(par => {
            par.addEventListener('click', function() {
                if (!post.classList.contains('active')) {
                    posts.forEach(p => p.classList.remove('active')); 
                    posts.forEach(p => p.classList.add('inactive'));
                    post.classList.remove('inactive');
                    post.classList.add('active');

                    const visPar = post.querySelector('p#vis-par');
                    const hidPar = post.querySelector('p#hid-par');
                    visPar.style.display = 'block';
                    hidPar.style.display = 'none';
                } else {
                    post.classList.remove('active');
                    posts.forEach(p => p.classList.remove('inactive'));

                    const visPar = post.querySelector('p#vis-par');
                    const hidPar = post.querySelector('p#hid-par');
                    visPar.style.display = 'none';
                    hidPar.style.display = 'block';
                }
            });
        });
    });
});