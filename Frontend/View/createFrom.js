export function render(movie) {
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>New Item-Form</title>
    <link rel="stylesheet" href=" /style.css" />
</head>
<body>
<form action="/item/new" method="post">
    <input type="hidden" id="id" name="id" value="${movie.id}" />
    <div>
        <label for="title">Email:</label>
        <input type="text" id="title" name="title" value="${movie.title}" />
    </div>
    <div>
        <label for="id">Item:</label>
        <input type="text" id="year" name="year" value="${movie.year}" />
    </div>
    <label for="public">Suplier-Adress:</label>
    <input type="checkbox" id ="public" name = "public" value="${movie.year}" checked />
    <div>
        <button type="submit">speichern</button>
    </div>
</form>
</body>
</html>
`;
}