function mudarCorDeFundo() {
    
    var cores = [
        '#FF5733', '#33FF57', '#5733FF', '#33A8FF', '#FF33C9',
        '#F8FF33', '#7D33FF', '#33FFDE', '#FF3333', '#33FF86'
    ];

    
    var corAleatoria = cores[Math.floor(Math.random() * cores.length)];

    
    document.body.style.backgroundColor = corAleatoria;
}
