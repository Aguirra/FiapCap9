        // Dados para o gráfico de barras (receitas e despesas)
        var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'];
        var receitas = [5000, 8000, 6000, 7000, 9000, 10000];
        var despesas = [4000, 7000, 5500, 6500, 8000, 9500];

        // Dados para o gráfico de pizza (gastos com cartão de crédito por categoria)
        var categorias = ['Alimentação', 'Escola', 'Combustível', 'Cinema', 'Passeios', 'Show', 'Teatro'];
        var valores = [1500, 800, 1200, 500, 700, 1000, 600];

        // Configuração do gráfico de barras
        var ctxBar = document.getElementById('barChart').getContext('2d');
        var barChart = new Chart(ctxBar, {
            type: 'bar',
            data: {
                labels: meses,
                datasets: [{
                    label: 'Receitas',
                    data: receitas,
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    borderColor: 'rgba(75, 192, 192, 0.6)',
                    borderWidth: 1
                }, {
                    label: 'Despesas',
                    data: despesas,
                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

        // Configuração do gráfico de pizza
        var ctxPie = document.getElementById('pieChart').getContext('2d');
        var pieChart = new Chart(ctxPie, {
            type: 'pie',
            data: {
                labels: categorias,
                datasets: [{
                    label: 'Gastos com Cartão de Crédito',
                    data: valores,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(106, 90, 205, 0.6)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: 'Gastos com Cartão de Crédito por Categoria'
                }
            }
        });