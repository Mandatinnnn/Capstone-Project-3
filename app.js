const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// In-memory store for posts
let posts = [
    {
        title: "Lorem Ipsum 1", 
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel dictum erat, ac rutrum dui. Vestibulum in lacus id leo volutpat maximus id at arcu. Mauris lacus purus, maximus in massa eu, interdum suscipit metus. Aliquam facilisis erat eleifend tincidunt luctus. Morbi scelerisque leo augue, ut lacinia libero ornare at. Cras maximus, sapien ut eleifend molestie, ligula lectus fringilla tortor, sit amet ultricies metus nibh quis libero. Integer in tincidunt ligula. Nunc augue sapien, consequat ac finibus ac, rutrum eget ante. Nam eu arcu lacus. Nam nisl lectus, sagittis pharetra orci id, venenatis scelerisque sapien. Proin vitae purus eros. Quisque non consectetur enim. Proin quis sapien non massa elementum fermentum. Nunc elementum, diam eu sodales tristique, purus sem pulvinar felis, ac sollicitudin nisl nisi nec orci. Maecenas euismod lectus vel mauris imperdiet, et euismod sapien volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In quis semper lectus, eu viverra tellus. Maecenas a velit turpis. Morbi eros dui, mattis nec dui at, dapibus maximus risus. Maecenas vestibulum ante id arcu molestie, nec tempor nisi porta. Suspendisse potenti. Maecenas libero erat, malesuada quis erat sed, vehicula posuere ante. In non lobortis odio. Vivamus suscipit aliquam nulla id facilisis. Sed sollicitudin enim facilisis libero pulvinar, at posuere sem egestas. Sed dictum urna id fermentum semper. Morbi iaculis libero sed magna fermentum sagittis. Curabitur felis augue, accumsan id pharetra a, efficitur ut tortor. Phasellus sollicitudin nunc sed luctus rhoncus. Morbi ut est leo. Mauris quis diam at elit tincidunt lacinia sollicitudin sed nisl. Maecenas dapibus, massa lacinia consectetur posuere, est turpis pulvinar nisl, ac luctus neque orci quis ipsum. Etiam aliquam tempus felis et egestas. Aliquam sit amet gravida lorem. Donec commodo sodales augue eget ultrices. Sed quis luctus ligula, non commodo arcu. Praesent sed ornare metus, nec finibus justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed suscipit quam erat, sit amet auctor lectus volutpat feugiat. Vestibulum arcu justo, porta ut ante sit amet, congue finibus enim. Quisque eu blandit lorem. Vivamus auctor leo ipsum. Pellentesque vitae consequat mi. Aenean posuere arcu posuere consectetur convallis. Vestibulum elementum, ante non ultricies pulvinar, massa mi auctor enim, ultrices porta tellus metus ac ipsum. Vivamus placerat leo eget urna pulvinar accumsan. Vivamus convallis eleifend nisi, ac laoreet sem mattis ac. Aenean vel ex imperdiet, pretium erat vitae, pharetra mi. Mauris semper tortor quis justo eleifend, vel hendrerit risus consectetur."
    },
    {
        title: "Lorem Ipsum 2", 
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel dictum erat, ac rutrum dui. Vestibulum in lacus id leo volutpat maximus id at arcu. Mauris lacus purus, maximus in massa eu, interdum suscipit metus. Aliquam facilisis erat eleifend tincidunt luctus. Morbi scelerisque leo augue, ut lacinia libero ornare at. Cras maximus, sapien ut eleifend molestie, ligula lectus fringilla tortor, sit amet ultricies metus nibh quis libero. Integer in tincidunt ligula. Nunc augue sapien, consequat ac finibus ac, rutrum eget ante. Nam eu arcu lacus. Nam nisl lectus, sagittis pharetra orci id, venenatis scelerisque sapien. Proin vitae purus eros. Quisque non consectetur enim. Proin quis sapien non massa elementum fermentum. Nunc elementum, diam eu sodales tristique, purus sem pulvinar felis, ac sollicitudin nisl nisi nec orci. Maecenas euismod lectus vel mauris imperdiet, et euismod sapien volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In quis semper lectus, eu viverra tellus. Maecenas a velit turpis. Morbi eros dui, mattis nec dui at, dapibus maximus risus. Maecenas vestibulum ante id arcu molestie, nec tempor nisi porta. Suspendisse potenti. Maecenas libero erat, malesuada quis erat sed, vehicula posuere ante. In non lobortis odio. Vivamus suscipit aliquam nulla id facilisis. Sed sollicitudin enim facilisis libero pulvinar, at posuere sem egestas. Sed dictum urna id fermentum semper. Morbi iaculis libero sed magna fermentum sagittis. Curabitur felis augue, accumsan id pharetra a, efficitur ut tortor. Phasellus sollicitudin nunc sed luctus rhoncus. Morbi ut est leo. Mauris quis diam at elit tincidunt lacinia sollicitudin sed nisl. Maecenas dapibus, massa lacinia consectetur posuere, est turpis pulvinar nisl, ac luctus neque orci quis ipsum. Etiam aliquam tempus felis et egestas. Aliquam sit amet gravida lorem. Donec commodo sodales augue eget ultrices. Sed quis luctus ligula, non commodo arcu. Praesent sed ornare metus, nec finibus justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed suscipit quam erat, sit amet auctor lectus volutpat feugiat. Vestibulum arcu justo, porta ut ante sit amet, congue finibus enim. Quisque eu blandit lorem. Vivamus auctor leo ipsum. Pellentesque vitae consequat mi. Aenean posuere arcu posuere consectetur convallis. Vestibulum elementum, ante non ultricies pulvinar, massa mi auctor enim, ultrices porta tellus metus ac ipsum. Vivamus placerat leo eget urna pulvinar accumsan. Vivamus convallis eleifend nisi, ac laoreet sem mattis ac. Aenean vel ex imperdiet, pretium erat vitae, pharetra mi. Mauris semper tortor quis justo eleifend, vel hendrerit risus consectetur."
    },
    {
        title: "Lorem Ipsum 3", 
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel dictum erat, ac rutrum dui. Vestibulum in lacus id leo volutpat maximus id at arcu. Mauris lacus purus, maximus in massa eu, interdum suscipit metus. Aliquam facilisis erat eleifend tincidunt luctus. Morbi scelerisque leo augue, ut lacinia libero ornare at. Cras maximus, sapien ut eleifend molestie, ligula lectus fringilla tortor, sit amet ultricies metus nibh quis libero. Integer in tincidunt ligula. Nunc augue sapien, consequat ac finibus ac, rutrum eget ante. Nam eu arcu lacus. Nam nisl lectus, sagittis pharetra orci id, venenatis scelerisque sapien. Proin vitae purus eros. Quisque non consectetur enim. Proin quis sapien non massa elementum fermentum. Nunc elementum, diam eu sodales tristique, purus sem pulvinar felis, ac sollicitudin nisl nisi nec orci. Maecenas euismod lectus vel mauris imperdiet, et euismod sapien volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In quis semper lectus, eu viverra tellus. Maecenas a velit turpis. Morbi eros dui, mattis nec dui at, dapibus maximus risus. Maecenas vestibulum ante id arcu molestie, nec tempor nisi porta. Suspendisse potenti. Maecenas libero erat, malesuada quis erat sed, vehicula posuere ante. In non lobortis odio. Vivamus suscipit aliquam nulla id facilisis. Sed sollicitudin enim facilisis libero pulvinar, at posuere sem egestas. Sed dictum urna id fermentum semper. Morbi iaculis libero sed magna fermentum sagittis. Curabitur felis augue, accumsan id pharetra a, efficitur ut tortor. Phasellus sollicitudin nunc sed luctus rhoncus. Morbi ut est leo. Mauris quis diam at elit tincidunt lacinia sollicitudin sed nisl. Maecenas dapibus, massa lacinia consectetur posuere, est turpis pulvinar nisl, ac luctus neque orci quis ipsum. Etiam aliquam tempus felis et egestas. Aliquam sit amet gravida lorem. Donec commodo sodales augue eget ultrices. Sed quis luctus ligula, non commodo arcu. Praesent sed ornare metus, nec finibus justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed suscipit quam erat, sit amet auctor lectus volutpat feugiat. Vestibulum arcu justo, porta ut ante sit amet, congue finibus enim. Quisque eu blandit lorem. Vivamus auctor leo ipsum. Pellentesque vitae consequat mi. Aenean posuere arcu posuere consectetur convallis. Vestibulum elementum, ante non ultricies pulvinar, massa mi auctor enim, ultrices porta tellus metus ac ipsum. Vivamus placerat leo eget urna pulvinar accumsan. Vivamus convallis eleifend nisi, ac laoreet sem mattis ac. Aenean vel ex imperdiet, pretium erat vitae, pharetra mi. Mauris semper tortor quis justo eleifend, vel hendrerit risus consectetur."
    },
    {
        title: "Lorem Ipsum 4", 
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel dictum erat, ac rutrum dui. Vestibulum in lacus id leo volutpat maximus id at arcu. Mauris lacus purus, maximus in massa eu, interdum suscipit metus. Aliquam facilisis erat eleifend tincidunt luctus. Morbi scelerisque leo augue, ut lacinia libero ornare at. Cras maximus, sapien ut eleifend molestie, ligula lectus fringilla tortor, sit amet ultricies metus nibh quis libero. Integer in tincidunt ligula. Nunc augue sapien, consequat ac finibus ac, rutrum eget ante. Nam eu arcu lacus. Nam nisl lectus, sagittis pharetra orci id, venenatis scelerisque sapien. Proin vitae purus eros. Quisque non consectetur enim. Proin quis sapien non massa elementum fermentum. Nunc elementum, diam eu sodales tristique, purus sem pulvinar felis, ac sollicitudin nisl nisi nec orci. Maecenas euismod lectus vel mauris imperdiet, et euismod sapien volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In quis semper lectus, eu viverra tellus. Maecenas a velit turpis. Morbi eros dui, mattis nec dui at, dapibus maximus risus. Maecenas vestibulum ante id arcu molestie, nec tempor nisi porta. Suspendisse potenti. Maecenas libero erat, malesuada quis erat sed, vehicula posuere ante. In non lobortis odio. Vivamus suscipit aliquam nulla id facilisis. Sed sollicitudin enim facilisis libero pulvinar, at posuere sem egestas. Sed dictum urna id fermentum semper. Morbi iaculis libero sed magna fermentum sagittis. Curabitur felis augue, accumsan id pharetra a, efficitur ut tortor. Phasellus sollicitudin nunc sed luctus rhoncus. Morbi ut est leo. Mauris quis diam at elit tincidunt lacinia sollicitudin sed nisl. Maecenas dapibus, massa lacinia consectetur posuere, est turpis pulvinar nisl, ac luctus neque orci quis ipsum. Etiam aliquam tempus felis et egestas. Aliquam sit amet gravida lorem. Donec commodo sodales augue eget ultrices. Sed quis luctus ligula, non commodo arcu. Praesent sed ornare metus, nec finibus justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed suscipit quam erat, sit amet auctor lectus volutpat feugiat. Vestibulum arcu justo, porta ut ante sit amet, congue finibus enim. Quisque eu blandit lorem. Vivamus auctor leo ipsum. Pellentesque vitae consequat mi. Aenean posuere arcu posuere consectetur convallis. Vestibulum elementum, ante non ultricies pulvinar, massa mi auctor enim, ultrices porta tellus metus ac ipsum. Vivamus placerat leo eget urna pulvinar accumsan. Vivamus convallis eleifend nisi, ac laoreet sem mattis ac. Aenean vel ex imperdiet, pretium erat vitae, pharetra mi. Mauris semper tortor quis justo eleifend, vel hendrerit risus consectetur."
    }  
];

// Routes
app.get('/', (req, res) => {
    res.render('index', { posts });
});

app.get('/create', (req, res) => {
    res.render('create');
});

app.post('/create', (req, res) => {
    const { title, content } = req.body;
    posts.push({ title, content });
    res.redirect('/');
});

app.get('/edit/:id', (req, res) => {
    const { id } = req.params;
    const post = posts[id];
    res.render('edit', { post, id });
});

app.post('/edit/:id', (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    posts[id] = { title, content };
    res.redirect('/');
});

app.post('/delete/:id', (req, res) => {
    const { id } = req.params;
    posts.splice(id, 1);
    res.redirect('/');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
