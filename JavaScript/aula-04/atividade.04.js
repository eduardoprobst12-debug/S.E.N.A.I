let filmes = [
    {titulo: "Pokémon: The First Movie", ano: 1998, genero: "animação"},

    {titulo: "Michael", ano: 2026, genero: "drama"},

    {titulo: "A Odisseia", ano: 2026, genero: Aventura},
]

Filmes.forEach(function(filme) {
      console.log(`${filme.titulo} - ${filme.ano} - ${filme.genero}`)
})